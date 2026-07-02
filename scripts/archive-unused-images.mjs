import { promises as fs } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const assetsRoot = path.join(projectRoot, "public", "assets");
const archiveRoot = path.join(projectRoot, "img_deleted");
const sourceRoots = ["pages", "components", "public/locales", "styles", "utils"];
const sourceFiles = ["next.config.js"];
const imageExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".webp",
]);
const textExtensions = new Set([".css", ".js", ".jsx", ".json", ".mjs"]);
const shouldMove = process.argv.includes("--move");

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listFiles(directory, extensions) {
  if (!(await exists(directory))) return [];

  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await listFiles(absolutePath, extensions)));
    } else if (!extensions || extensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(absolutePath);
    }
  }

  return files;
}

const textFileCandidates = [
  ...(await Promise.all(
    sourceRoots.map((root) =>
      listFiles(path.join(projectRoot, root), textExtensions),
    ),
  )).flat(),
  ...sourceFiles.map((file) => path.join(projectRoot, file)),
];
const textFiles = (
  await Promise.all(
    textFileCandidates.map(async (file) => ((await exists(file)) ? file : null)),
  )
).filter(Boolean);

const normalizedSource = (
  await Promise.all(textFiles.map((file) => fs.readFile(file, "utf8")))
)
  .join("\n")
  .replaceAll("\\", "/");

const images = await listFiles(assetsRoot, imageExtensions);
const candidates = [];

for (const image of images) {
  if (image.endsWith(".optimized.webp")) continue;

  const relativePath = path.relative(assetsRoot, image).replaceAll("\\", "/");
  const publicReference = `/assets/${relativePath}`;
  const repositoryReference = `public/assets/${relativePath}`;

  if (
    normalizedSource.includes(publicReference) ||
    normalizedSource.includes(repositoryReference)
  ) {
    continue;
  }

  const stats = await fs.stat(image);
  candidates.push({
    source: path.relative(projectRoot, image).replaceAll("\\", "/"),
    target: `img_deleted/${relativePath}`,
    bytes: stats.size,
  });
}

if (shouldMove) {
  for (const candidate of candidates) {
    const source = path.join(projectRoot, candidate.source);
    const target = path.join(projectRoot, candidate.target);

    if (await exists(target)) {
      throw new Error(`File già presente nell'archivio: ${candidate.target}`);
    }

    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.rename(source, target);
  }

  await fs.mkdir(archiveRoot, { recursive: true });
  const manifestPath = path.join(archiveRoot, "archive-manifest.json");
  let previousFiles = [];

  try {
    const previousManifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
    previousFiles = previousManifest.files ?? [];
  } catch {
    // Il primo archivio non ha ancora un manifest da aggiornare.
  }

  const allFiles = [
    ...new Map(
      [...previousFiles, ...candidates].map((file) => [file.target, file]),
    ).values(),
  ];

  await fs.writeFile(
    manifestPath,
    `${JSON.stringify(
      {
        archivedAt: new Date().toISOString(),
        latestArchivedFiles: candidates.length,
        files: allFiles,
      },
      null,
      2,
    )}\n`,
  );
}

console.log(
  JSON.stringify(
    {
      mode: shouldMove ? "move" : "dry-run",
      files: candidates.length,
      bytes: candidates.reduce((total, file) => total + file.bytes, 0),
    },
    null,
    2,
  ),
);
