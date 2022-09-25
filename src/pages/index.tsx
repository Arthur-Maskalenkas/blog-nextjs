import HomeTemplate from 'templates/HomeTemplate'
import { IHomeTemplateProps } from 'templates/HomeTemplate/homeTemplate'

export default function Page ({ posts }: IHomeTemplateProps) {
  return <HomeTemplate posts={posts} />
}

export function getStaticProps () {
  // const posts = getAllPostsWithAllData()

  // buildAlgoliaIndexes(posts)

  return {
    props: { posts }
  }
}
