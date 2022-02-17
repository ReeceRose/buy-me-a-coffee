// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['t3.ftcdn.net', 'www.pngitem.com'],
  },
});
