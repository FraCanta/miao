import Head from "next/head";
import HeroHome from "../components/heros/heroHome";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import SectionUno from "@/components/sections/sectionUno";
import SectionDue from "@/components/sections/sectionDue";
import SectionTre from "@/components/sections/sectionTre";
import SectionsQuattro from "@/components/sections/sectionsQuattro";
import { client } from "@/utils/graphql";
import { GET_ALL_POSTS } from "@/utils/queries";

export default function Home({ translation, post, users }) {
  return (
    <>
      <Head>
        <title>Miao graphics - Soluzioni Creative</title>
        <meta
          name="description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        <meta
          name="keywords"
          content="Studio grafico, Grafica, Arte grafica, Agenzia di graphic design, Graphic design, Branding, Agenzia di branding, Agenzia di comunicazione, Comunicazione visiva, studio grafico Milano, Milano, Agenzia di branding Milano, Grafico Milano, Grafica Milano, Graphic design studio, Soluzioni creative, Soluzioni creative su misura, Immagine coordinata, Studio di graphic design Milano, Grafico, Graphic designer, Designer grafico, Studio di comunicazione, Identità visiva, Logo maker, Creative agendo, Creative solutions, Comunicazione visiva, Arte del comunicare"
        />
        <meta name="author" content="Elisa Avantey" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://www.miaographics.it/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Miao graphics - grafismi itineranti"
        />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta
          property="og:description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta property="twitter:url" content="https://www.miaographics.it/" />
        <meta
          name="twitter:title"
          content="Miao graphics - grafismi itineranti"
        />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <SlideAnimation>
        <section className="w-full min-h-[calc(40vh_-_60px)] lg:h-[calc(100vh_-_70px)] 2xl:h-[calc(100vh_-_80px)] fxl:h-[calc(100vh_-_150px)] 4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row lg:items-center justify-between relative">
          <HeroHome translation={translation?.hero} />
        </section>

        <SectionUno translation={translation?.sezioneUno} />
        <SectionDue translation={translation?.sezioneDue} />
        <SectionTre translation={translation?.sezioneTre} />
        <SectionsQuattro
          translation={translation?.sezioneQuattro}
          post={post}
          users={users}
        />
      </SlideAnimation>
    </>
  );
}

// 🔹 Usa getStaticProps con GraphQL
export async function getStaticProps({ locale }) {
  // Recupera tutti i post e categorie
  const { posts } = await client.request(GET_ALL_POSTS);

  // Normalizza i dati
  const allPosts = posts?.edges?.map(({ node }) => ({
    ...node,
    categories: node.categories?.nodes || [],
    tags: node.tags?.nodes || [],
  }));

  // Filtra solo i post con tag "miaographics"
  const miaographicsPosts = allPosts
    .filter((post) => post.tags?.some((tag) => tag.slug === "miaographics"))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // solo i 3 più recenti

  // Finti "users" se vuoi mostrare autore (WordPress non espone tutti)
  const users = miaographicsPosts.map((p) => p.author?.node).filter(Boolean);

  // Gestione traduzioni
  let obj;
  switch (locale) {
    case "it":
      obj = translationIT;
      break;
    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      translation: obj?.home,
      post: miaographicsPosts,
      users: users,
    },
    revalidate: 60, // ISR
  };
}
