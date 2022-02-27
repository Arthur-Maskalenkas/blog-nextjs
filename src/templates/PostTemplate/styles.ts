import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'
import { textWithHighlightGlobalStyle } from 'styles/globa'

export const PostTemplateWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.sp5.s2} ${theme.spacings.sp2.s3} 6.239rem
      ${theme.spacings.sp2.s3};

    ${customMedia.greaterThan('desktop')`
      max-width: 112rem;
      padding: 8rem 8rem 0 8rem;

      margin-left: auto;
      margin-right: auto;
    `}
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
      line-height: 6.4rem;
    `}
  `}
`

export const PostSubtitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2.5rem;
    line-height: 3.3rem;
    font-weight: 200;
    color: ${theme.colors.postColor};

    margin-bottom: 7rem;

    ${customMedia.greaterThan('desktop')`
      font-size: 3.2rem;
      line-height: 3.2rem;
    `}
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    h2 {
      font-size: 2.2rem;
      line-height: 3rem;
      font-weight: 800;
      color: ${theme.colors.postColor};

      margin-bottom: 1.6rem;

      letter-spacing: 0.3rem;

      ${customMedia.greaterThan('desktop')`
        font-size: 3.3rem;
        line-height: 4.7rem;
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
