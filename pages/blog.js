import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/blog.json";
import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import Post from "../components/post/posts";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client } from "@/utils/graphql";
import { GET_ALL_POSTS, GET_ALL_CATEGORIES } from "@/utils/queries";
import { Icon } from "@iconify/react";
import LastPost from "@/components/post/lastPost";

const Blog = ({ post, category, pages, currentP, translation, lastPost }) => {
  const router = useRouter();
  const [jsxPosts, setJsxPosts] = useState([]);
  const [filterObj, setFilterObj] = useState({
    currentPage: parseInt(router?.query?.page) || 1,
    categories: parseInt(router?.query?.categories) || 0,
  });

  useEffect(() => {
    setJsxPosts(
      post?.map((p, index) => {
        const featuredMedia = p?.["_embedded"]?.["wp:featuredmedia"]?.[0];
        return (
          <Post post={p} featuredMedia={featuredMedia} key={index} id={p?.id} />
        );
      })
    );
  }, [post]);

  useEffect(() => {
    setFilterObj((prevData) => ({
      ...prevData,
      paginationArray: new Array(pages).fill(1),
    }));
  }, [pages]);

  const handlePagination = (page) => {
    router.push({
      pathname: "/blog",
      query: {
        page,
        categories: filterObj?.categories || 0,
      },
    });
  };

  const handleCategoryClick = (catId) => {
    const newCategory = filterObj?.categories === catId ? 0 : catId;
    setFilterObj((prev) => ({
      ...prev,
      categories: newCategory,
      currentPage: 1,
    }));
    router.push({
      pathname: "/blog",
      query: {
        categories: newCategory,
        page: 1,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Miao grafismi itineranti - Blog</title>
        <meta
          name="description"
          content="Esplora il nostro blog e scopri il mondo del design attraverso gli occhi di un esperto. Approfondimenti, tendenze e ispirazione per il tuo prossimo progetto creativo. Entra nel nostro mondo di idee e creatività!"
        />
        <meta
          name="keywords"
          content="Graphic Design, Logo Design, Social Media, content creator, illustrazioni, allestimenti"
        />
        <meta name="author" content="Elisa Avantey" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:url" content="https://www.miaographics.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Miao graphics - Blog" />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta
          property="og:description"
          content="Esplora il nostro blog e scopri il mondo del design attraverso gli occhi di un esperto. Approfondimenti, tendenze e ispirazione per il tuo prossimo progetto creativo. Entra nel nostro mondo di idee e creatività!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta property="twitter:url" content="https://www.miaographics.it/" />
        <meta name="twitter:title" content="Miao graphics - Blog" />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <SlideAnimation>
        <div className="w-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)] 2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)] 4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={translation?.hero?.title}
            img={translation?.hero?.img}
            desc="Notizie dal mondo del Design"
          />
        </div>

        {/* Categorie */}
        <div className="container w-[90%] mx-auto mt-20">
          <div className="flex flex-wrap gap-2">
            {category?.map((el, i) => (
              <a
                key={i}
                onClick={() => handleCategoryClick(el?.databaseId)}
                className="flex items-center gap-2 border-solid border-2 rounded-[5px] border-red text-white bg-red uppercase p-[3vw] xl:p-[0.6vw] mb-2 cursor-pointer hover:bg-white hover:text-main text-[5vw] xl:text-lg"
              >
                <Icon icon="ph:arrow-up-right-light" />
                {el?.name}
              </a>
            ))}
          </div>

          {/* Last Post */}
          <div className="flex flex-col md:flex-row justify-between gap-6 w-full mx-auto mt-[50px] lg:mt-10">
            <div className="grid w-full grid-cols-1">
              <div className="flex flex-col w-full gap-6">
                <div className="relative w-full">
                  <LastPost lastPost={lastPost} />
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30px] md:mt-[100px]">
            {jsxPosts}
          </div>

          {/* Pagination */}
          <div className="container flex justify-center w-full mx-auto mt-10 ">
            {filterObj?.paginationArray?.length > 1 && (
              <div className="flex justify-center mb-8 ">
                <div className="flex gap-6">
                  <button
                    className="btn"
                    style={
                      parseInt(currentP) - 1 === 0
                        ? { opacity: 0.6, pointerEvents: "none" }
                        : {}
                    }
                    onClick={() => handlePagination(currentP - 1)}
                  >
                    « PREV
                  </button>
                  {filterObj?.paginationArray?.map((el, i) => (
                    <button
                      className={`btn ${
                        parseInt(currentP) === i + 1 ? "btn-active" : ""
                      }`}
                      key={i}
                      onClick={() => handlePagination(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    className="btn"
                    style={
                      parseInt(currentP) + 1 > pages
                        ? { opacity: 0.6, pointerEvents: "none" }
                        : {}
                    }
                    onClick={() => handlePagination(parseInt(currentP) + 1)}
                  >
                    SUB »
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </SlideAnimation>
    </>
  );
};

export default Blog;

// GraphQL SSR
export async function getServerSideProps(context) {
  const { locale, query, res } = context;
  res.setHeader("Cache-Control", "public, stale-while-revalidate");

  let { page = 1, categories = 0 } = query;
  const itemsPerPage = 6;

  const { posts } = await client.request(GET_ALL_POSTS);
  const { categories: categoriesData } = await client.request(
    GET_ALL_CATEGORIES
  );

  const allPosts = posts?.edges?.map(({ node }) => ({
    ...node,
    categories: node.categories?.nodes || [],
    tags: node.tags?.nodes || [],
  }));

  // Filtra per tag "miaographics"
  const filteredByTag = allPosts.filter((post) =>
    post.tags?.some((tag) => tag.slug === "miaographics")
  );

  // Filtra per categoria
  const filteredByCategory =
    parseInt(categories) !== 0
      ? filteredByTag.filter((post) =>
          post.categories.some((cat) => cat.databaseId === parseInt(categories))
        )
      : filteredByTag;

  // Paginazione
  const totalPages = Math.ceil(filteredByCategory.length / itemsPerPage);
  const paginatedPosts = filteredByCategory.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Ultimo post
  const lastPost = filteredByTag
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 1)[0];

  // Traduzione
  let obj = locale === "it" ? translationIT : translationIT;

  return {
    props: {
      post: paginatedPosts,
      lastPost,
      pages: totalPages,
      category: categoriesData?.nodes || [],
      currentP: parseInt(page),
      translation: obj?.blog,
    },
  };
}
