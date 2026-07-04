import Head from "next/head";
import HeroHome from "../components/heros/heroHome";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import SectionUno from "@/components/sections/sectionUno";
import SectionDue from "@/components/sections/sectionDue";
import SectionTre from "@/components/sections/sectionTre";
import SectionsQuattro from "@/components/sections/sectionsQuattro";
import { requestWordPress } from "@/utils/graphql";
import { GET_HOME_POSTS } from "@/utils/queries";

const HOME_SERVICE_LINKS = [
  "/servizi/logo-design",
  "/servizi/branding-strategy",
  "/servizi/label-packaging",
  "/servizi/content-creator",
];

const getRandomItems = (items = [], count = 4) => {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index],
    ];
  }

  return shuffledItems.slice(0, count);
};

export default function Home({
  translation,
  post,
  users,
  selectedWorks,
  featuredServices,
}) {
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
          content="https://www.miaographics.it/assets/cover_web.optimized.webp"
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
          content="https://www.miaographics.it/assets/cover_web.optimized.webp"
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
        <div>
          <HeroHome translation={translation?.hero} />
        </div>

        <SectionUno translation={translation?.sezioneUno} />
        <SectionDue
          translation={translation?.sezioneDue}
          services={featuredServices}
        />
        <SectionTre
          translation={translation?.sezioneTre}
          works={selectedWorks}
        />
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
  const { posts } = await requestWordPress(
    GET_HOME_POSTS,
    {},
    { posts: { edges: [] } }
  );

  // Normalizza i dati
  const allPosts =
    posts?.edges?.map(({ node }) => ({
      ...node,
      categories: node.categories?.nodes || [],
    })) || [];

  // Filtra solo i post con tag "miaographics"
  const miaographicsPosts = allPosts
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

  const portfolioWorks = (obj?.portfolio?.worksItem || []).map((work) => {
    const projectResource = obj?.portfolio?.singleWorks?.[work.title];

    return {
      ...work,
      tags: projectResource?.button || work.button || [],
    };
  });

  const selectedWorks = getRandomItems(portfolioWorks, 4);

  const services = obj?.servizi?.serviziItem || [];
  const featuredServices = HOME_SERVICE_LINKS.map((link) =>
    services.find((service) => service.link === link),
  ).filter(Boolean);

  return {
    props: {
      translation: obj?.home,
      post: miaographicsPosts,
      users: users,
      selectedWorks,
      featuredServices,
    },
    revalidate: 900,
  };
}
