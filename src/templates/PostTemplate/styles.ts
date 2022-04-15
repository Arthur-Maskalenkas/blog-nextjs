import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'
import { textWithHighlightGlobalStyle } from 'styles/globa'

export const ThemeCodeWrapper = styled.div`
  ${({ theme }) => css`
    /**
 * Dracula Theme originally by Zeno Rocha [@zenorocha]
 * https://draculatheme.com/
 *
 * Ported for PrismJS by Albert Vallverdu [@byverdu]
 */

    /**
*
* * Theme *
*
*/

    /**
*
* * --- --- --- --- Theme --- --- --- --- *
*
*/
    pre[class*='language-'].line-numbers {
      position: relative;
      padding-left: 3.8em;
      counter-reset: linenumber;
    }
    pre[class*='language-'].line-numbers > code {
      position: relative;
      white-space: inherit;
    }
    .line-numbers .line-numbers-rows {
      position: absolute;
      pointer-events: none;
      top: 0;
      font-size: 100%;
      left: -3.8em;
      width: 3em;
      letter-spacing: -1px;
      border-right: 1px solid #999;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .line-numbers-rows > span {
      display: block;
      counter-increment: linenumber;
    }
    .line-numbers-rows > span:before {
      content: counter(linenumber);
      color: #999;
      display: block;
      padding-right: 0.8em;
      text-align: right;
    }
    code[class*='language-'],
    pre[class*='language-'] {
      color: #ccc;
      background: none;
      font-family: 'Inconsolata', monospace;
      font-size: 1.5rem;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      -moz-tab-size: 4;
      -webkit-tab-size: 4;
      tab-size: 4;
      -webkit-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }
    pre[class*='language-'] {
      padding: 1em;
      margin: 0.5em 0;
      overflow: auto;
    }

    pre[class*='language-']::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.highlight};
      border-radius: 4px;
    }
    pre[class*='language-']::-webkit-scrollbar-track {
      border-radius: 7px;
      background-color: ${theme.colors.background};
    }
    pre[class*='language-']::-webkit-scrollbar {
      border-radius: 4px;
      height: 10px;
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      background: #2d2d2d;
    }
    :not(pre) > code[class*='language-'] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }
    .token.block-comment,
    .token.cdata,
    .token.comment,
    .token.doctype,
    .token.prolog {
      color: #999;
    }
    .token.punctuation {
      color: #ccc;
    }
    .token.attr-name,
    .token.deleted,
    .token.namespace,
    .token.tag {
      color: #e2777a;
    }
    .token.function-name {
      color: #6196cc;
    }
    .token.boolean,
    .token.function,
    .token.number {
      color: #f08d49;
    }
    .token.class-name,
    .token.constant,
    .token.property,
    .token.symbol {
      color: #f8c555;
    }
    .token.atrule,
    .token.builtin,
    .token.important,
    .token.keyword,
    .token.selector {
      color: #cc99cd;
    }
    .token.attr-value,
    .token.char,
    .token.regex,
    .token.string,
    .token.variable {
      color: #7ec699;
    }
    .token.entity,
    .token.operator,
    .token.url {
      color: #67cdcc;
    }
    .token.bold,
    .token.important {
      font-weight: 700;
    }
    .token.italic {
      font-style: italic;
    }
    .token.entity {
      cursor: help;
    }
    .token.inserted {
      color: green;
    }

    /**
 *
 * * no theme *
 *
 */

    pre {
      overflow-x: auto;
    }

    /**
 * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .code-highlight.
 */
    .code-highlight {
      float: left; /* 1 */
      width: 99.5%; /* 2 */
    }

    .code-line {
      display: block;
      padding-left: 16px;
      padding-right: 16px;
      margin-left: -16px;
      margin-right: -16px;
      border-left-width: 4px;
      border-left-color: rgba(31, 41, 55, 0); /* Set code block color */
    }

    .code-line.inserted {
      background-color: rgba(
        16,
        185,
        129,
        0.2
      ); /* Set inserted line (+) color */
    }

    .code-line.deleted {
      background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
    }

    .highlight-line {
      margin-left: -16px;
      margin-right: -16px;
      background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */
      border-left-width: 4px;
      border-left-color: rgb(
        59,
        130,
        246
      ); /* Set highlight accent border color */
    }

    .line-number::before {
      display: inline-block;
      width: 1rem;
      text-align: right;
      margin-right: 16px;
      margin-left: -8px;
      color: rgb(156, 163, 175); /* Line number color */
      content: attr(line);
    }

    /**
 *
 * * --- --- --- --- no theme --- --- --- --- *
 *
 */
  `}
`

export const LinkBack = styled(textWithHighlightGlobalStyle).attrs({ as: 'a' })`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.texts};

    margin-bottom: ${theme.spacings.sp3.s2};

    display: inline-block;
  `}
`

export const PostDate = styled.p`
  ${({ theme }) => css`
    font-size: 1.7rem;
    line-height: 1.7rem;
    font-weight: 100;
    color: ${theme.colors.postColor};

    margin-bottom: ${theme.spacings.sp2.s3};

    ${customMedia.greaterThan('desktop')`
      font-size: 1.7rem;
      line-height: 1.7rem;
    `}
  `}
`

export const PostTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 4.4rem;
    line-height: 4.9rem;
    font-weight: 700;
    color: ${theme.colors.postColor};

    margin-bottom: ${theme.spacings.sp2.s3};

    ${customMedia.greaterThan('desktop')`
      font-size: 6.4rem;
      line-height: 7rem;
    `}
  `}
`

export const PostSubtitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2.5rem;
    line-height: 3.3rem;
    font-weight: 200;
    color: ${theme.colors.postColor};

    ${customMedia.greaterThan('desktop')`
      font-size: 3.2rem;
      line-height: 3.8rem;
    `}
  `}
`
