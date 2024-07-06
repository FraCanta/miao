import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/blog.json";
import translationEN from "../public/locales/en/blog.json";
import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import Post from "../components/post/posts";
import React, { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import { getPosts, getCategories, getTagId } from "../utils/wordpress";
import { Icon } from "@iconify/react";
import LastPost from "@/components/post/lastPost";

const Blog = ({ post, category, pages, currentP, translation, lastPost }) => {
  const myRouter = useRouter();
  const [jsxPosts, setJsxPosts] = useState([]);
  const [filterObj, setFilterObj] = useState({});
  useEffect(() => {
    setFilterObj({
      currentPage: parseInt(myRouter?.query?.page) || 1,
      categories: parseInt(myRouter?.query?.categories) || 0,
    });
  }, []); // aggiorna i filtri correnti dalla querystring
  // console.log(translation?.hero?.title);
  useEffect(() => {
    setJsxPosts(
      post?.map((p, index) => {
        const featuredMedia = p?.["_embedded"]?.["wp:featuredmedia"][0];
        return (
          <Post post={p} featuredMedia={featuredMedia} key={index} id={p?.id} />
        );
      })
    );
    // console.log(post);
  }, [post]); // aggiorna le cards

  useEffect(() => {
    setFilterObj((prevData) => {
      return { ...prevData, paginationArray: new Array(pages).fill(1) };
    });
  }, [pages]); // al variare delle pagine totali genero i bottoni delle pagine

  const handlePagination = (page) => {
    router.push(
      {
        pathname: "/blog",
        query: {
          page: page,
          categories: filterObj?.categories || 0,
        },
      }
      // { shallow: true }
    );
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
        <div className="w-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={translation?.hero?.title}
            img={translation?.hero?.img}
          />
        </div>
        <div className="container w-[90%] mx-auto p-2 xl:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-6  w-full mx-auto mt-[50px] lg:mt-10">
            <div className="grid grid-cols-1  md:w-[70%] ">
              <div className="flex flex-col w-full gap-6">
                <h4>
                  <span className="text-main text-[8vw] leading-[1.2] md:leading-none  lg:text-[6vw] xl:text-[5vw] 2xl:text-[3vw] 3xl:text-[3.6vw]  font-extrabold capitalize ">
                    {" "}
                    In evidenza
                  </span>
                  <span className="text-red text-[8vw] leading-[1.2] md:leading-none lg:text-[6vw] xl:text-[5vw] 2xl:text-[3vw] 3xl:text-[3.6vw]  font-extrabold capitalize">
                    .
                  </span>
                </h4>{" "}
                <div className="w-full relative">
                  <LastPost lastPost={lastPost} id={lastPost.id} />
                </div>
              </div>
            </div>

            <div className="flex flex-col  md:w-[30%]">
              {category?.map((el, i) => (
                <a
                  key={i}
                  onClick={() => {
                    setFilterObj((prevData) => {
                      if (prevData?.categories === el?.id)
                        return { currenPage: 1, categories: 0 };
                      else return { currenPage: 1, categories: el?.id };
                    });
                    router.push({
                      pathname: "/blog",
                      query: {
                        categories: el?.id,
                        page: 1,
                      },
                    });
                  }}
                  className="flex items-center gap-2 border-solid border-2 rounded-[5px] border-red text-white bg-red uppercase p-[3vw] xl:p-[0.6vw] mb-2 cursor-pointer hover:bg-white hover:text-main text-[5vw] xl:text-[1.2vw]"
                >
                  <Icon icon="ph:arrow-up-right-light" />
                  {el?.name}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30px] md:mt-[100px]">
            {jsxPosts}
          </div>
        </div>

        <div className="container w-full mx-auto flex justify-center mt-10 ">
          {filterObj?.paginationArray?.length > 1 && (
            <div className="flex justify-center mb-8 ">
              <div className="flex gap-6">
                <button
                  className="btn "
                  style={
                    parseInt(currentP) - 1 === 0
                      ? {
                          opacity: 0.6,
                          pointerEvents: "none",
                        }
                      : {}
                  }
                  onClick={() => handlePagination(currentP - 1)}
                >
                  « PREV
                </button>
                {filterObj?.paginationArray?.map((el, i) => (
                  <button
                    className={`btn ${
                      parseInt(currentP) - i === el && "btn-active"
                    }`}
                    key={i}
                    onClick={() => handlePagination(el + i)}
                  >
                    {el + i}
                  </button>
                ))}

                <button
                  className="btn"
                  style={
                    parseInt(currentP) + 1 > pages
                      ? {
                          opacity: 0.6,
                          pointerEvents: "none",
                        }
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
      </SlideAnimation>
    </>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const { locale, query, req, res } = context;
  res.setHeader("Cache-Control", "public,  stale-while-revalidate");
  let { page, categories } = query;
  page === undefined && (page = 1);
  categories === undefined && (categories = 0);
  const itemPerPage = 6;

  // const tags = await getTags();
  const idLocale = await getTagId(locale); // recupera id della lingua attuale
  const post = await getPosts(idLocale);
  const myTag = await getTagId("miaographics");
  // const myTag = 133;

  const filteredPosts = post
    .filter((el) => el?.tags?.includes(myTag))
    .filter((el) => {
      const filterParams =
        parseInt(categories) !== 0
          ? el?.categories.includes(parseInt(categories))
          : el;
      return filterParams;
    }); //elimino i post per sideffect
  const paginationTrim = filteredPosts.slice(
    (page - 1) * itemPerPage,
    itemPerPage * page
  );
  const category = await getCategories(locale); //categorie nella lingua attuale
  // const media = await getMedia();

  let obj;
  switch (locale) {
    case "it":
      obj = translationIT;
      break;

    case "en":
      obj = translationEN;
      break;
    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      post: paginationTrim,
      lastPost: post
        ?.filter((el) => el?.tags?.includes(myTag))
        .sort((a, b) => a?.date > b?.date)
        .filter((el, i) => i < 1),

      pages: Math.ceil(filteredPosts.length / itemPerPage),
      category: category, //array delle categorie presenti
      // media: media,
      // tags: tags,
      currentP: page,
      translation: obj?.blog,
    },
  };
}
