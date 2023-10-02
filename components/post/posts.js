import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";

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
    <div className="w-full flex-col justify-start items-start gap-4 flex">
       <figure className="w-full">
      <Image
        className="w-full h-[240px] object-cover"
        src={featuredMedia?.["media_details"]?.sizes?.full?.["source_url"]}
        width={300}
        height={300}
        alt={featuredMedia?.["alt_text"]}
        />
      </figure>
      <Link href={`/posts/${post?.slug}`}>
        <h4>
          <span  dangerouslySetInnerHTML={{ __html: post?.title?.rendered }} className="text-main text-[25px] 3xl:text-[40px] font-extrabold capitalize leading-normal">
          </span>
          <span className="text-red text-[25px] 3xl:text-[40px] font-extrabold capitalize">
            .
          </span>
        </h4>
      </Link>
      <div
          dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
          className="line-clamp2 text-pink text-[16px] mb-4 fxl:text-[20px] 3xl:text-[25px]"
        ></div>
    </div>
  );
};

export default Posts;
