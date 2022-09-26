import { getAllPostsWithAllData } from '../services/api'
import { buildAlgoliaIndexes } from '../services/build-search'

import HomeTemplate from 'templates/HomeTemplate'
import { IHomeTemplateProps } from 'templates/HomeTemplate/homeTemplate'

export default function Page ({ posts }: IHomeTemplateProps) {
  return <HomeTemplate posts={posts} />
}

export async function getStaticProps () {
  const posts = getAllPostsWithAllData()

  await buildAlgoliaIndexes(posts)

  return {
    props: { posts }
  }
}
