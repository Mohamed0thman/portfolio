const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
  },
};
module.exports = (_phase, { defaultConfig }) => {
  const plugins = [optimizedImages];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
