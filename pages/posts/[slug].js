import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FacebookShareButton, LinkedinShareButton } from "next-share";

import ButtonLink from "@/components/layout/ButtonLink";
import SectionIndex from "@/components/layout/SectionIndex";
import { requestWordPress } from "@/utils/graphql";
import { GET_POST_PAGE, GET_POST_SLUGS } from "@/utils/queries";
import { getDate } from "@/utils/utils";

const SITE_URL = "https://www.miaographics.it";

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getReadingTime = (content = "") => {
  const words = stripHtml(content).split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 250));
};

export default function SinglePost({ post, recent }) {
  const categories = post?.categories?.nodes || [];
  const tags = post?.tags?.nodes || [];
  const category = categories[0]?.name || "Design";
  const featuredImage = post?.featuredImage?.node;
  const plainTitle = stripHtml(post?.title);
  const plainExcerpt = stripHtml(post?.excerpt);
  const readingTime = getReadingTime(post?.content);
  const articleUrl = `${SITE_URL}/posts/${post.slug}`;

  return (
    <div className="bg-white">
      <Head>
        <title>{`${plainTitle} — MIAO graphics`}</title>
        <meta
          name="description"
          content={
            plainExcerpt ||
            `${plainTitle}: approfondimento di branding e cultura visiva a cura di MIAO graphics.`
          }
        />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:title" content={plainTitle} />
        <meta property="og:description" content={plainExcerpt} />
        {featuredImage?.sourceUrl && (
          <meta property="og:image" content={featuredImage.sourceUrl} />
        )}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.modified} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={plainTitle} />
        <meta name="twitter:description" content={plainExcerpt} />
        {featuredImage?.sourceUrl && (
          <meta name="twitter:image" content={featuredImage.sourceUrl} />
        )}
      </Head>

      <article>
        <header className="border-b border-main/10 py-12 md:py-16 lg:py-20">
          <div className="mx-auto w-[90%] max-w-[1500px]">
            <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-second">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-red">
                  /
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="text-red">
                  /
                </li>
                <li
                  aria-current="page"
                  className="max-w-[220px] truncate text-main"
                >
                  {plainTitle}
                </li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
              <div>
                <SectionIndex>{category}</SectionIndex>
                <h1
                  className="mt-6 max-w-6xl text-5xl font-extrabold leading-[1.2] tracking-[-0.045em] text-main md:text-7xl lg:text-[clamp(4.5rem,6vw,4.5rem)]"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </div>

              <div className="lg:border-l lg:border-main/15 lg:pl-10">
                {post.excerpt && (
                  <div
                    className="text-lg leading-relaxed text-second md:text-xl"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                )}
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-[0.1em] text-main">
                  <span className="inline-flex items-center gap-2">
                    <Icon
                      icon="lucide:user-round"
                      aria-hidden="true"
                      className="text-red"
                    />
                    {post?.author?.node?.nickname ||
                      post?.author?.node?.name ||
                      "Elisa Avantey"}
                  </span>
                  <time
                    dateTime={post.date}
                    className="inline-flex items-center gap-2"
                  >
                    <Icon
                      icon="lucide:calendar-days"
                      aria-hidden="true"
                      className="text-red"
                    />
                    {getDate(post.date)}
                  </time>
                  <span className="inline-flex items-center gap-2">
                    <Icon
                      icon="lucide:clock-3"
                      aria-hidden="true"
                      className="text-red"
                    />
                    {readingTime} min di lettura
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {featuredImage?.sourceUrl && (
          <figure className="mx-auto mt-8 w-[90%] max-w-[1700px] md:mt-12">
            <Image
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText || plainTitle}
              width={1800}
              height={1000}
              priority
              className="max-h-[820px] w-full object-cover"
              sizes="90vw"
            />
          </figure>
        )}

        <div className="mx-auto grid w-[90%] max-w-[1500px] gap-12 py-16 lg:grid-cols-[150px_minmax(0,820px)_minmax(240px,1fr)] lg:items-start lg:gap-10 lg:py-24 xl:gap-16">
          <aside
            aria-label="Condividi l’articolo"
            className="lg:sticky lg:top-40"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-main">
              Condividi
            </p>
            <span aria-hidden="true" className="mt-3 block h-px w-12 bg-red" />
            <div className="mt-5 flex gap-3 lg:flex-col">
              <FacebookShareButton
                url={articleUrl}
                hashtag="#miaographics"
                aria-label="Condividi su Facebook"
                className="flex h-11 w-11 items-center justify-center border border-main/20 text-main transition-colors hover:border-red hover:bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
              >
                <Icon
                  icon="ri:facebook-fill"
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </FacebookShareButton>
              <LinkedinShareButton
                url={articleUrl}
                aria-label="Condividi su LinkedIn"
                className="flex h-11 w-11 items-center justify-center border border-main/20 text-main transition-colors hover:border-red hover:bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
              >
                <Icon
                  icon="ri:linkedin-fill"
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </LinkedinShareButton>
            </div>
          </aside>

          <div>
            <div
              className="magazine-article text-main"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {tags.length > 0 && (
              <div className="mt-14 border-t border-main/15 pt-7">
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-main">
                  Argomenti
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="border border-main/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-second"
                    >
                      <span className="mr-1 text-red">#</span>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {recent.length > 0 && (
            <aside
              aria-labelledby="recent-posts-title"
              className="lg:sticky lg:top-40"
            >
              <SectionIndex>Continua a leggere</SectionIndex>
              <h2
                id="recent-posts-title"
                className="mt-3 text-3xl font-extrabold text-main"
              >
                Articoli recenti
              </h2>
              <div className="mt-7 divide-y divide-main/15 border-y border-main/15">
                {recent.map((recentPost, index) => (
                  <article
                    key={recentPost.id || recentPost.slug}
                    className="py-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-extrabold text-red">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <small className="text-[10px] font-bold uppercase tracking-[0.12em] text-second">
                          {recentPost?.categories?.nodes?.[0]?.name || "Design"}
                        </small>
                        <Link
                          href={`/posts/${recentPost.slug}`}
                          title={stripHtml(recentPost.title)}
                          className="group mt-2 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                        >
                          <h3
                            className="text-lg font-extrabold leading-tight text-main transition-colors group-hover:text-red"
                            dangerouslySetInnerHTML={{
                              __html: recentPost.title,
                            }}
                          />
                          <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-red">
                            Leggi
                            <Icon
                              icon="prime:arrow-up-right"
                              aria-hidden="true"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          )}
        </div>
      </article>

      <section className="bg-red text-white">
        <div className="mx-auto flex w-[90%] max-w-[1500px] flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center md:py-12">
          <div className="flex items-center gap-6">
            <span
              aria-hidden="true"
              className="font-serif text-8xl font-light leading-none"
            >
              {"{"}
            </span>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                Hai una storia da raccontare?
              </h2>
              <p className="mt-2 text-white/80">
                Trasformiamola in una comunicazione chiara e riconoscibile.
              </p>
            </div>
          </div>
          <ButtonLink
            href="/contatti"
            title="Parliamo del tuo progetto"
            variant="inverse"
            size="lg"
            className="shrink-0"
          >
            Parliamone
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await requestWordPress(
    GET_POST_SLUGS,
    {},
    { posts: { edges: [] } },
  );

  return {
    paths: (data?.posts?.edges || []).map(({ node }) => ({
      params: { slug: node.slug },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const data = await requestWordPress(
    GET_POST_PAGE,
    { slug: params.slug },
    { post: null, recentPosts: { edges: [] } },
  );

  if (!data?.post) {
    return { notFound: true, revalidate: 60 };
  }

  const recent = (data?.recentPosts?.edges || [])
    .map(({ node }) => node)
    .filter((recentPost) => recentPost.slug !== data.post.slug)
    .slice(0, 4);

  return {
    props: {
      post: data.post,
      recent,
    },
    revalidate: 900,
  };
}
