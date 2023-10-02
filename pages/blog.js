import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import translationFR from "../public/locales/fr/fr.json";
import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import Post from "../components/post/posts";
import React, { useState, useEffect } from "react";
import router, { useRouter } from "next/router";

import { getPosts, getCategories, getTagId } from "../utils/wordpress";

const Me = ({ post, category, pages, currentP, translation }) => {
  const myRouter = useRouter();
  const [jsxPosts, setJsxPosts] = useState([]);
  const [filterObj, setFilterObj] = useState({});
console.log(post)
  useEffect(() => {
    setFilterObj({
      currentPage: parseInt(myRouter?.query?.page) || 1,
      categories: parseInt(myRouter?.query?.categories) || 0,
    });
  }, []); // aggiorna i filtri correnti dalla querystring

  useEffect(() => {
    setJsxPosts(
      post?.map((p, index) => {
        const featuredMedia = p?.["_embedded"]?.["wp:featuredmedia"][0];
        return (
          <Post
            post={p}
            featuredMedia={featuredMedia}
            key={index}
            id={p?.id}
          />
        );
      })
    );
    console.log(post);
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
        <title>Miao - Blog</title>
      </Head>
      <SlideAnimation>
        <div className="w-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={translation?.hero?.title}
            img={translation?.hero?.img}
          />
        </div>
       <div className="container w-[90%] mx-auto p-2 xl:p-8">
         
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6  w-[90%] mx-auto mt-[150px] lg:mt-0">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:w-[80%]">{jsxPosts}</div> 
          <div className="flex flex-col py-8 md:w-[20%]">
            {category?.map((el, i) => (
              <a
                key={i}
                style={
                  filterObj?.categories === el?.id
                    ? {
                        background: "#204e59",
                        color: "#ebdeba",
                      }
                    : {}
                } // coloro quelli selezionati
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
                className={`${
                  filterObj?.categories !== el?.id
                    ? "tab tab-xs lg:tab-lg  tab-lifted text-pink "
                    : "tab tab-lg xl:tab-2xl tab-lifted tab-active"
                }  `}
              >
                {el?.name}
              </a>
            ))}
          </div>
        </div>
        <div className="container w-full mx-auto flex justify-center mt-10">
          {filterObj?.paginationArray?.length > 1 && (
            <div className="flex justify-center mb-8 ">
              <div className="btn-group">
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
                  « Prev
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
                  Sub »
                </button>
              </div>
            </div>
          )}
        </div>
      </SlideAnimation>
    </>
  );
};

export default Me;



export async function getServerSideProps(context) {
  const { locale, query, req, res } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
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
console.log(category)
  let obj;
  switch (locale.locale) {
    case "it":
      obj = translationIT;
      break;

    case "en":
      obj = translationEN;
      break;
    case "fr":
      obj = translationFR;
      break;
    default:
      obj = translationIT;
      break;
  }


  return {
    props: {
      post: paginationTrim,
      pages: Math.ceil(filteredPosts.length / itemPerPage),
      category: category, //array delle categorie presenti
      // media: media,
      // tags: tags,
      currentP: page,
      translation: obj?.blog,    },
  };
}
