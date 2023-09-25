import Image from "next/image";
import Link from "next/link";
import React from "react";

const Posts = ({ post }) => {
  console.log(post);
  return (
    <div className="w-full flex-col justify-start items-start gap-4 flex">
      <Image
        className="w-full h-[240px] md:h-[350px] lg:h-[200px] 3xl:h-[380px] object-cover"
        src={post?.content?.image?.filename}
        width={300}
        height={300}
        alt=""
      />
      <h4>
        <span className="text-main text-[25px] 3xl:text-[40px] font-extrabold capitalize leading-normal">
          {post?.content?.title}
        </span>
        <span className="text-red text-[25px] 3xl:text-[40px] font-extrabold capitalize">
          .
        </span>
      </h4>
      <p className="w-full text-second text-base 3xl:text-[26px] font-normal leading-normal">
        {post.content?.excerpt}
      </p>
    </div>
  );
};

export default Posts;
