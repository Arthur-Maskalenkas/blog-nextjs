import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

export async function toHTML (markdown) {
  // Processamos nosso conteúdo Markdown
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrism)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: 'anchor'
      }
    })
    .process(markdown)

  /**
   * Retornamos ele de volta em formato
   * de String.
   */
  return result.toString()
}

export default { toHTML }
