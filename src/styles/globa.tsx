import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'

export const textWithHighlightGlobalStyle = styled.p`
  ${({ theme }) => css`
    color: var(--texts);
    cursor: pointer;

    &:hover {
      color: var(--highlight);
    }
  `}
`

export const ContainerPageBlogGlobalStyle = styled.div`
  ${({ theme }) => css`
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
  ${({ theme }) => css`
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

    a {
      font-size: 2rem;
      line-height: 3.4rem;
      font-weight: 300;
      color: var(--highlight);

      border-bottom: 1px dashed var(--highlight);
    }
  `}
`
