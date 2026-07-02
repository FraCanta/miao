import Image from "next/image";
import Link from "next/link";
import LinkArrow from "../layout/LinkArrow";

const WorksItem = ({
  img,
  name,
  link,
  descrizione,
  button = [],
  tags = [],
}) => {
  const projectTags = tags.length > 0 ? tags : button;

  return (
    <article className="group min-w-0">
      <Link href={link} title={`Guarda il progetto ${name}`}>
        <div className="relative overflow-hidden bg-main/5">
          <Image
            src={img}
            alt={`${name} — ${descrizione}`}
            width={720}
            height={720}
            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, (max-width: 1499px) 29vw, 22vw"
            className="aspect-square w-full object-cover saturate-[1.03] transition duration-700 ease-out group-hover:scale-[1.025] group-hover:saturate-[1.08]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-main/45 via-main/5 to-red/10 opacity-70 transition-all duration-700 group-hover:from-main/25 group-hover:to-transparent group-hover:opacity-50"
          />
        </div>

        <div className="mt-4 flex items-end justify-between gap-4 border-t border-main/20 pt-3">
          <div className="min-w-0">
            <h3 className="text-xl font-extrabold leading-tight text-main transition-colors group-hover:text-red 2xl:text-[1.3vw]">
              {name}
            </h3>
            {projectTags.length > 0 && (
              <ul
                className="mt-2 flex flex-wrap gap-1.5"
                aria-label={`Ambiti del progetto ${name}`}
              >
                {projectTags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-main/20 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-second transition-colors group-hover:border-red/40 group-hover:text-red"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <LinkArrow size="md" />
        </div>
      </Link>
    </article>
  );
};

export default WorksItem;
