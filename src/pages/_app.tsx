import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'

import { MenuMobileProvider } from 'context/useMenuMobile'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuMobileProvider>
          <Head>
            <title>Arthur Maskalenkas</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </MenuMobileProvider>
      </ThemeProvider>
    </>
  )
}

export default App
