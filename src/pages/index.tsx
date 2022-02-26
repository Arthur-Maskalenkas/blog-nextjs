import { getAllPosts } from 'services/api.js'
import Link from 'next/link'

export default function Page({ posts }) {
  return (
    <>
      <h1>Meu blog!</h1>
      <p>Listagem de posts:</p>
      {posts.map((post) => (
        <>
          <p style={{ color: 'white', fontSize: '10rem' }}>{post.slug}</p>
          <p style={{ color: 'white', fontSize: '10rem' }}>{post.title}</p>
        </>
      ))}
    </>
  )
}

export function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug'])
  return {
    props: { posts }
  }
}
