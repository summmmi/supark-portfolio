/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:"akamai",
    path:"",
  },
}

module.exports = {
  experimental: {
      images: {
          unoptimized: true
      }
  }
}