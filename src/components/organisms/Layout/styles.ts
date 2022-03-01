import { customMedia } from 'helpers/customMedia'
import styled, { css, DefaultTheme } from 'styled-components'

const LayoutModifier = {
  resolvePositionInMobileScreen: (theme: DefaultTheme, isOpen: boolean) => css`
    ${!isOpen &&
    css`
      padding-top: ${theme.heightContainerAroundScreens.headerMobile};
      padding-bottom: ${theme.heightContainerAroundScreens.footerMobile};
    `}

    [data-component-footerMobile] {
      position: fixed;
      bottom: 0;
      width: 100vw;
    }

    [data-component-headerMobile] {
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
    [data-component-headermobile],
    [data-component-footermobile] {
      display: none;
    }
  `
}

interface ILayoutWrapperStyleProps {
  isOpen: boolean
}

export const LayoutWrapper = styled.div<ILayoutWrapperStyleProps>`
  ${({ theme, isOpen }) => css`
    ${LayoutModifier.resolvePositionInMobileScreen(theme, isOpen)}
    ${LayoutModifier.excludeAllELementsDesktopInMobileScreen()}

  ${customMedia.greaterThan('desktop')`
    ${LayoutModifier.resolvePositionInDesktopScreen()}
    ${LayoutModifier.excludeAllELementsMobileInDesktopScreen()}
`}
  `}
`
