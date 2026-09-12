/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (no server-side image optimization)
  images: {
    unoptimized: true,
  },

  // Enable React strict mode for better performance debugging
  reactStrictMode: true,

  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable experimental features for better performance
  // experimental: {
  //   optimizeCss: true, // Requires 'critters' package
  // },

  // Note: headers() don't work with static export (GitHub Pages)
  // Cache control is handled by GitHub Pages / CDN
};

export default nextConfig;
