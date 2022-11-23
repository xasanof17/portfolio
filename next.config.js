/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'uz-UZ'],
    defaultLocale: 'en-US'
  },
  images: {
    domains: ['media.graphassets.com']
  }
}

module.exports = nextConfig
