import algoliasearch from 'algoliasearch/lite'
import slugify from 'slugify'

import { env } from '../helpers/env'

function transformPostsToSearchObjects (posts) {
  const transformed = posts.map((post) => {
    return {
      objectID: slugify(post.title, { lower: true, strict: true }),
      title: post.title,
      shortText: post.shortText,
      slug: post.slug,
      date: post.date,
      tag: post.tag
    }
  })

  return transformed
}

export async function buildAlgoliaIndexes (posts) {
  if (
    Boolean(env.algolia.isProd) !== true ||
    env.node.env === 'development'
  ) {
    return
  }

  try {
    const transformedPosts = transformPostsToSearchObjects(posts)

    if (posts.length > 0) {
      const client = algoliasearch(
        env.algolia.appId,
        env.algolia.adminKey
      )

      const index = client.initIndex(env.algolia.indexName)
      const algoliaResponse = await index.saveObjects(transformedPosts)

      console.log(
        `\n\n🎉 Sucessfully added ${
          algoliaResponse.objectIDs.length
        } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
          '\n'
        )}`
      )
    }
  } catch (error) {
    console.log('error!')
    console.log(error)
  }
}
