import Link from "next/link";
import { Icon } from "@iconify/react";
import { FacebookShareButton, LinkedinShareButton } from "next-share";
import {
  getPost,
  getPosts,
  getSlugs,
  getTags,
  getTagId,
  getTagNameList,
  getCategories,
  getComments,
} from "../../utils/wordpress";
import { getDate } from "../../utils/utils";
import React from "react";
import Head from "next/head";
import translationIT from "../../public/locales/it/it.json";
import { useEffect, useState } from "react";
import { parse } from "dom-parser-react";

export default function SinglePost({
  post,
  modifiedContent,
  recent,
  postCategories,
  tags,
}) {
  const [minutiLettura, setMinutiLettura] = useState(0);

  const linkRef = React.useRef(null);

  const handleCopyLink = () => {
    linkRef.current.select();
    navigator.clipboard.writeText(linkRef.current.value);
    setIsCopied(true);
  };

  function calcolaMinutiLettura(testo, velocitaLetturaMedia) {
    const parole = testo.split(" ");
    const paroleLette = parole.filter((parola) => parola.trim() !== "").length;
    const minuti = Math.ceil(paroleLette / velocitaLetturaMedia);
    return minuti;
  }

  useEffect(() => {
    const testoSenzaTag = modifiedContent.replace(/(<([^>]+)>)/gi, ""); // Rimuove i tag HTML dal testo
    const minuti = calcolaMinutiLettura(testoSenzaTag, 250); // Utilizza la velocità di lettura media di 250 parole al minuto
    setMinutiLettura(minuti);

    // const tl = gsap.timeline();
    // tl.to(".singlePost", { duration: 1, opacity: 1, ease: "power3.inOut" });
  }, [modifiedContent]);

  const contents = parse(post.title.rendered, {
    createElement: React.createElement,
    Fragment: React.Fragment,
  });

  return (
    <>
      <Head>
        <title>{contents}</title>

        <meta
          property="og:image"
          content={post?.["_embedded"]["wp:featuredmedia"][0].source_url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:title" content={post?.title?.rendered}></meta>
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content={post?.excerpt?.rendered} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="thallion-dev.it" />
        <meta
          property="twitter:url"
          content={`https://www.thallion-dev.it/posts/${post?.slug}`}
        />
        <meta name="twitter:title" content={post?.title?.rendered} />
        <meta name="twitter:description" content={post?.excerpt?.rendered} />
        <meta
          name="twitter:image"
          content={post?.["_embedded"]["wp:featuredmedia"][0].source_url}
        />
      </Head>
      <div className="singlePost">
        <div className="w-full xl:w-[90%] mx-auto py-12 ">
          <div className="w-[90%] mx-auto ">
            <div className="w-full py-12 mx-auto">
              <div className="flex items-center text-sm breadcrumbs text-pink">
                <ul className="flex items-center">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="flex items-center"
                      title="back to home"
                    >
                      <Icon
                        icon="majesticons:home"
                        className="w-4 h-4 mr-2 stroke-current fxl:w-6 fxl:h-6 3xl:w-8 3xl:h-8"
                      />
                      <p className="fxl:text-xl 3xl:text-3xl">Home</p>
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link
                      href="/blog"
                      className="flex items-center"
                      title="back to blog"
                    >
                      <Icon
                        icon="ic:round-signpost"
                        className="w-4 h-4 mr-2 stroke-current fxl:w-6 fxl:h-6 3xl:w-8 3xl:h-8"
                      />
                      <p className="fxl:text-xl 3xl:text-3xl">Blog</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-[90%] 3xl:w-full mx-auto ">
            <h3 className="text-xl font-medium uppercase md:text-center text-red md:text-2xl fxl:text-3xl 3xl:text-5xl ">
              {postCategories[0]?.name}
            </h3>

            <h1
              className="md:text-center py-8  text-4xl 2xl:text-5xl fxl:text-6xl 3xl:text-7xl text-main !leading-[1.25]"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h1>
            <div className="flex flex-col md:flex-row md:justify-center  items-start  md:items-center font-[400]">
              {" "}
              <div className="flex md:items-center">
                <Icon
                  icon="fa6-solid:user-pen"
                  color="#de4928"
                  className="mr-2 fxl:w-8 fxl:h-8"
                />
                <Link
                  href={post?.["_embedded"].author[0]?.url}
                  title="author url"
                  className="flex  text-main md:text-lg fxl:text-2xl"
                >
                  <p>{post?.["_embedded"].author[0]?.name}</p>
                </Link>
              </div>
              <div className="flex items-center mt-4 md:mt-0 md:ml-8">
                <p className=" text-main md:text-lg fxl:text-2xl flex items-center !font-[400]">
                  {" "}
                  <Icon
                    icon="clarity:date-line"
                    color="#de4928"
                    className="mr-2 fxl:w-8 fxl:h-8"
                  />
                  {getDate(post?.date)}
                </p>
                <div className=" text-main md:text-lg flex ml-6 font-[400] items-center">
                  <Icon
                    icon="tabler:clock-hour-3"
                    color="#de4928"
                    className="mr-2 fxl:w-8 fxl:h-8"
                  />
                  <p className="fxl:text-2xl">{minutiLettura} min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto pb-20 flex flex-col lg:flex-row gap-6">
          <div className="flex xl:w-[70%] mx-auto flex-col">
            <div
              className="text-main text-[20px] md:text-[25px] lg:text-[24px] xl:text-[20px] fxl:text-[30px] 3xl:text-[38px] 3xl:leading-[3.5rem] l-article paragrafo xl:w-[90%] py-12 3xl:w-full mx-auto"
              dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
            ></div>
            <div className="w-[90%] mx-auto flex flex-wrap items-center justify-end text-sm md:text-xl breadcrumbs">
              <div className="flex items-center h-full gap-6">
                <p className="text-lg xl:text-xl text-main">Condividi su</p>{" "}
                <FacebookShareButton
                  url={`https://miaographics.it/posts/${post?.slug}`}
                  hashtag={"#miaographics"}
                >
                  {/* <FacebookIcon size={32} round /> */}
                  <Icon
                    icon="entypo-social:facebook"
                    width={28}
                    color="#39373c"
                  />
                </FacebookShareButton>{" "}
                <LinkedinShareButton
                  url={`https://miaographics.it/posts/${post?.slug}`}
                  separator="- "
                >
                  <Icon
                    icon="entypo-social:linkedin"
                    color="#39373c"
                    width="28"
                  />
                </LinkedinShareButton>
              </div>
            </div>
            <div className="mt-8 fxl:mt-20 flex flex-wrap w-full xl:w-[90%] xl:mx-auto">
              {tags
                ?.filter(
                  (el) => el != "it" && el !== "thalliondev" && el != "en"
                )
                .map((el, i) => (
                  <span key={i}>
                    <span
                      style={{ color: "#de4928" }}
                      className="fxl:text-2xl 3xl:text-3xl"
                    >
                      #
                    </span>
                    <span className="mr-2 text-pink fxl:text-2xl 3xl:text-3xl">
                      {el}
                    </span>
                  </span>
                ))}
            </div>
          </div>
          <div className="w-full xl:w-[30%] h-full flex justify-between flex-col lg:sticky top-24 mt-8 xl:mt-0 3xl:top-[190px]">
            <div className="w-full h-full">
              <h3 className="text-[8vw] xl:text-[2vw] font-bold uppercase text-second underline">
                I più recenti
              </h3>
              <div className="flex flex-col w-full h-full gap-6 py-4">
                {recent?.map((p, i) => {
                  return (
                    <div key={i}>
                      <small className="py-2  text-red fxl:text-base">
                        {getDate(p?.date)}
                      </small>

                      <Link
                        href={`/posts/${p?.slug}`}
                        title={post?.title?.rendered}
                      >
                        <h5
                          className="font-bold text-main hover:text-red capitalize text-[1.4rem] lg:text-3xl leading-[1.8rem] xl:text-xl fxl:text-3xl 3xl:text-4xl py-2"
                          dangerouslySetInnerHTML={{
                            __html: p?.title?.rendered,
                          }}
                        ></h5>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params, locale }) {
  const post = await getPost(params?.slug);
  const idLocale = await getTagId(locale); // recupera id della lingua attuale
  const allPosts = await getPosts(idLocale);

  const modifiedContent = post?.content?.rendered?.replace(
    "data-src-fg",
    "src"
  );
  const featuredMedia = post?.["_embedded"]?.["wp:featuredmedia"][0];

  const tags = await getTagNameList(post?.tags);
  const category = await getCategories(locale);

  const postCategories = category?.filter((el) =>
    post?.categories?.includes(el?.id)
  );
  const myTag = await getTagId("miaographics");
  // const myTag = 133;

  const comments = await getComments(post?.id);

  let obj;
  switch (locale) {
    case "it":
      obj = translationIT;
      break;

    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      post,
      modifiedContent: modifiedContent,
      featuredMedia: featuredMedia,
      tags: tags,
      translation: obj?.home,
      category: category, //array delle categorie presenti
      recent: allPosts
        ?.filter((el) => el?.tags?.includes(myTag) && el.id !== post.id)
        .sort((a, b) => a?.date > b?.date)
        .filter((el, i) => i < 3),
      postCategories: postCategories,
      comments: comments,
      lang: locale,
    },
    revalidate: 10, // In seconds
  };
}
