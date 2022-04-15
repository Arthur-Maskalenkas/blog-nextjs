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
  colors: {
    borders: '',
    texts: '',
    postColor: '',
    highlight: '',
    mediumBackground: '',
    background: '',
    white: '',
    black: '',
    withSelection: ''
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
  },
  spacings: {
    sp1: {
      s1: '.2rem',
      s2: '.4rem',
      s3: '.6rem',
      s4: '.8rem',
      s5: '1rem'
    },
    sp2: {
      s1: '1.2rem',
      s2: '1.4rem',
      s3: '1.6rem',
      s4: '1.8rem',
      s5: '2rem'
    },
    sp3: {
      s1: '2.2rem',
      s2: '2.4rem',
      s3: '2.6rem',
      s4: '2.8rem',
      s5: '3rem'
    },
    sp4: {
      s1: '3.2rem',
      s2: '3.4rem',
      s3: '3.6rem',
      s4: '3.8rem',
      s5: '4rem'
    },
    sp5: {
      s1: '4.2rem',
      s2: '4.4rem',
      s3: '4.6rem',
      s4: '4.8rem',
      s5: '5rem'
    },
    sp6: {
      s1: '5.2rem',
      s2: '5.4rem',
      s3: '5.6rem',
      s4: '5.8rem',
      s5: '6rem'
    }
  }
} as const

export const themeColors = {
  light: {
    texts: '#555555',
    highlight: '#F231A5',
    mediumBackground: '#f0f0f3',
    background: '#fff',
    white: '#fff',
    black: '#222',
    withSelection: '#b4f231'
  },
  dark: {
    texts: '#8899a6',
    highlight: '#F231A5',
    mediumBackground: '#0a0c21',
    background: '#030518',
    white: '#fff',
    black: '#222',
    withSelection: '#b4f231'
  }
}
