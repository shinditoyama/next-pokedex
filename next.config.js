/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.pokemon.com",
      },
    ],
    // domains: ["assets.pokemon.com"],
  },
};

module.exports = nextConfig;
