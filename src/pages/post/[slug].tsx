import { getAllPosts, getPost } from 'services/api.js'
import markdown from 'services/markdown.js'
import PostTemplate from 'templates/PostTemplate'
import { IPostTemplateProps } from 'templates/PostTemplate/postTemplate'

export default function Page ({ post }: IPostTemplateProps) {
  return <PostTemplate post={post} />
}

export async function getStaticProps ({ params }: any) {
  /**
   * Utilizamos a função de buscar postagem
   * passando o nome da rota (ola-mundo, nesse caso)
   * e os campos que queremos.
   */
  const post: any = getPost(params.slug, [
    'title',
    'date',
    'shortText',
    'content',
    'slug'
  ])

  post.content = await markdown.toHTML(post.content)

  return {
    props: { post }
  }
}

export function getStaticPaths () {
  const posts = getAllPosts(['slug', 'date'])

  const paths = posts.map(({ slug }: any) => ({
    params: {
      slug
    }
  }))
  return {
    paths,
    fallback: false
  }
}
