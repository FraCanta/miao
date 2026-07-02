import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, "public");
const sourceRoots = ["pages", "components", "public/locales", "styles", "utils"];
const textExtensions = new Set([".js", ".jsx", ".json", ".css"]);
const imageReferencePattern =
  /(?:\/assets\/|(?:\.\.\/)+public\/assets\/|@\/public\/assets\/)[^"'()\s]+?\.(?:png|jpe?g|webp)/gi;
const maxWidth = 2560;
const maxConcurrency = 4;

async function listFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await listFiles(absolutePath)));
    } else if (textExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(absolutePath);
    }
  }

  return files;
}

function resolveReference(reference, sourceFile) {
  if (reference.startsWith("/assets/")) {
    return path.join(publicRoot, reference.slice(1));
  }

  if (reference.startsWith("@/public/assets/")) {
    return path.join(projectRoot, reference.slice(2));
  }

  return path.resolve(path.dirname(sourceFile), reference);
}

function optimizedPath(sourcePath) {
  const extension = path.extname(sourcePath);
  return `${sourcePath.slice(0, -extension.length)}.optimized.webp`;
}

function optimizedReference(reference) {
  return reference.replace(/\.(?:png|jpe?g|webp)$/i, ".optimized.webp");
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function mapWithConcurrency(items, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function run() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex++;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(maxConcurrency, items.length) }, run),
  );

  return results;
}

async function convertImage(sourcePath) {
  const targetPath = optimizedPath(sourcePath);
  const sourceStats = await fs.stat(sourcePath);
  const metadata = await sharp(sourcePath).metadata();
  const isSmallPng =
    path.extname(sourcePath).toLowerCase() === ".png" &&
    sourceStats.size <= 250 * 1024;

  let pipeline = sharp(sourcePath).rotate();

  if (metadata.width && metadata.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  pipeline = isSmallPng
    ? pipeline.webp({ lossless: true, effort: 5 })
    : pipeline.webp({
        quality: 86,
        alphaQuality: 100,
        smartSubsample: true,
        effort: 5,
      });

  const output = await pipeline.toFile(targetPath);

  return {
    source: path.relative(projectRoot, sourcePath).replaceAll("\\", "/"),
    target: path.relative(projectRoot, targetPath).replaceAll("\\", "/"),
    sourceBytes: sourceStats.size,
    targetBytes: output.size,
    sourceWidth: metadata.width,
    sourceHeight: metadata.height,
    targetWidth: output.width,
    targetHeight: output.height,
  };
}

const textFiles = (
  await Promise.all(
    sourceRoots.map(async (directory) => {
      const absolutePath = path.join(projectRoot, directory);
      return (await pathExists(absolutePath)) ? listFiles(absolutePath) : [];
    }),
  )
).flat();

const filesWithReferences = [];
const sourceImages = new Set();
const missingReferences = [];

for (const textFile of textFiles) {
  const content = await fs.readFile(textFile, "utf8");
  const references = [...content.matchAll(imageReferencePattern)].map(
    (match) => match[0],
  ).filter((reference) => !reference.endsWith(".optimized.webp"));

  if (references.length === 0) continue;

  filesWithReferences.push({ path: textFile, content, references });

  for (const reference of references) {
    const sourcePath = resolveReference(reference, textFile);
    const relativeSource = path.relative(publicRoot, sourcePath);

    if (
      relativeSource.startsWith("..") ||
      path.isAbsolute(relativeSource) ||
      !(await pathExists(sourcePath))
    ) {
      missingReferences.push({
        file: path.relative(projectRoot, textFile).replaceAll("\\", "/"),
        reference,
      });
      continue;
    }

    sourceImages.add(sourcePath);
  }
}

const conversions = await mapWithConcurrency([...sourceImages], convertImage);
const convertedSources = new Set(
  conversions.map(({ source }) => path.join(projectRoot, source)),
);

let updatedFiles = 0;

for (const file of filesWithReferences) {
  let updatedContent = file.content;

  for (const reference of new Set(file.references)) {
    const sourcePath = resolveReference(reference, file.path);

    if (!convertedSources.has(sourcePath)) continue;

    updatedContent = updatedContent.replaceAll(
      reference,
      optimizedReference(reference),
    );
  }

  if (updatedContent !== file.content) {
    await fs.writeFile(file.path, updatedContent);
    updatedFiles += 1;
  }
}

let previousImages = [];
let previousMissingReferences = [];

try {
  const previousManifest = JSON.parse(
    await fs.readFile(
      path.join(projectRoot, "scripts", "image-optimization-manifest.json"),
      "utf8",
    ),
  );
  previousImages = previousManifest.images ?? [];
  previousMissingReferences = previousManifest.missingReferences ?? [];
} catch {
  // Il primo avvio non ha ancora un manifest da unire.
}

const allConversions = [
  ...new Map(
    [...previousImages, ...conversions].map((image) => [image.target, image]),
  ).values(),
];
const allMissingReferences = [
  ...previousMissingReferences,
  ...missingReferences,
];
const sourceBytes = allConversions.reduce(
  (total, image) => total + image.sourceBytes,
  0,
);
const targetBytes = allConversions.reduce(
  (total, image) => total + image.targetBytes,
  0,
);
const manifest = {
  generatedAt: new Date().toISOString(),
  settings: { maxWidth, maxConcurrency },
  summary: {
    convertedImages: allConversions.length,
    newConvertedImages: conversions.length,
    updatedFiles,
    sourceBytes,
    targetBytes,
    savedBytes: sourceBytes - targetBytes,
    savedPercent:
      sourceBytes === 0
        ? 0
        : Number((((sourceBytes - targetBytes) / sourceBytes) * 100).toFixed(2)),
    missingReferences: allMissingReferences.length,
  },
  missingReferences: allMissingReferences,
  images: allConversions,
};

await fs.writeFile(
  path.join(projectRoot, "scripts", "image-optimization-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(JSON.stringify(manifest.summary, null, 2));
