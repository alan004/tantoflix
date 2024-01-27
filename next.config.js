const dotenv = require("dotenv");
dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {};

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
});
