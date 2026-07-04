import Image from "next/image";
import Link from "next/link";
import { getDate } from "@/utils/utils";
import SectionLink from "../layout/SectionLink";

const Posts = ({ post, featuredMedia, variant = "default" }) => {
  const isHomePost = variant === "home";
  const imageUrl = featuredMedia || post?.featuredImage?.node?.sourceUrl;
  const imageAlt =
    post?.featuredImage?.node?.altText || post?.title || "Immagine articolo";
  const title = post?.title || "Titolo articolo";
  const date = getDate(post?.date);
  const categories = post?.categories?.nodes || post?.categories || [];
  const category = categories[0]?.name || "Design";

  if (isHomePost) {
    return (
      <article className="group grid w-full overflow-hidden border border-main/10 bg-white/70 lg:grid-cols-[0.95fr_1.05fr]">
        {imageUrl && (
          <Link
            href={`/posts/${post?.slug}`}
            className="relative block min-h-[190px] overflow-hidden bg-main/5"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
              src={imageUrl}
              width={520}
              height={360}
              sizes="(max-width: 767px) 42vw, (max-width: 1023px) 35vw, 16vw"
              alt={imageAlt}
            />
          </Link>
        )}

        <div className="flex min-w-0 flex-col justify-between p-6">
          <div>
            <small className="mb-4 block text-[11px] font-bold uppercase tracking-[0.18em] text-red 4xl:text-4xl">
              {category}
            </small>

            <Link href={`/posts/${post?.slug}`} title={title}>
              <h3 className="max-w-[280px] text-2xl font-extrabold leading-[1.08]  text-main transition-colors duration-300 group-hover:text-red xl:text-[1.7vw] 2xl:text-[1.2vw]">
                <span dangerouslySetInnerHTML={{ __html: title }} />
              </h3>
            </Link>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-xs leading-none text-second 4xl:text-lg">
              {date}
            </p>
            <SectionLink
              href={`/posts/${post?.slug}`}
              title={`Leggi l'articolo: ${title}`}
              variant="underline"
              className="gap-8 text-base normal-case"
            >
              Leggi l’articolo
            </SectionLink>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden border border-main/10 bg-white transition-colors duration-300 hover:border-red/50">
      {imageUrl ? (
        <Link
          href={`/posts/${post?.slug}`}
          className="block aspect-[4/3] w-full overflow-hidden bg-main/5"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
            src={imageUrl}
            width={900}
            height={700}
            sizes="(max-width: 767px) 90vw, (max-width: 1279px) 44vw, 29vw"
            alt={imageAlt}
          />
        </Link>
      ) : (
        <div className="aspect-[4/3] w-full bg-main/5" aria-hidden="true" />
      )}

      <div className="flex min-h-[250px] flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.14em]">
          <span className="text-red">{category}</span>
          <span
            aria-hidden="true"
            className="h-1 w-1 rounded-full bg-main/30"
          />
          <time dateTime={post?.date} className="text-second">
            {date}
          </time>
        </div>

        <Link href={`/posts/${post?.slug}`} title={title} className="mt-5">
          <h3 className="text-2xl font-extrabold leading-[1.1] tracking-[-0.025em] text-main transition-colors duration-300 group-hover:text-red md:text-3xl">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h3>
        </Link>

        {post?.excerpt && (
          <div
            className="mt-4 line-clamp-3 text-sm leading-relaxed text-second md:text-base"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}

        <SectionLink
          href={`/posts/${post?.slug}`}
          title={`Leggi l'articolo: ${title}`}
          variant="underline"
          className="mt-auto pt-7 normal-case"
        >
          Leggi l’articolo
        </SectionLink>
      </div>
    </article>
  );
};

export default Posts;
