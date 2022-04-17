import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'

export const textWithHighlightGlobalStyle = styled.p`
  ${() => css`
    color: var(--texts);
    cursor: pointer;

    &:hover {
      color: var(--highlight);
    }
  `}
`

export const ContainerPageBlogGlobalStyle = styled.div`
  ${() => css`
    padding: 4.4rem 1.6rem 6.239rem 1.6rem;

    ${customMedia.greaterThan('desktop')`
      max-width: 112rem;
      padding: 8rem 8rem 0 8rem;

      margin-left: auto;
      margin-right: auto;
    `}
  `}
`

export const ContainerContentPageBlogGlobalStyle = styled.section`
  ${() => css`
    h2,
    h2 a {
      font-size: 2.2rem;
      line-height: 3rem;
      font-weight: 800;
      color: var(--postColor);

      margin-top: 3.8rem;
      margin-bottom: 1.6rem;

      letter-spacing: 0.3rem;

      border: none;

      ${customMedia.greaterThan('desktop')`
        font-size: 3.3rem;
        line-height: 4.7rem;
      `}
    }

    ,
    h3,
    h3 a {
      font-size: 1.8rem;
      line-height: 2.5rem;
      font-weight: 800;
      color: var(--postColor);

      margin-top: 3.8rem;
      margin-bottom: 1.6rem;

      letter-spacing: 0.3rem;

      border: none;

      ${customMedia.greaterThan('desktop')`
        font-size: 2.5rem;
        line-height: 3.5rem;
      `}
    }

    p {
      font-size: 2rem;
      line-height: 3.4rem;
      font-weight: 300;
      color: var(--postColor);

      margin-bottom: 2.5rem;
    }

    img {
      display: block;
      width: auto;
      max-width: 100%;
      margin: 1.875rem auto;
    }
    blockquote {
      color: var(--postColor);
      border-left: 0.3rem solid var(--highlight);
      padding: 0 1.875rem;
      margin: 3.125rem auto;
    }

    a {
      font-size: 2rem;
      line-height: 3.4rem;
      font-weight: 300;
      color: var(--highlight);

      border-bottom: 1px dashed var(--highlight);
    }
  `}
`
