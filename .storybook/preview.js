import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
  MobileMin: {
    name: 'Mobile min',
    styles: {
      width: '280px',
      height: '653px'
    }
  }
}

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
