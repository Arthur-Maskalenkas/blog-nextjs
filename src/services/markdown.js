import { unified } from 'unified'

/*
 * Transformando em html
 * */
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

/*
 * adicionadno link nos headings
 * */
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/*
 * Implementando codigo no markdown
 * */
import rehypePrism from 'rehype-prism-plus'

/**
 * Criamos nossa função de transformar
 * string em HTML.
 * Ela é uma função assincrona, o que
 * ela sempre responderá uma Promise e
 * nos dará a possibilidade de esperar uma
 * Promise dentro dela terminar para
 * continuar de uma forma simples.
 */
export async function toHTML(markdown) {
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

/**
 * Exportamos o padrão como um objeto
 * com a função para ficar mais bonito
 * utilizá-lo, utilizaremos ela assim:
 * markdown.toHTML(content)
 */
export default { toHTML }
