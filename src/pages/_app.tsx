// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'

import { MenuMobileProvider } from 'hooks/useMenuMobile'
import theme from 'styles/theme'
import NextNProgress from 'nextjs-progressbar'

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
          <NextNProgress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
            showSpinner={false}
          />
        </MenuMobileProvider>
      </ThemeProvider>
    </>
  )
}

export default App
