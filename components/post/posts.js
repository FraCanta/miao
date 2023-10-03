import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { getDate } from "@/utils/utils";
const Posts = ({ post, featuredMedia}) => {
  const [minutiLettura, setMinutiLettura] = useState(0);

  function calcolaMinutiLettura(testo, velocitaLetturaMedia) {
    const parole = testo.split(" ");
    const paroleLette = parole.filter((parola) => parola.trim() !== "").length;
    const minuti = Math.ceil(paroleLette / velocitaLetturaMedia);
    return minuti;
  }

  useEffect(() => {
    const testoSenzaTag = post?.content?.rendered.replace(/(<([^>]+)>)/gi, ""); // Rimuove i tag HTML dal testo
    const minuti = calcolaMinutiLettura(testoSenzaTag, 250); // Utilizza la velocità di lettura media di 250 parole al minuto
    setMinutiLettura(minuti);
  }, [post]);

  return (
    <div className="w-full flex-col justify-start items-start gap-2 flex">
       <figure className="w-full">
      <Image
        className="w-full xl:h-[25vw] object-cover"
        src={featuredMedia?.["media_details"]?.sizes?.full?.["source_url"]}
        width={300}
        height={300}
        alt={featuredMedia?.["alt_text"]}
        />
      </figure>
      <small className=" text-red text-[3.5vw] xl:text-[1vw] 3xl:text-[1.2vw] font-medium">
        {getDate(post?.date)}
        </small>
      <Link href={`/posts/${post?.slug}`}>
        <h4>
          <span  dangerouslySetInnerHTML={{ __html: post?.title?.rendered }} className="text-main text-[6vw] xl:text-[1.3vw] 3xl:text-[1.5vw] font-extrabold capitalize">
          </span>
          <span className="text-red text-[6vw] xl:text-[1.3vw] 3xl:text-[1.5vw] font-extrabold">
            .
          </span>
        </h4>
      </Link>
      <div
          dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
          className="line-clamp2 text-pink text-[3.5vw] xl:text-[1vw]  fxl:text-[1.2vw] 3xl:text-[1.3vw]"
        ></div>
        
    </div>
  );
};

export default Posts;
