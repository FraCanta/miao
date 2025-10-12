import Link from "next/link";
import { Icon } from "@iconify/react";
import { FacebookShareButton, LinkedinShareButton } from "next-share";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import translationIT from "../../public/locales/it/it.json";
import { parse } from "dom-parser-react";
import { client } from "@/utils/graphql";
import { GET_ALL_POSTS, GET_ALL_CATEGORIES } from "@/utils/queries";
import { getDate } from "../../utils/utils";

export default function SinglePost({
  post,
  recent,
  postCategories,
  tags,
  modifiedContent,
  translation,
}) {
  const [minutiLettura, setMinutiLettura] = useState(0);

  function calcolaMinutiLettura(testo, velocitaLetturaMedia) {
    const parole = testo.split(" ");
    const paroleLette = parole.filter((parola) => parola.trim() !== "").length;
    return Math.ceil(paroleLette / velocitaLetturaMedia);
  }

  useEffect(() => {
    const testoSenzaTag = modifiedContent.replace(/(<([^>]+)>)/gi, "");
    setMinutiLettura(calcolaMinutiLettura(testoSenzaTag, 250));
  }, [modifiedContent]);

  const contents = parse(post.title, {
    createElement: React.createElement,
    Fragment: React.Fragment,
  });

  return (
    <>
      <Head>
        <title>{contents}</title>
        <meta
          property="og:image"
          content={post.featuredImage?.node?.sourceUrl}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta
          property="twitter:url"
          content={`https://miaographics.it/posts/${post.slug}`}
        />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={post.featuredImage?.node?.sourceUrl}
        />
      </Head>

      <div className="singlePost">
        <div className="w-[90%] mx-auto py-12 ">
          <div className="flex items-center text-sm breadcrumbs text-pink">
            <ul className="flex items-center">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center"
                  title="back to home"
                >
                  <Icon icon="majesticons:home" className="w-4 h-4 mr-2" />
                  <p className="fxl:text-xl 3xl:text-3xl">Home</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/blog"
                  className="flex items-center"
                  title="back to blog"
                >
                  <Icon icon="ic:round-signpost" className="w-4 h-4 mr-2" />
                  <p className="fxl:text-xl 3xl:text-3xl">Blog</p>
                </Link>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-medium uppercase md:text-center text-red md:text-2xl fxl:text-3xl 3xl:text-5xl">
            {postCategories[0]?.name}
          </h3>
          <h1
            className="md:text-center py-8 text-4xl 2xl:text-5xl fxl:text-6xl 3xl:text-7xl text-main !leading-[1.25]"
            dangerouslySetInnerHTML={{ __html: post.title }}
          ></h1>

          <div className="flex flex-col md:flex-row md:justify-center items-start md:items-center font-[400]">
            <div className="flex md:items-center">
              <Icon
                icon="fa6-solid:user-pen"
                color="#de4928"
                className="mr-2 fxl:w-8 fxl:h-8"
              />
              <p className="flex text-main md:text-lg fxl:text-2xl">
                {post.author?.node?.nickname || "Elisa Avantey"}
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 md:ml-8">
              <p className="flex items-center text-main md:text-lg fxl:text-2xl">
                <Icon
                  icon="clarity:date-line"
                  color="#de4928"
                  className="mr-2 fxl:w-8 fxl:h-8"
                />
                {getDate(post.date)}
              </p>
              <div className="flex items-center ml-6 text-main md:text-lg">
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

        <div className="w-[90%] mx-auto pb-20 flex flex-col lg:flex-row gap-6">
          <div className="flex xl:w-[70%] mx-auto flex-col">
            <div
              className="text-main text-[20px] md:text-[25px] lg:text-[24px] xl:text-[20px] fxl:text-[30px] 3xl:text-[38px] 3xl:leading-[3.5rem] l-article paragrafo xl:w-[90%] py-12 3xl:w-full mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            <div className="w-[90%] mx-auto flex flex-wrap items-center justify-end text-sm md:text-xl breadcrumbs">
              <div className="flex items-center h-full gap-6">
                <p className="text-lg xl:text-xl text-main">Condividi su</p>
                <FacebookShareButton
                  url={`https://miaographics.it/posts/${post.slug}`}
                  hashtag={"#miaographics"}
                >
                  <Icon
                    icon="entypo-social:facebook"
                    width={28}
                    color="#39373c"
                  />
                </FacebookShareButton>
                <LinkedinShareButton
                  url={`https://miaographics.it/posts/${post.slug}`}
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
              {tags?.map((el, i) => (
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
                {recent?.map((p, i) => (
                  <div key={i}>
                    <small className="py-2 text-red fxl:text-base">
                      {getDate(p.date)}
                    </small>
                    <Link href={`/posts/${p.slug}`} title={p.title}>
                      <h5
                        className="font-bold text-main hover:text-red capitalize text-[1.4rem] lg:text-3xl leading-[1.8rem] xl:text-xl fxl:text-3xl 3xl:text-4xl py-2"
                        dangerouslySetInnerHTML={{ __html: p.title }}
                      ></h5>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Next.js getStaticPaths
export async function getStaticPaths() {
  const { posts } = await client.request(GET_ALL_POSTS);
  const paths = posts.edges.map(({ node }) => ({
    params: { slug: node.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// Next.js getStaticProps
export async function getStaticProps({ params, locale }) {
  const { posts } = await client.request(GET_ALL_POSTS);
  const { categories } = await client.request(GET_ALL_CATEGORIES);

  const allPosts = posts.edges.map(({ node }) => ({
    ...node,
    categories: node.categories?.nodes || [],
    tags: node.tags?.nodes || [],
    author: node.author?.node,
  }));

  const post = allPosts.find((p) => p.slug === params.slug);

  const postCategories = categories.nodes.filter((cat) =>
    post.categories.some((c) => c.databaseId === cat.databaseId)
  );

  const recent = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug && p.tags.some((t) => t.slug === "miaographics")
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const tags = post.tags.map((t) => t.name);
  const modifiedContent = post.content;

  let obj = locale === "it" ? translationIT : translationIT;

  return {
    props: {
      post,
      modifiedContent,
      tags,
      postCategories,
      recent,
      translation: obj?.home,
    },
    revalidate: 10,
  };
}
