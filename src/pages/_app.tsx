import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'

import { MenuMobileProvider } from 'context/useMenuMobile'
import theme, { themeColors } from 'styles/theme'
import { useState } from 'react'
import { ChangeThemeProvider } from 'context/useChangeTheme'

function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const colorsInThemeResolved = {
    ...theme,
    colors: isDarkTheme ? themeColors.dark : themeColors.light
  }

  console.log(colorsInThemeResolved)

  return (
    <>
      <ChangeThemeProvider
        currentThemeIsDark={isDarkTheme}
        toggleTheme={setIsDarkTheme}
      >
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
          </MenuMobileProvider>
        </ThemeProvider>
      </ChangeThemeProvider>
    </>
  )
}

export default App
