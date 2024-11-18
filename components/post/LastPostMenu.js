import Image from "next/image";
import Link from "next/link";
import React from "react";

const LastPostMenu = ({ lastPost, closeMenu }) => {
  return (
    <div className="relative w-full aspect-square lg:aspect-video">
      <Link
        href={`/posts/${lastPost.slug}`}
        title={`${lastPost.title?.rendered}`}
        onClick={closeMenu}
      >
        <figure className="w-full h-full before:content-{} before: inline  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main/80 before:opacity-80">
          <Image
            className="w-full h-full object-cover rounded-[5px] relative "
            src={
              lastPost?.["_embedded"]?.["wp:featuredmedia"][0]["media_details"]
                ?.sizes?.full?.["source_url"]
            }
            width={300}
            height={300}
            alt={lastPost?.["alt_text"]}
          />
        </figure>
        <div className="absolute capitalize bottom-0 left-0 font-bold p-6 z-20 xl:w-[80%] flex flex-col gap-2 xl:gap-6">
          <h2
            dangerouslySetInnerHTML={{
              __html: lastPost?.title?.rendered,
            }}
            className="text-2xl text-white "
          ></h2>
        </div>
      </Link>
    </div>
  );
};

export default LastPostMenu;
