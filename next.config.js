// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
})
