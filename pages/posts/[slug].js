import Link from "next/link";
import { Icon } from "@iconify/react";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
//   TwitterShareButton,
//   TwitterIcon,
// } from "next-share";
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
import translationEN from "../../public/locales/en/en.json";
import { useEffect, useState } from "react";
export default function SinglePost({
  post,
  modifiedContent,
  featuredMedia,
  translation,
  recent,
  postCategories,
  users,
  tags,
  comments,
  lang,
}) {
  const [minutiLettura, setMinutiLettura] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [speech, setSpeech] = useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCopied, setIsCopied] = useState(false);

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




  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>

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
      <div className="singlePost" >
        <div className="w-full xl:w-[90%] mx-auto py-12 ">
        <div className="w-[90%] mx-auto ">
        <div className="w-full mx-auto py-12">
          <div className="text-sm breadcrumbs text-pink flex items-center">
            <ul className="flex items-center">
              <li className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Icon
                    icon="majesticons:home"
                    className="w-4 h-4 fxl:w-6 fxl:h-6 3xl:w-8 3xl:h-8 mr-2 stroke-current"
                  />
                  <p className="fxl:text-xl 3xl:text-3xl">Home</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/blog" className="flex items-center">
                  <Icon
                    icon="ic:round-signpost"
                    className="w-4 h-4 fxl:w-6 fxl:h-6 3xl:w-8 3xl:h-8 mr-2 stroke-current"
                  />
                  <p className="fxl:text-xl 3xl:text-3xl">Blog</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
          <div className=" w-[90%] 3xl:w-full mx-auto ">
            <h3 className="md:text-center text-red text-xl md:text-2xl fxl:text-3xl 3xl:text-5xl font-medium uppercase  ">
              {postCategories[0]?.name}
            </h3>

            <h1
              className="md:text-center py-8  text-4xl 2xl:text-5xl fxl:text-6xl 3xl:text-7xl text-main !leading-[1.25]"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h1>
            <div className="flex flex-col md:flex-row md:justify-center  items-start  md:items-center font-[400]">
              {" "}
              <div className="flex  md:items-center">
                <Icon
                  icon="fa6-solid:user-pen"
                  color="#de4928"
                  className="mr-2 fxl:w-8 fxl:h-8"
                />
                <Link
                  href={post?.["_embedded"].author[0]?.url}
                  className=" text-main md:text-lg flex fxl:text-2xl"
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
        <div className="w-full xl:w-[90%] mx-auto pb-20">
          <div className="flex w-[90%] 3xl:w-full mx-auto flex-col  xl:flex-row">
          <div
                className="text-main text-[20px] md:text-[25px] lg:text-[24px] xl:text-[20px] fxl:text-[30px] 3xl:text-[38px] 3xl:leading-[3.5rem] l-article paragrafo"
                dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
              ></div>
            {/* <div className="w-full xl:w-[30%] 3xl:w-[20%]  h-full flex justify-between flex-col lg:sticky top-24 mt-8 xl:mt-0 ">
              <div className="w-full h-full hidden">
                <h3 className="text-[26px] font-bold uppercase text-second underline">
                  I più letti
                </h3>
                <div className="w-full h-full py-4">
                  <Link
                    href={`/posts/${post?.slug}`}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: post?.title?.rendered,
                      }}
                      className="text-main uppercase hover:line-through hover:text-second"
                    ></h4>
                  </Link>
                </div>
              </div>
            
            </div> */}
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

    case "en":
      obj = translationEN;
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
