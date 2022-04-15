import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'
import { textWithHighlightGlobalStyle } from 'styles/globa'

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

export const Content = styled.section`
  ${({ theme }) => css`
    h2,
    h2 a {
      font-size: 2.2rem;
      line-height: 3rem;
      font-weight: 800;
      color: ${theme.colors.postColor};

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
      color: ${theme.colors.postColor};

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
      color: ${theme.colors.postColor};

      margin-bottom: 2.5rem;
    }

    a {
      font-size: 2rem;
      line-height: 3.4rem;
      font-weight: 300;
      color: ${theme.colors.highlight};

      border-bottom: 1px dashed ${theme.colors.highlight};
    }
  `}
`
