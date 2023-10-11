//pages/sitemap.xml.js
const headlessSite = "https://www.miaographics.it/";
import {
  getPosts,
  getTagId,
  getPostsByLanguageAndBlogOwner,
} from "../utils/wordpress";

import LayoutTranslation from "../public/layout.json";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       
       <url>
         <loc>https://thallion-dev.it</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://thallion-dev.it/me</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://thallion-dev.it/en/me</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://thallion-dev.it/en</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://thallion-dev.it/blog</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://thallion-dev.it/blog/en</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
       <loc>https://thallion-dev.it/fr</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://thallion-dev.it/fr/me</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
   <url>
   <loc>https://thallion-dev.it/fr/blog</loc>
   <changefreq>weekly</changefreq>
   <priority>1</priority>
 </url>
 <url>
 <loc>https://thallion-dev.it/fr/portfolio</loc>
 <changefreq>weekly</changefreq>
 <priority>1</priority>
</url>
 <url>
 <loc>https://thallion-dev.it/en/portfolio</loc>
 <changefreq>weekly</changefreq>
 <priority>1</priority>
</url>
<url>


       ${LayoutTranslation?.menu?.it?.singleService
         .map((el, i) => {
           return `
            <url>
             <loc>${`${headlessSite}/service/${el?.link}`}</loc>
            </url>
           `;
         })
         .join("")}

  ${LayoutTranslation?.menu?.en?.singleService
    .map((el, i) => {
      return `
            <url>
             <loc>${`${headlessSite}/en/service/${el?.link}`}</loc>
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
           ${posts?.fr
             .map(({ id, slug, tags, date }) => {
               const receivedDate = new Date(date);
               const isoDate = receivedDate.toISOString();
               return `
           <url>
               <loc>${`${headlessSite}/fr/posts/${slug}`}</loc>
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
