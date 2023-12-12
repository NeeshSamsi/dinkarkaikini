/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "*",
      destination: "https://linktr.ee/dinkarkaikini",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
