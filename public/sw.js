if (!self.define) {
  let e,
    s = {};
  const t = (t, a) => (
    (t = new URL(t + ".js", a).href),
    s[t] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => t(e, i),
      u = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(a.map((e) => u[e] || r(e))).then((e) => (n(...e), c));
  };
}
define(["./workbox-07a7b4f2"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "edf8c75ebc27b60868913ba08bca175c",
        },
        {
          url: "/_next/static/ER6wkxp_vLu6tP0CySUIX/_buildManifest.js",
          revision: "ae9eef61ecb4f32528f2e03fce5305d0",
        },
        {
          url: "/_next/static/ER6wkxp_vLu6tP0CySUIX/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/127-a1364899a9a8f68f.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/142-a663a270e909cd26.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/396-b309a3b66ca2acbf.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/458-9764e031e819e900.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/465-faa6cc363b9acb76.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/54-67695d2cba595bd2.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/646-f20a65cba73cf2f6.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/688-35599c28e2337998.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/847-ac5fe0666f14a387.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/849-7141b102b5da1238.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/864-8fb7737c753afa9d.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/aaea2bcf-967f539b7e8478bd.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/About/page-07d8f421309cacde.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/Favorites/page-2b4287630957a6a6.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/Popular/page-ffe3c81e23010147.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/Searched/page-7a06566305b473b7.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/Sorteio/page-b35b588e4620a4ab.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/layout-6294bdabdf4cc0dc.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/not-found-81a7864b2c69293f.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/app/page-4db860b389f1d630.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/fd9d1056-5aa239af50d3ea60.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/framework-8883d1e9be70c3da.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/main-3ccbf54a8baed60e.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/main-app-f23db43aa1d798b8.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/pages/_app-27277a117f49dcf1.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/pages/_error-91a5938854a6f402.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-db2e8ad31c09138f.js",
          revision: "ER6wkxp_vLu6tP0CySUIX",
        },
        {
          url: "/_next/static/css/e7d3bab42d9af29d.css",
          revision: "e7d3bab42d9af29d",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/MoviePoster.bfd82847.png",
          revision: "63f045f61da2f1769479dfd1428f2119",
        },
        {
          url: "/_next/static/media/TantoflixLogo.62937b2c.png",
          revision: "4fe628b3c0eee53ca2c4d60578f5304a",
        },
        {
          url: "/_next/static/media/alan.23d7ffda.jpg",
          revision: "8de246fe544eb79f63b4f2a27e0a4244",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/_next/static/media/github.01d34f38.svg",
          revision: "5e0af4eb0fdbceee8597343d7a7ddd16",
        },
        {
          url: "/_next/static/media/linkedin.e838c150.svg",
          revision: "e2be477eb9bbe46cccbafd786d6599cd",
        },
        {
          url: "/_next/static/media/not found.12781fd6.jpg",
          revision: "c2c8af47d8db23cb47aec4e81f0c5ba9",
        },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});