import React from "react";
import Posts from "../post/posts";
import ButtonLink from "../layout/ButtonLink";
import SectionLink from "../layout/SectionLink";

const SectionsQuattro = ({ post = [] }) => {
  return (
    <>
      <section className="mx-auto mt-24 w-[90%] md:mt-32">
        <div className="flex flex-col gap-5 pb-5 mb-10 border-b border-main/20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red">
              Notizie
            </p>
            <h2 className="text-[11vw] font-extrabold leading-none tracking-[-0.05em] text-main md:text-[6vw] lg:text-[2.5vw]">
              Dal blog
            </h2>
          </div>
          <SectionLink href="/blog" title="Vai al blog">
            Vai al blog
          </SectionLink>
        </div>

        {post.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {post.map((article) => (
              <Posts
                key={article.id || article.slug}
                post={article}
                featuredMedia={article?.featuredImage?.node?.sourceUrl}
                variant="home"
              />
            ))}
          </div>
        ) : (
          <div className="px-6 py-10 border border-main/15 text-second">
            Gli approfondimenti sono in aggiornamento. Nel frattempo puoi
            scoprire i progetti nel portfolio.
          </div>
        )}
      </section>

      <section className="py-12 mt-24 text-white bg-red md:mt-32 md:py-16">
        <div className="mx-auto flex w-[90%] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="flex  items-center gap-4 text-[10vw] font-extrabold leading-none tracking-[-0.055em] text-white md:text-[8vw] lg:text-[2.5vw]">
            <span
              className="flex self-stretch items-center text-[1.15em] leading-none text-white"
              aria-hidden="true"
            >
              &#123;
            </span>
            <span className="leading-[0.82]">Hai un progetto in mente?</span>
          </h2>
          <ButtonLink
            href="/contatti"
            variant="inverse"
            size="lg"
            className="w-full justify-between sm:w-auto sm:min-w-[260px]"
          >
            Contattami
          </ButtonLink>
        </div>
      </section>
    </>
  );
};

export default SectionsQuattro;
