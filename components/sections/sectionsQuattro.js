import Image from "next/image";
import Link from "next/link";
import React from "react";
import Posts from "../post/posts";

const SectionsQuattro = ({ translation, posts }) => {
  return (
    <section className="w-[90%] min-h-[40vh] flex-col justify-center items-start mt-[100px] 2xl:mt-[150px] flex mx-auto">
      <div className="w-full justify-start items-end  inline-flex">
        <Image
          className="object-cover w-[200px] 2xl:w-[300px] fxl:w-[350px] 3xl:w-[400px] "
          src={translation?.title}
          alt=""
          priority
          width={300}
          height={300}
        />
      </div>

      <div className="w-full  flex-col justify-start items-start mt-[50px] flex">
        <div className="w-full justify-between items-start gap-16 flex flex-col 2xl:flex-row">
          {posts?.map((post) => {
            return <Posts key={post?.id} post={post} />;
          })}
        </div>
        <div className="w-full justify-start items-center flex mt-10">
          <Link
            href="/blog"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-normal "
          >
            Altre Notizie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionsQuattro;
