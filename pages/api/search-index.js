import translationIT from "@/public/locales/it/it.json";
import { requestWordPress } from "@/utils/graphql";
import { GET_BLOG_INDEX } from "@/utils/queries";

const stripHtml = (value = "") =>
  value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const buildStaticIndex = () => {
  const services = (translationIT?.servizi?.serviziItem || []).map((item) => ({
    id: `service-${item.link}`,
    type: "service",
    title: item.name,
    description: stripHtml(item.descrizione),
    href: item.link,
    image: item.img,
    terms: [item.name, item.descrizione].filter(Boolean).join(" "),
  }));

  const works = (translationIT?.portfolio?.worksItem || []).map((item) => ({
    id: `work-${item.link}`,
    type: "work",
    title: item.name,
    description: stripHtml(item.descrizione),
    href: item.link,
    image: item.img,
    terms: [item.name, item.descrizione, ...(item.button || [])]
      .filter(Boolean)
      .join(" "),
  }));

  return [...services, ...works];
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=86400",
  );

  if (req.query.scope !== "posts") {
    return res.status(200).json({ items: buildStaticIndex() });
  }

  const data = await requestWordPress(GET_BLOG_INDEX, {}, {
    posts: { edges: [] },
  });
  const items = (data?.posts?.edges || []).map(({ node }) => ({
    id: `post-${node.id}`,
    type: "post",
    title: stripHtml(node.title),
    description: stripHtml(node.excerpt),
    href: `/posts/${node.slug}`,
    image: node.featuredImage?.node?.sourceUrl || null,
    terms: [
      node.title,
      node.excerpt,
      ...(node.categories?.nodes || []).map((category) => category.name),
    ]
      .filter(Boolean)
      .join(" "),
  }));

  return res.status(200).json({ items });
}
