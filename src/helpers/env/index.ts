export const env = {
  algolia: {
    appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
    adminKey: process.env.ALGOLIA_ADMIN_KEY || '',
    isProd: process.env.NEXT_PUBLIC_PROD_ALGOLIA || '',
    indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '',
    searchOnlyApiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''
  },

  node: {
    env: process.env.NODE_ENV || ''
  },

  googleAnalytics: {
    id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
  }
}

// ALGOLIA_ADMIN_KEY=
// NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY=
// NEXT_PUBLIC_ALGOLIA_INDEX_NAME=
// NEXT_PUBLIC_ALGOLIA_APP_ID=
//
// NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
//
// NEXT_PUBLIC_PROD_ALGOLIA=
