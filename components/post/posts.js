import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getDate } from "@/utils/utils";

const Posts = ({ post, featuredMedia }) => {
  const [minutiLettura, setMinutiLettura] = useState(0);

  // 🧠 Funzione per stimare il tempo di lettura
  function calcolaMinutiLettura(testo, velocitaLetturaMedia = 250) {
    const parole = testo?.split(" ");
    const paroleLette = parole?.filter((p) => p.trim() !== "").length || 0;
    return Math.ceil(paroleLette / velocitaLetturaMedia);
  }

  // ⚙️ Calcola minuti al mount
  useEffect(() => {
    const testoSenzaTag = post?.content
      ?.replace(/(<([^>]+)>)/gi, "")
      ?.replace(/\s+/g, " ")
      ?.trim();
    const minuti = calcolaMinutiLettura(testoSenzaTag);
    setMinutiLettura(minuti);
  }, [post]);

  // 📸 Immagine in evidenza (GraphQL)
  const imageUrl =
    featuredMedia || post?.featuredImage?.node?.sourceUrl || "/placeholder.jpg";

  const imageAlt =
    post?.featuredImage?.node?.altText || post?.title || "immagine articolo";

  // 🧩 Titolo ed excerpt (GraphQL)
  const title = post?.title || "Titolo articolo";
  const excerpt = post?.excerpt || "";

  // 📅 Data
  const date = getDate(post?.date);

  return (
    <div className="flex flex-col items-start justify-start w-full gap-2">
      <figure className="w-full">
        {imageUrl && (
          <Image
            className="w-full xl:h-[25vw] object-cover"
            src={imageUrl}
            width={300}
            height={300}
            alt={imageAlt}
          />
        )}
      </figure>

      <small className="text-red text-[3.5vw] xl:text-[1vw] 3xl:text-[1.2vw] font-medium">
        {date} — {minutiLettura} min lettura
      </small>

      <Link href={`/posts/${post?.slug}`} title={title}>
        <h4 className="text-main text-[6vw] xl:text-[1.3vw] 3xl:text-[1.5vw] font-extrabold capitalize">
          <span dangerouslySetInnerHTML={{ __html: title }} />
          <span className="text-red">.</span>
        </h4>
      </Link>

      <div
        dangerouslySetInnerHTML={{ __html: excerpt }}
        className="line-clamp2 text-pink text-[3.5vw] xl:text-[1vw] fxl:text-[1.2vw] 3xl:text-[1.3vw]"
      />
    </div>
  );
};

export default Posts;
