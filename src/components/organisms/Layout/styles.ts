import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'

const LayoutModifier = {
  resolvePositionInMobileScreen: () => css`
    padding-top: 6.817rem;

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

export const LayoutWrapper = styled.div`
  ${LayoutModifier.resolvePositionInMobileScreen()}
  ${LayoutModifier.excludeAllELementsDesktopInMobileScreen()}

  height: 200vh;

  ${customMedia.greaterThan('desktop')`
    ${LayoutModifier.resolvePositionInDesktopScreen()}
    ${LayoutModifier.excludeAllELementsMobileInDesktopScreen()}
  `}
`
