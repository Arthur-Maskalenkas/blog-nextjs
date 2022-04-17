export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  transition: {
    fast: '.2s'
  },
  heightContainerAroundScreens: {
    footerMobile: '6.239rem',
    headerMobile: '6.817rem'
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
