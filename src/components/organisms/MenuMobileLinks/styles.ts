import styled, { css } from 'styled-components'

const MenuMobileLinksWrapperModifier = {
  close: () => css`
    pointer-events: none;
    display: none;
  `,
  open: () => css`
    pointer-events: all;
    display: flex;
  `
}

interface IMenuMobileLinksWrapperStyleProps {
  isOpen: boolean
}

export const MenuMobileLinksWrapper = styled.div<IMenuMobileLinksWrapperStyleProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;

    padding-top: ${theme.heightContainerAroundScreens.headerMobile};
    padding-bottom: ${theme.heightContainerAroundScreens.footerMobile};

    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    [data-component-menu-link-group] {
      flex-direction: column;
      align-items: center;

      justify-content: center;

      flex: 1;
    }

    [data-component-menu-link-group] > a:not(:last-child) {
      margin-bottom: 3.2rem;
    }

    ${isOpen
      ? MenuMobileLinksWrapperModifier.open()
      : MenuMobileLinksWrapperModifier.close()}
  `}
`

export const IconsGroup = styled.div`
  display: flex;
  justify-content: center;

  [data-component-icons]:not(:last-child) {
    margin-right: 2rem;
  }
`
