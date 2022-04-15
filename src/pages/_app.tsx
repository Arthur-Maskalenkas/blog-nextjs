// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'

import { MenuMobileProvider } from 'hooks/useMenuMobile'
import theme, { themeColors } from 'styles/theme'
import { useEffect, useState } from 'react'
import { ChangeThemeProvider } from 'hooks/useChangeTheme'
import { getStorageItem } from 'helpers/localStorage'
import NextNProgress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const colorsInThemeResolved = {
    ...theme,
    colors: isDarkTheme ? themeColors.dark : themeColors.light
  }

  useEffect(() => {
    setIsDarkTheme(getStorageItem('theme')[0] == 'dark')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStorageItem('theme')])

  return (
    <>
      <ChangeThemeProvider
        currentThemeIsDark={isDarkTheme}
        toggleTheme={setIsDarkTheme}
      >
        {/* @ts-nocehck */}
        <ThemeProvider theme={colorsInThemeResolved}>
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
      </ChangeThemeProvider>
    </>
  )
}

export default App
