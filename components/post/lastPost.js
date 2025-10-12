import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getDate } from "@/utils/utils";

const LastPost = ({ lastPost }) => {
  if (!lastPost) return null; // sicurezza

  const featuredImage = lastPost?.featuredImage?.node;

  return (
    <>
      <Link href={`/posts/${lastPost?.slug}`} title={lastPost?.title}>
        <figure className="w-full relative before:content-[''] before:inline before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main/90 before:opacity-80">
          <Image
            className="w-full md:aspect-video object-cover rounded-[5px] object-center relative"
            src={featuredImage?.sourceUrl}
            width={300}
            height={300}
            alt={featuredImage?.altText || lastPost?.title}
          />
        </figure>

        <div className="absolute bottom-0 left-0 font-bold p-6 z-20 md:w-[60%] flex flex-col gap-2 xl:gap-6">
          <h2
            dangerouslySetInnerHTML={{ __html: lastPost?.title }}
            className="text-white text-[5.5vw] md:text-[2.5vw] leading-[1.4]"
          ></h2>
          <small className="text-white text-[3vw] xl:text-[1.2vw]">
            {getDate(lastPost?.date)}
          </small>
        </div>
      </Link>
    </>
  );
};

export default LastPost;
