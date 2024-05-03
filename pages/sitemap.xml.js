//pages/sitemap.xml.js
const headlessSite = "https://miaographics.it";
import { getPostsByLanguageAndBlogOwner } from "../utils/wordpress";

import LayoutTranslation from "../public/locales/layout.json";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       
       <url>
         <loc>https://miaographics.it</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://miaographics.it/me</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://miaographics.it/en/me</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://miaographics.it/en</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://miaographics.it/blog</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://miaographics.it/en/blog</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
       <loc>https://miaographics.it/servizi</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
       <loc>https://miaographics.it/servizi</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
       <url>
       <loc>https://miaographics.it/portfolio</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://miaographics.it/en/portfolio</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
   <url>
   <loc>https://miaographics.it/contatti</loc>
   <changefreq>weekly</changefreq>
   <priority>1</priority>
 </url>
 <url>
 <loc>https://miaographics.it/en/contatti</loc>
 <changefreq>weekly</changefreq>
 <priority>1</priority>
</url>

       ${LayoutTranslation?.menu?.it?.singleService
         .map((el, i) => {
           return `
            <url>
             <loc>${`${headlessSite}${el?.link}`}</loc>
            </url>
           `;
         })
         .join("")}

  ${LayoutTranslation?.menu?.en?.singleService
    .map((el, i) => {
      return `
            <url>
             <loc>${`${headlessSite}/en${el?.link}`}</loc>
         </url>
           `;
    })
    .join("")}

    ${LayoutTranslation?.menu?.it?.singleWorks
      .map((el, i) => {
        return `
         <url>
          <loc>${`${headlessSite}${el?.link}`}</loc>
         </url>
        `;
      })
      .join("")}

${LayoutTranslation?.menu?.en?.singleWorks
  .map((el, i) => {
    return `
         <url>
          <loc>${`${headlessSite}/en${el?.link}`}</loc>
      </url>
        `;
  })
  .join("")}




       ${posts?.it
         .map(({ id, slug, tags, date }) => {
           const receivedDate = new Date(date);
           const isoDate = receivedDate.toISOString();
           return `
         <url>
             <loc>${`${headlessSite}/posts/${slug}`}</loc>
             <lastmod>${`${isoDate}`}</lastmod>
             <changefreq>weekly</changefreq>
             <priority>0.5</priority>
         </url>
       `;
         })
         .join("")}
         ${posts?.en
           .map(({ id, slug, tags, date }) => {
             const receivedDate = new Date(date);
             const isoDate = receivedDate.toISOString();
             return `
          <url>
              <loc>${`${headlessSite}/en/posts/${slug}`}</loc>
              <lastmod>${`${isoDate}`}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.5</priority>
          </url>
        `;
           })
           .join("")}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const resObj = await getPostsByLanguageAndBlogOwner("miaographics");
  const sitemap = generateSiteMap(resObj);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
