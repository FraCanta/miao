import Image from "next/image";
import React from "react";
import { fetchAllPostsSlugs, fetchPost } from "../api/api";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SinglePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post?.name}</title>
      </Head>
      <div className="w-[90%] mx-auto ">
        <div className="w-full mx-auto py-12 mt-[20px] md:mt-[60px]">
          <div className="text-sm breadcrumbs text-pink">
            <ul>
              <li>
                <Link href="/">
                  <Icon
                    icon="majesticons:home"
                    className="w-4 h-4 fxl:w-6 fxl:h-6 3xl:w-8 3xl:h-8 mr-2 stroke-current"
                  />
                  <p className="fxl:text-xl 3xl:text-3xl">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <Icon
                    icon="ic:round-signpost"
                    className="w-4 h-4 fxl:w-6 fxl:h-6 3xl:w-8 3xl:h-8 mr-2 stroke-current"
                  />
                  <p className="fxl:text-xl 3xl:text-3xl">
                    Don&apos;t Call It Blog
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={post?.content?.image?.filename}
          alt="img"
          width={300}
          height={300}
          className="md:h-[500px] w-full mb-10 object-cover object-center "
        />
        <h1 className="sm:text-4xl text-3xl mb-4 font-medium py-10 md:py-20">
          {post?.content?.title}
        </h1>

        <p className="mb-8 leading-relaxed text-[1.25rem]">
          {post?.content?.paragraph}
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-2 md:mb-10">
          {post?.content?.postImg?.filename ? (
            <Image
              src={post?.content?.postImg?.filename}
              alt="img"
              width={300}
              height={300}
              className="md:h-full w-full mb-10 object-cover object-center "
            />
          ) : (
            ""
          )}
          {post?.content?.postImg2?.filename ? (
            <Image
              src={post?.content?.postImg2?.filename}
              alt="img"
              width={300}
              height={300}
              className="md:h-full w-full mb-10 object-cover object-center "
            />
          ) : (
            ""
          )}
        </div>

        <p className="mb-8 leading-relaxed text-[1.25rem]">
          {post?.content?.paragraph2}
        </p>
        {/* <ul>
          {post?.content?.list((l, i) => {
            return <li>{l}</li>;
          })}
        </ul> */}

        <p className="mb-8 leading-relaxed text-[1.25rem]">
          {post?.content?.paragraph3}
        </p>
      </div>
    </>
  );
};

export default SinglePost;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = await fetchPost(slug);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetchAllPostsSlugs();
  return {
    paths: data,
    fallback: false,
  };
};
