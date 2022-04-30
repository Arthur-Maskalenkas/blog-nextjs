export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  transition: {
    fast: '.2s',
    modal: '.5s'
  },
  heightContainerAroundScreens: {
    footerMobile: '6.239rem',
    headerMobile: '6.817rem'
  },
  colors: {
    borders: '#38444d',
    texts: {
      normal: '#8899a6',
      bold: '#637583'
    },
    postColor: '#fff',
    highlight: '#F231A5',
    mediumBackground: '#0a0c21',
    background: '#030518',
    white: '#fff',
    black: '#222',
    withSelection: '#b4f231'
  },
  layers: {
    base: 10,
    menuMobile: 20,
    headerMobile: 21,
    footerMobile: 21,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
