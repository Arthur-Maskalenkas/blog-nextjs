import styled, { css, DefaultTheme } from 'styled-components'

import { customMedia } from 'helpers/customMedia'

const LayoutModifier = {
  resolvePositionInMobileScreen: (theme: DefaultTheme) => css`
    padding-top: ${theme.heightContainerAroundScreens.headerMobile};
    padding-bottom: ${theme.heightContainerAroundScreens.footerMobile};

    [data-component-footer-mobile] {
      position: fixed;
      bottom: 0;
      width: 100vw;
    }

    [data-component-header-mobile] {
      position: fixed;
      top: 0;
      width: 100vw;
    }
  `,

  excludeAllELementsDesktopInMobileScreen: () => css`
    [data-component-aside-left-desktop],
    [data-component-aside-right-desktop] {
      display: none;
    }
  `,

  resolvePositionInDesktopScreen: () => css`
    padding-top: 0;

    padding-left: 32rem;
    padding-right: 6.3rem;

    [data-component-aside-right-desktop] {
      display: flex;

      width: 6.4rem;

      position: fixed;
      top: 0;
      right: 0;
    }

    [data-component-aside-left-desktop] {
      display: block;

      width: 32rem;

      position: fixed;
      left: 0;

      height: 100vh;
    }
  `,

  excludeAllELementsMobileInDesktopScreen: () => css`
    [data-component-header-mobile],
    [data-component-footer-mobile] {
      display: none;
    }
  `
}

export const LayoutWrapper = styled.div`
  ${({ theme }) => css`
    ${LayoutModifier.resolvePositionInMobileScreen(theme)}
    ${LayoutModifier.excludeAllELementsDesktopInMobileScreen()}

  ${customMedia.greaterThan('desktop')`
    ${LayoutModifier.resolvePositionInDesktopScreen()}
    ${LayoutModifier.excludeAllELementsMobileInDesktopScreen()}
`}
  `}
`
