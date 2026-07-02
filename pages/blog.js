import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";

import translationIT from "../public/locales/it/blog.json";
import ButtonLink from "@/components/layout/ButtonLink";
import HeroPage from "@/components/layout/HeroPage";
import SectionIndex from "@/components/layout/SectionIndex";
import Post from "@/components/post/posts";
import LastPost from "@/components/post/lastPost";
import { requestWordPress } from "@/utils/graphql";
import { GET_BLOG_INDEX } from "@/utils/queries";

const POSTS_PER_PAGE = 6;
const BLOG_DESCRIPTION =
  "Approfondimenti su branding, identità visiva, packaging e comunicazione digitale a cura di MIAO graphics.";

const getBlogHref = ({ page = 1, category = 0 } = {}) => {
  const query = new URLSearchParams();
  if (category) query.set("categories", String(category));
  if (page > 1) query.set("page", String(page));

  return `/blog${query.size ? `?${query.toString()}` : ""}#articoli`;
};

const Blog = ({
  posts,
  categories,
  totalPages,
  currentPage,
  selectedCategory,
  featuredPost,
  translation,
}) => {
  const pagination = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className="bg-white">
      <Head>
        <title>Blog di branding e graphic design — MIAO graphics</title>
        <meta name="description" content={BLOG_DESCRIPTION} />
        <meta
          name="keywords"
          content="branding, graphic design, identità visiva, packaging, comunicazione digitale"
        />
        <link rel="canonical" href="https://www.miaographics.it/blog" />
        <meta property="og:url" content="https://www.miaographics.it/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog — MIAO graphics" />
        <meta property="og:description" content={BLOG_DESCRIPTION} />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/pageImg/gattina2.optimized.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog — MIAO graphics" />
        <meta name="twitter:description" content={BLOG_DESCRIPTION} />
      </Head>

      <HeroPage
        image={translation?.hero?.img}
        imageAlt="Collage editoriale MIAO graphics dedicato al blog"
        imageSizes="(max-width: 1023px) 90vw, 54vw"
        columnsVariant="editorial"
        mobileImageHeight="blog"
        mobileMinHeight="fixed"
        maxWidth
        compactGap
      >
        <SectionIndex>Dal blog</SectionIndex>
        <h1 className="mt-6 text-5xl font-extrabold  lg:max-w-lg text-main xl:text-7xl">
          Idee, visioni e cultura del <span className="text-red">design.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg  text-second md:text-lg">
          Una raccolta di articoli dedicati al mondo dell’arte, del graphic
          design e della comunicazione visiva.
        </p>
        <ButtonLink
          href="#articoli"
          title="Scopri gli articoli"
          variant="outline"
          arrowIcon="prime:arrow-down"
          className="mt-9"
        >
          Scopri gli articoli
        </ButtonLink>
      </HeroPage>

      <section className="border-b border-main/10 py-12 md:py-16">
        <div className="mx-auto grid w-[90%] max-w-[1920px] gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
          <div className="flex items-center gap-5">
            <span
              aria-hidden="true"
              className="font-serif text-8xl font-light leading-none text-red"
            >
              {"{"}
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-main md:text-4xl">
              Articoli su arte, graphic design e creatività contemporanea.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-second md:border-l md:border-main/15 md:pl-12 md:text-lg">
            Storie, curiosità e approfondimenti su artisti, fotografi, graphic
            designer e tecniche di stampa.
          </p>
        </div>
      </section>

      <section id="articoli" className="scroll-mt-32 py-16 md:py-24">
        <div className="mx-auto w-[90%] max-w-[1920px]">
          <form
            action="/blog#articoli"
            method="get"
            className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:gap-7 justify-between w-full"
          >
            <label
              htmlFor="blog-category"
              className="flex shrink-0 items-center gap-3 text-xs font-extrabold uppercase tracking-[0.14em] text-main"
            >
              <span
                aria-hidden="true"
                className="relative h-5 w-5 border-2 border-main"
              >
                <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 bg-red" />
              </span>
              Filtra per
            </label>
            <div className="relative w-full max-w-md">
              <select
                key={selectedCategory}
                id="blog-category"
                name="categories"
                defaultValue={selectedCategory}
                onChange={(event) => event.currentTarget.form?.requestSubmit()}
                className="min-h-14 w-full appearance-none border border-main/25 bg-white py-3 pl-5 pr-14 text-sm font-extrabold uppercase tracking-[0.08em] text-main transition-colors hover:border-red focus:border-red focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
              >
                <option value="0">Tutti gli articoli</option>
                {categories.map((category) => (
                  <option key={category.databaseId} value={category.databaseId}>
                    {category.name}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 flex w-14 items-center justify-center border-l border-main/15 text-red"
              >
                <Icon icon="lucide:chevron-down" className="h-5 w-5" />
              </span>
            </div>
            <noscript>
              <button type="submit" className="site-button">
                Applica filtro
              </button>
            </noscript>
          </form>

          {featuredPost ? (
            <>
              <div className="mt-10 md:mt-14">
                <LastPost lastPost={featuredPost} />
              </div>

              {posts.length > 0 && (
                <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:mt-16 xl:grid-cols-3 xl:gap-7">
                  {posts.map((article) => (
                    <Post
                      post={article}
                      featuredMedia={article?.featuredImage?.node?.sourceUrl}
                      key={article.id || article.slug}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="mt-12 border border-main/15 px-6 py-16 text-center">
              <h3 className="text-2xl font-extrabold text-main">
                Nessun articolo in questa categoria.
              </h3>
              <p className="mt-3 text-second">
                Prova a selezionare un’altra categoria o torna a tutti gli
                articoli.
              </p>
              <ButtonLink
                href={getBlogHref()}
                title="Mostra tutti gli articoli"
                variant="outline"
                className="mt-7"
              >
                Mostra tutti
              </ButtonLink>
            </div>
          )}

          {totalPages > 1 && (
            <nav
              aria-label="Paginazione degli articoli"
              className="mt-12 flex flex-wrap items-center justify-center gap-2 md:mt-16"
            >
              {currentPage > 1 && (
                <Link
                  href={getBlogHref({
                    page: currentPage - 1,
                    category: selectedCategory,
                  })}
                  scroll={false}
                  className="site-button-outline min-h-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                  aria-label="Pagina precedente"
                >
                  <Icon icon="prime:arrow-left" aria-hidden="true" />
                  Precedente
                </Link>
              )}

              {pagination.map((page) => (
                <Link
                  key={page}
                  href={getBlogHref({ page, category: selectedCategory })}
                  scroll={false}
                  aria-current={currentPage === page ? "page" : undefined}
                  aria-label={`Pagina ${page}`}
                  className={`inline-flex h-12 min-w-12 items-center justify-center border text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red ${
                    currentPage === page
                      ? "border-red bg-red text-white"
                      : "border-main/30 text-main hover:border-red hover:text-red"
                  }`}
                >
                  {page}
                </Link>
              ))}

              {currentPage < totalPages && (
                <Link
                  href={getBlogHref({
                    page: currentPage + 1,
                    category: selectedCategory,
                  })}
                  scroll={false}
                  className="site-button-outline min-h-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
                  aria-label="Pagina successiva"
                >
                  Successiva
                  <Icon icon="prime:arrow-right" aria-hidden="true" />
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>

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
                Hai un progetto da raccontare?
              </h2>
              <p className="mt-2 text-white/80">
                Trasformiamo la tua storia in un’identità riconoscibile.
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
};

export default Blog;

export async function getServerSideProps({ locale, query, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=86400",
  );

  const requestedPage = Math.max(1, Number.parseInt(query.page, 10) || 1);
  const selectedCategory = Math.max(
    0,
    Number.parseInt(query.categories, 10) || 0,
  );

  const data = await requestWordPress(
    GET_BLOG_INDEX,
    {},
    { posts: { edges: [] }, categories: { nodes: [] } },
  );

  const allPosts =
    data?.posts?.edges?.map(({ node }) => ({
      ...node,
      categories: node.categories?.nodes || [],
    })) || [];

  const usedCategoryIds = new Set(
    allPosts.flatMap((post) =>
      post.categories.map((category) => category.databaseId),
    ),
  );
  const categories = (data?.categories?.nodes || []).filter((category) =>
    usedCategoryIds.has(category.databaseId),
  );
  const validCategory = categories.some(
    (category) => category.databaseId === selectedCategory,
  )
    ? selectedCategory
    : 0;

  const filteredPosts = validCategory
    ? allPosts.filter((post) =>
        post.categories.some(
          (category) => category.databaseId === validCategory,
        ),
      )
    : allPosts;

  const featuredPost = filteredPosts[0] || null;
  const remainingPosts = filteredPosts.slice(1);
  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const currentPage = totalPages ? Math.min(requestedPage, totalPages) : 1;
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  return {
    props: {
      posts: remainingPosts.slice(offset, offset + POSTS_PER_PAGE),
      categories,
      totalPages,
      currentPage,
      selectedCategory: validCategory,
      featuredPost,
      translation: locale === "it" ? translationIT.blog : translationIT.blog,
    },
  };
}
