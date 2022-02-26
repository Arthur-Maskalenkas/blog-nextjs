// Importamos nossa função de buscar posts
import { getPost, getAllPosts } from 'services/api.js'
import markdown from 'services/markdown.js'

export default function Page({ post }: any) {
  return (
    <>
      <div
        style={{
          margin: 'auto',
          maxWidth: '600px',
          fontFamily: 'sans-serif'
        }}
      >
        <h1>{post.title}</h1>
        <p>
          {post.author} · {post.date}
        </p>
        {/*
      Inserimos nosso na String HTML com
      dangerouslySetInnerHTML, para o React.js
      a interpretar como HTML.
      */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  )
}

/**
 * A função getStaticProps nos traz os
 * parâmetros que foram utilizados para
 * fazer a requisição, com ele conseguimos
 * usar o nosso slug que foi trazido para
 * nós a partir da URL.
 */
export async function getStaticProps({ params }: any) {
  /**
   * Utilizamos a função de buscar postagem
   * passando o nome da rota (ola-mundo, nesse caso)
   * e os campos que queremos.
   */
  const post = getPost(params.slug, [
    'title',
    'date',
    'author',
    'slug',
    'content'
  ])

  post.content = await markdown.toHTML(post.content)

  return {
    props: { post }
  }
}

export function getStaticPaths() {
  const posts = getAllPosts(['slug', 'date'])
  const paths = posts.map(({ slug }) => ({
    params: {
      slug
    }
  }))
  return {
    paths,
    fallback: false
  }
}
