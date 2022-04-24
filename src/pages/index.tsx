import HomeTemplate from 'templates/HomeTemplate'

import { buildAlgoliaIndexes } from 'services/build-search'

import { IHomeTemplateProps } from 'templates/HomeTemplate/homeTemplate'
import { getAllPostsWithAllData } from '../services/api'

export default function Page({ posts }: IHomeTemplateProps) {
  return <HomeTemplate posts={posts} />
}

export function getStaticProps() {
  const posts = getAllPostsWithAllData()

  buildAlgoliaIndexes(posts)

  return {
    props: { posts }
  }
}
