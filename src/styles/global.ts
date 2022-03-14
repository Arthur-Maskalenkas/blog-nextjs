import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ theme }) => css`
      transition: background ${theme.transition.fast},
        color ${theme.transition.fast};
    `}

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  a {
    text-decoration: none;
  }

  ol, ul {
      list-style: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    h1::selection,
    h2::selection,
    h3::selection,
    h4::selection,
    h5::selection,
    p::selection,
    a::selection,
    code::selection,
    span::selection,
    small::selection {
      background: ${theme.colors.highlight};
      color: ${theme.colors.texts} !important;
    }

    a::selection {
      color: #b4f231 !important;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      font-size: 1.4rem;

      ${!removeBg &&
      css`
        transition: background ${theme.transition.fast};
        background-color: ${theme.colors.background};
      `}
    }
  `}

`

export default GlobalStyles
