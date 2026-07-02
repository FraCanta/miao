import Image from "next/image";
import Link from "next/link";
import { getDate } from "@/utils/utils";
import SectionLink from "../layout/SectionLink";

const LastPost = ({ lastPost }) => {
  if (!lastPost) return null;

  const featuredImage = lastPost?.featuredImage?.node;
  const categories = lastPost?.categories?.nodes || lastPost?.categories || [];
  const category = categories[0]?.name || "Design";

  return (
    <article className="group grid overflow-hidden border border-main/10 bg-white lg:grid-cols-[1.15fr_0.85fr]">
      <Link
        href={`/posts/${lastPost.slug}`}
        title={lastPost.title}
        className="relative block min-h-[320px] overflow-hidden bg-main/5 md:min-h-[460px]"
      >
        {featuredImage?.sourceUrl && (
          <Image
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            src={featuredImage.sourceUrl}
            fill
            sizes="(max-width: 1023px) 90vw, 55vw"
            alt={featuredImage.altText || lastPost.title}
          />
        )}
        <span
          aria-hidden="true"
          className="absolute right-[6%] top-[8%] font-serif text-[10rem] font-light leading-none text-red md:text-[14rem]"
        >
          {"{"}
        </span>
      </Link>

      <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em]">
          <span className="text-red">In evidenza</span>
          <span aria-hidden="true" className="h-px w-8 bg-main/30" />
          <span className="text-second">{category}</span>
        </div>

        <Link href={`/posts/${lastPost.slug}`} title={lastPost.title}>
          <h2
            className="mt-6 text-3xl font-extrabold leading-[1.05] tracking-[-0.035em] text-main transition-colors duration-300 group-hover:text-red md:text-5xl xl:text-6xl"
            dangerouslySetInnerHTML={{ __html: lastPost.title }}
          />
        </Link>

        {lastPost.excerpt && (
          <div
            className="mt-6 line-clamp-3 text-base leading-relaxed text-second md:text-lg"
            dangerouslySetInnerHTML={{ __html: lastPost.excerpt }}
          />
        )}

        <time
          dateTime={lastPost.date}
          className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-second"
        >
          {getDate(lastPost.date)}
        </time>

        <SectionLink
          href={`/posts/${lastPost.slug}`}
          title={`Leggi l'articolo: ${lastPost.title}`}
          variant="underline"
          className="mt-8 normal-case"
        >
          Leggi l’articolo
        </SectionLink>
      </div>
    </article>
  );
};

export default LastPost;
