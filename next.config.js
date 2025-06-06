/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      {
        source: "/works/:path*",
        destination: "https://www.miaographics.it/portfolio/:path*",
        permanent: true,
      },
      {
        source: "/:lang/works/:path*", // Cattura qualsiasi lingua e tutto dopo /works/
        destination: "/portfolio/:path*", // Cambia "works" in "portfolio" e rimuove la lingua
        permanent: true,
      },
      {
        source: "/service/:path*",
        destination: "https://www.miaographics.it/servizi/:path*",
        permanent: true,
      },
      {
        source: "/:lang/service/:path*",
        destination: "https://www.miaographics.it/servizi/:path*",
        permanent: true,
      },
      {
        source: "/me",
        destination: "https://www.miaographics.it/chi-sono",
        permanent: true,
      },
      {
        source: "/:lang/posts/:slug*", // Cattura qualsiasi lingua (es. "en", "it", ecc.)
        destination: "/posts/:slug*", // Rimuove la lingua e mantiene lo slug
        permanent: true,
      },
      {
        source: "/:lang/portfolio/:path*",
        destination: "https://www.miaographics.it/portfolio/:path*",
        permanent: true,
      },
      {
        source: "/:lang/chi-sono/:path*",
        destination: "https://www.miaographics.it/chi-sono",
        permanent: true,
      },

      {
        source: "/:lang/blog",
        destination: "https://www.miaographics.it/blog",
        permanent: true,
      },
      {
        source: "/:lang/servizi",
        destination: "https://www.miaographics.it/servizi",
        permanent: true,
      },
      {
        source: "/:lang/portfolio",
        destination: "https://www.miaographics.it/portfolio",
        permanent: true,
      },
      {
        source: "/:lang/contatti",
        destination: "https://www.miaographics.it/contatti",
        permanent: true,
      },
      {
        source: "/:lang/contact",
        destination: "https://www.miaographics.it/contatti",
        permanent: true,
      },
    ];
  },
};
const ContentSecurityPolicy = `
  default-src 'self' https://cpl.iubenda.com/ https://idb.iubenda.com/ https://mithablog.mithacreative.it/ https://widget-data.service.elfsight.com/ https://static.elfsight.com/ https://service-reviews-ultimate.elfsight.com/ https://core.service.elfsight.com/ https://consent.cookie-script.com/ https://metrics.hotjar.io/ https://ask.hotjar.io/ https://content.hotjar.io/ https://in.hotjar.com/  https://vc.hotjar.io/ wss://ws.hotjar.com/api/v2/client/ws https://in.hotjar.com/ https://yourwordpresssite.com/wp-json/wp/v2/comments https://sideblog.sideffect.it/ https://api.iconify.design/ https://fonts.googleapis.com https://fonts.gstatic.com https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css https://region1.google-analytics.com;
  script-src 'self' https://core.service.elfsight.com/ https://cdn.iubenda.com/ http://embeds.iubenda.com/ https://widgets.tree-nation.com/ https://universe-static.elfsightcdn.com/ https://static.elfsight.com/ https://static.elfsight.com/platform/platform.js https://assets.calendly.com/assets/external/widget.js https://content.hotjar.io/ https://script.hotjar.com/ https://static.hotjar.com/ https://connect.facebook.net/ https://connect.facebook.net/en_US/fbevents.js https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js https://cdnjs.buymeacoffee.com/ https://storage.googleapis.com  https://cdnjs.cloudflare.com/ http://cdn.cookie-script.com http://report.cookie-script.com  https://www.googletagmanager.com  https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval';
  child-src 'self' https://www.iubenda.com/ https://widgets.tree-nation.com/ https://form.jotform.com/  https://giphy.com/  https://calendly.com/  https://www.google.com/ https://www.youtube.com/ https://www.buymeacoffee.com/;
  style-src 'self' 'unsafe-inline'  https://fonts.googleapis.com https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css  data:;
  font-src 'self' https://script.hotjar.com/font-hotjar_5.17b429.woff https://script.hotjar.com/font-hotjar_5.0ddfe2.ttf https://script.hotjar.com/font-hotjar_5.17b429.woff https://script.hotjar.com/font-hotjar_5.0ddfe2.ttf https://script.hotjar.com/font-hotjar_5.65042d.woff2 https://bmc-cdn.nyc3.digitaloceanspaces.com/ https://fonts.googleapis.com https://fonts.gstatic.com https://cdnjs.cloudflare.com/ https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/'unsafe-inline' data:;
  img-src 'self' https://phosphor.utils.elfsightcdn.com/ https://lh5.googleusercontent.com/ https://i.ibb.co/ https://mithablog.mithacreative.it/ https://a.storyblok.com/ https://images.unsplash.com/ https://lh3.googleusercontent.com/ https://i.ibb.co/bKs6Gkj/cookie4.png https://script.hotjar.com/widget_icons_light.766225.png https://www.facebook.com/ https://raw.githubusercontent.com/ https://github.com/ https://assets.calendly.com/assets/external/close-icon.svg  https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png  https://cdn.buymeacoffee.com/assets/img/widget/loader.svg https://placehold.co/600x400/000000/FFFFFF/png hhttps://s.w.org/ https://secure.gravatar.com/avatar/ https://static.xx.fbcdn.net/  https://sideblog.sideffect.it/wp-content/uploads/ https://www.googletagmanager.com/ data: blob:;

`;
const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: true,
//   openAnalyzer: true,
// });

module.exports = withPlugins([
  nextConfig,

  {
    i18n: {
      locales: ["it"],
      defaultLocale: "it",
      localeDetection: true,
    },
  },

  {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: "/:path*",
          headers: securityHeaders,
        },
      ];
    },
  },
  {
    images: {
      formats: ["image/avif", "image/webp"],
      domains: [
        "mithablog.mithacreative.it/wp-content/uploads/",
        "https://www.miaographics.it/",
      ],

      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
      unoptimized: true,
    },
  },

  // withBundleAnalyzer,
]);
