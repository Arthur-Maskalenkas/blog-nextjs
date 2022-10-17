import styled, { css } from 'styled-components'

import { customMedia } from 'helpers/customMedia'

export const textWithHighlightGlobalStyle = styled.p`
  ${() => css`
    color: var(--texts);
    cursor: pointer;

    &:hover {
      color: var(--highlight);
    }
  `}
`

export const ContainerPageBlogGlobalStyle = styled.main`
  ${() => css`
    padding: 1.4rem 1.6rem 6.239rem 1.6rem;

    ${customMedia.greaterThan('desktop')`
      max-width: 112rem;
      padding: 2rem 8rem 0 8rem;

      margin-left: auto;
      margin-right: auto;
    `}
  `}
`

export const ContainerContentPageBlogGlobalStyle = styled.section`
  ${() => css`
    h1,h2,h3,h4,h5,h6 {
      a {
        line-break: anywhere;
      }
    }
    
    
    h2,
    h2 a {
      font-size: 1.8rem;
      line-height: 2.5rem;
      

      
      font-weight: 800;
      color: var(--postColor);

      margin-top: 3.8rem;
      margin-bottom: 1.6rem;

      letter-spacing: 0.3rem;

      border: none;

      ${customMedia.greaterThan('smallPhone')`
        font-size: 2.2rem;
        line-height: 3rem;
      `}
      
      ${customMedia.greaterThan('desktop')`
        font-size: 3.3rem;
        line-height: 4.7rem;
      `}
    }

    h3,
    h3 a {
      font-size: 2rem;
      line-height: 2.8rem;

      font-weight: 800;
      color: var(--postColor);

      margin-top: 3.8rem;
      margin-bottom: 1.6rem;

      letter-spacing: 0.3rem;

      border: none;

      ${customMedia.greaterThan('smallPhone')`
        font-size: 2.5rem;
        line-height: 3.3rem;
      `}

      ${customMedia.greaterThan('desktop')`
        font-size: 3.3rem;
        line-height: 4.7rem;
      `}
    }
    
    h4,h4 a {
      margin-bottom: 1.6rem;
    }

    h4,
    h4 a,
    h5,
    h5 a{
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 800;
      color: var(--postColor);

      margin-top: 3.8rem;

      letter-spacing: 0.3rem;

      border: none;

      ${customMedia.greaterThan('smallPhone')`
        font-size: 2rem;
        line-height: 2.5rem;
      `}

      ${customMedia.greaterThan('desktop')`
        font-size: 2.2rem;
        line-height: 2.7rem;
      `}
    }
    
    h5 > a.anchor {
      color: var(--highlight);
    }

    p {
      font-size: 1.7rem;
      line-height: 3rem;

      font-weight: 300;
      color: var(--postColor);

      margin-bottom: 2.5rem;

      overflow-wrap: break-word;

      ${customMedia.greaterThan('smallPhone')`
        font-size: 2rem;
        line-height: 3.4rem;
      `}
    }

    pre + p {
      margin-top: 2.5rem;
    }

    hr {
      margin: 3rem 0;
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

    ul,
    ol {
      list-style: disc;
      padding-left: 2.5rem;
      margin: 0 auto 1.6rem;
    }

    li {
      position: relative;

      padding-left: 1rem;

      font-size: 20px;
      line-height: 34px;
      font-weight: 300;
      color: white;

      & > ul {
        margin-bottom: 0;
      }
    }

    #diagrama,
    #diagrama-1,
    #diagrama-2,
    #diagrama-3,
    #diagrama + p,
    #diagrama-1 + p,
    #diagrama-2 + p,
    #diagrama-3 + p {
      display: none;
    }

    ${customMedia.greaterThan('xlDesktop')`
        font-size: 3.3rem;
        line-height: 4.7rem;

        #diagrama,
        #diagrama-1,
        #diagrama-2,
        #diagrama-3,
        #diagrama + p,
        #diagrama-1 + p,
        #diagrama-2 + p,
        #diagrama-3 + p {
          display: block;
        }
      `}

    .anchor {
      position: relative;
      border: 0;
      color: var(--postColor);
      text-decoration: none;

      &:before {
        content: '#';
        position: absolute;
        left: -35px;
        opacity: 0;
      }

      &:hover:before {
        opacity: 1;
      }
    }
  `}
`