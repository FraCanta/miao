import Image from "next/image";
import Link from "next/link";
import React from "react";
import Posts from "../post/posts";

const SectionsQuattro = ({ post = [], translation, users }) => {
  const jsxPosts = post.map((p, i) => {
    // 📸 GraphQL: featuredImage -> node.sourceUrl
    const featuredMedia = p?.featuredImage?.node?.sourceUrl;

    // 👤 Autore: da p.author.node
    const author =
      p?.author?.node || users?.find((u) => u.id === p.author?.node?.id);

    return (
      <Posts
        key={i}
        post={p}
        featuredMedia={featuredMedia}
        users={author}
        id={p?.databaseId}
      />
    );
  });

  return (
    <section className="w-[90%] min-h-[40vh] flex-col justify-center items-start mt-[100px] 2xl:mt-[150px] flex mx-auto">
      <div className="inline-flex items-end justify-start w-full">
        {translation?.title && (
          <Image
            className="object-cover w-full 2xl:w-[25vw] fxl:w-[350px] 3xl:w-[400px]"
            src={translation.title}
            alt="titolo sezione quattro"
            width={300}
            height={300}
          />
        )}
      </div>

      <div className="w-full flex-col justify-start items-start mt-[50px] flex">
        <div className="flex flex-col items-start justify-between w-full gap-16 2xl:flex-row">
          {jsxPosts}
        </div>

        <div className="flex items-center justify-end w-full mt-10 4xl:mt-20">
          <Link
            href="/blog"
            title="leggi i miei articoli"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl 4xl:text-[5rem] font-extrabold underline capitalize leading-normal"
          >
            {translation?.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionsQuattro;
