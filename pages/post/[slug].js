import Image from "next/image";
import React from "react";
import { fetchAllPostsSlugs, fetchPost } from "../api/api";

const SinglePost = ({ post }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1>{post?.content?.title}</h1>
      <Image
        src={post?.content?.image?.filename}
        alt="img"
        width={300}
        height={300}
        className="w-full"
      />

      <p>{post?.content?.content}</p>
    </div>
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
