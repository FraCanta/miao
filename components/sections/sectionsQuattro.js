import Image from "next/image";
import Link from "next/link";
import React from "react";
import Posts from "../post/posts";

const SectionsQuattro = ({ post, featuredMedia, tags, translation, users }) => {
  const jsxPosts = post.map((p, i) => {
    const featuredMedia = p?.["_embedded"]?.["wp:featuredmedia"][0];
    return (
      <Posts
        post={p}
        featuredMedia={featuredMedia}
        users={users}
        key={i}
        id={p?.id}
      />
    );
  });
  return (
    <section className="w-[90%] min-h-[40vh] flex-col justify-center items-start mt-[100px] 2xl:mt-[150px] flex mx-auto">
      <div className="w-full justify-start items-end  inline-flex">
        <Image
          className="object-cover w-full 2xl:w-[25vw] fxl:w-[350px] 3xl:w-[400px] "
          src={translation?.title}
          alt=""
          width={300}
          height={300}
        />
      </div>

      <div className="w-full  flex-col justify-start items-start mt-[50px] flex">
        <div className="w-full justify-between items-start gap-16 flex flex-col 2xl:flex-row">
          {jsxPosts}
        </div>
        <div className="w-full justify-end items-center flex mt-10 4xl:mt-20">
          <Link
            href="/blog"
            title="leggi i miei articoli"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl 4xl:text-[5rem] font-extrabold underline capitalize leading-normal "
          >
            {translation?.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionsQuattro;
