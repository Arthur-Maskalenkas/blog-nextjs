const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */

const nextConfig = withPreact({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
})

module.exports = nextConfig
