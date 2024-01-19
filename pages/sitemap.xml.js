//pages/sitemap.xml.js
const headlessSite = "https://www.miaographics.it";
import { getPostsByLanguageAndBlogOwner } from "../utils/wordpress";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       
       <url>
         <loc>${headlessSite}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </url>
        <url>
         <loc>${headlessSite}/me</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </url>
        <url>
         <loc>${headlessSite}/en/me</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </url>
      
       <url>
         <loc>${headlessSite}/en</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </url>
       <url>
         <loc>${headlessSite}/blog</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </url>
       <url>
         <loc>${headlessSite}/en/blog</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
       </url>
       
       <url>
       <loc>${headlessSite}/portfolio</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       </url>
     <url>
       <loc>${headlessSite}/en/portfolio</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       </url>
    
    
   <url>
     <loc>${headlessSite}/servizi</loc>
     <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
     <loc>${headlessSite}/en/servizi</loc>
     <lastmod>${new Date().toISOString()}</lastmod>
     </url>

   


     ${posts?.it
       .map(({ slug }) => {
         return `
      <url>
          <loc>${`${headlessSite}/posts/${slug}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
       })
       .join("")}

      ${posts?.en
        .map(({ slug }) => {
          return `
       <url>
           <loc>${`${headlessSite}/posts/${slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
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
