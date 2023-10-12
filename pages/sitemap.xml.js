//pages/sitemap.xml.js
const headlessSite = "https://www.miaographics.it";
import { getPostsByLanguageAndBlogOwner } from "../utils/wordpress";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       
       <url>
         <loc>https://www.miaographics.it/</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://www.miaographics.it/me</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://www.miaographics.it/en/me</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
       <loc>https://www.miaographics.it/fr/me</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
       <url>
         <loc>https://www.miaographics.it/en</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://www.miaographics.it/blog</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://www.miaographics.it/en/blog</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
       <loc>https://www.miaographics.it/fr/blog</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
       <url>
       <loc>https://www.miaographics.it/portfolio</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
       <loc>https://www.miaographics.it/en/portfolio</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://www.miaographics.it/servizi</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
   






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
