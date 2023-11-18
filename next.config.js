const dotenv = require("dotenv");
dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
};
