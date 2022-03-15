import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'

const MenuMobileLinksWrapperModifier = {
  close: () => css`
    pointer-events: none;

    opacity: 0;

    /*
    * Adiicionando opacidade para o efeito não aparecer em todas as paginas que forem abertas
    * */
    transition: opacity 1.5s;

    animation-name: slideOutLeft;
    animation-duration: 0.3s;
    animation-fill-mode: both;

    @keyframes slideOutLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        visibility: hidden;
        transform: translateX(-100%);
      }
    }
  `,
  open: () => css`
    opacity: 1;

    animation-name: slideInLeft;
    animation-duration: 0.3s;
    animation-fill-mode: both;

    @keyframes slideInLeft {
      0% {
        transform: translateX(-100%);
        visibility: visible;
      }
      100% {
        transform: translateX(0);
      }
    }
  `
}

interface IMenuMobileLinksWrapperStyleProps {
  isOpen: boolean
}

export const MenuMobileLinksWrapper = styled.div<IMenuMobileLinksWrapperStyleProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;

    display: flex;

    z-index: ${theme.layers.menuMobile};

    background-color: ${theme.colors.background};

    /*
    * height footer mobike + height header mobile
    * */
    height: calc(100vh - 13.056rem);
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

  ${customMedia.greaterThan('desktop')`
      display: none;
    `}
`

export const IconsGroup = styled.div`
  display: flex;
  justify-content: space-around;

  padding-bottom: 1.6rem;
`
