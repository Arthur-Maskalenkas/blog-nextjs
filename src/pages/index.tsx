import { getAllPosts } from 'services/api.js'
import HomeTemplate from 'templates/HomeTemplate'

import { buildAlgoliaIndexes } from 'services/build-search'

import { IHomeTemplateProps } from 'templates/HomeTemplate/homeTemplate'

export default function Page({ posts }: IHomeTemplateProps) {
  return <HomeTemplate posts={posts} />
}

export function getStaticProps() {
  const posts = getAllPosts(['title', 'tag', 'shortText', 'slug', 'date'])

  buildAlgoliaIndexes(posts)

  return {
    props: { posts }
  }
}
