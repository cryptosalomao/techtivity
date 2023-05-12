/** @type {import('next').NextConfig} */
const nextRoutes = require("nextjs-routes/config")
const withRoutes = nextRoutes()

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts"],
  transpilePackages: ["@growinco/service"],
}

module.exports = withRoutes(nextConfig)
