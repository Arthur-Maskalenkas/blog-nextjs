import styled, { css } from 'styled-components'

import { customMedia } from 'helpers/customMedia'

export const Link = styled.a`
  ${() => css`
    & {
      ${Tag},
      ${Date},
      ${Title},
      ${ShortText} {
        transition: 0.5s color;
      }
    }

    &:hover {
      ${Date},
      ${Title},
      ${ShortText} {
        color: var(--highlight);
      }
    }
  `}
`

export const PostWrapper = styled.article`
  ${() => css`
    padding: 3.2rem 1.6rem;

    border-bottom: 1px solid var(--borders);

    ${customMedia.greaterThan('desktop')`
      padding: 3.2rem 4.8rem;

      display: grid;
      grid-template-columns: 9rem 1fr;

      column-gap: 2.4rem;

      align-items: center;
    `}
  `}
`

interface ITagWrapperStyleProps {
  colorBackground: string
}

export const TagWrapper = styled.div<ITagWrapperStyleProps>`
  ${({ colorBackground }) => css`
    background-color: ${colorBackground};

    width: max-content;
    padding: 0.32rem 0.8rem;

    margin-bottom: 1.12rem;

    ${customMedia.greaterThan('desktop')`
      width: 9rem;
      height: 9rem;

      margin-bottom: 0;

      border-radius: 50%;

      display:flex;
      align-items: center;
      justify-content: center;
    `}
  `}
`
interface ITagStyleProps {
  colorText: string
}

export const Tag = styled.p<ITagStyleProps>`
  ${({ colorText }) => css`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${colorText};

    text-transform: uppercase;

    ${customMedia.greaterThan('desktop')`
      font-size: 2.1rem
    `}
  `}
`

export const Date = styled.p`
  ${() => css`
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: var(--texts);

    margin-bottom: 0.32rem;
  `}
`

export const Title = styled.h1`
  ${() => css`
    font-size: 2.56rem;
    line-height: 2.56rem;
    font-weight: 700;
    color: var(--postColor);

    margin-bottom: 0.8rem;
  `}
`

export const ShortText = styled.h2`
  ${() => css`
    font-size: 1.92rem;
    line-height: 2.3rem;
    font-weight: 300;
    color: var(--texts);
  `}
`
