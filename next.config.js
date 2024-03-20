/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    // Define your environment variables here
    NEXT_PUBLIC_REACT_APP_NAME: process.env.REACT_APP_NAME,
    // Add more environment variables as needed
  },
}

module.exports = nextConfig
