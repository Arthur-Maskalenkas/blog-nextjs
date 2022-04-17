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

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  button,aside, h1, h2, h3, h4, h5, a, header, footer, div, article,svg {
    ${({ theme }) => css`
      transition: background ${theme.transition.fast},
        color ${theme.transition.fast};
    `}
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
      background: var(--highlight);
      color: var(--texts) !important;
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
        background-color: var(--background);
      `}
    }
  `}

  body {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #F231A5;
    --mediumBackground: #0a0c21;
    --background: #030518;
    --white: #fff;
    --black: #222;
    --withSelection: '#b4f231'
  }

`

export default GlobalStyles
