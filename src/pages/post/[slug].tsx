/* eslint-disable @typescript-eslint/ban-ts-comment */
// Importamos nossa função de buscar posts
import { getPost, getAllPosts } from 'services/api.js'
import markdown from 'services/markdown.js'
import PostTemplate from 'templates/PostTemplate'
import { IPostTemplateProps } from 'templates/PostTemplate/postTemplate'

export default function Page({ post }: IPostTemplateProps) {
  return <PostTemplate post={post} />
}

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

  //{/*
  // @ts-ignore */}
  post.content = await markdown.toHTML(post.content)

  return {
    props: { post }
  }
}

export function getStaticPaths() {
  const posts = getAllPosts(['slug', 'date'])
  //{/*
  // @ts-ignore */}
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
