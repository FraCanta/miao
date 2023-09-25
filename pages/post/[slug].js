import Image from "next/image";
import React from "react";
import { fetchAllPostsSlugs, fetchPost } from "../api/api";
import Head from "next/head";

const SinglePost = ({ post }) => {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post?.name}</title>
      </Head>
      <div className="w-[90%] mx-auto ">
        <h1 className="sm:text-4xl text-3xl mb-4 font-medium py-10 md:py-20">
          {post?.content?.title}
        </h1>
        <Image
          src={post?.content?.image?.filename}
          alt="img"
          width={300}
          height={300}
          className="md:h-[500px] w-full mb-10 object-cover object-center "
        />
        <p className="mb-8 leading-relaxed text-[1.25rem]">
          {post?.content?.paragraph}
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-2 md:mb-10">
          <Image
            src={post?.content?.postImg?.filename}
            alt="img"
            width={300}
            height={300}
            className="md:h-full w-full mb-10 object-cover object-center "
          />{" "}
          <Image
            src={post?.content?.postImg2?.filename}
            alt="img"
            width={300}
            height={300}
            className="md:h-full w-full mb-10 object-cover object-center "
          />{" "}
        </div>

        <p className="mb-8 leading-relaxed text-[1.25rem]">
          {post?.content?.paragraph2}
        </p>
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
