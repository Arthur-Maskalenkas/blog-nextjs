import matter from 'gray-matter'

import fs from 'fs'
import { join } from 'path'

/**
 * Primeiros definimos a rota onde estão
 * nossos posts.
 */
const postsDirectory = join(process.cwd(), 'src/posts')

function getMarkdownsFiles () {
  /**
   * Essa função diz, leia o nome de
   * todos os arquivos dentro da pasta
   * que eu especifiquei na variável
   * postsDirectory e me retorne eles
   * em uma array.
   */
  return fs.readdirSync(postsDirectory)
}

export function getPost (slugOrFilename, fields = []) {
  // Remover o .md do fim do arquivo
  const slug = slugOrFilename.replace(/\.md$/, '')
  // Buscando pelo nome do arquivo markdown, com o .md
  const directory = join(postsDirectory, `${slug}.md`)
  // Ler o conteúdo do arquivo markdown
  const fileContents = fs.readFileSync(directory, 'utf8')

  // cabeçalho == data e conteudo == content
  const { data, content } = matter(fileContents)

  const post = {}

  // O campo post precisa ser preenchido, e vamos preencher atraves dos loops
  fields.forEach((field) => {
    if (field === 'content') post[field] = content
    if (field === 'slug') post[field] = slug

    // Pegando o restante do header
    if (data[field]) post[field] = data[field]
  })

  return post
}

export function getAllPosts (fields) {
  const slugs = getMarkdownsFiles()

  const posts = slugs
    .map((slug) => getPost(slug, fields))
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return posts
}

export function getAllPostsWithAllData () {
  const allData = getAllPosts(['title', 'tag', 'shortText', 'slug', 'date'])

  return allData
}
