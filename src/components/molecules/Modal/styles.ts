import styled, { css, DefaultTheme } from 'styled-components'

interface IContentWrapperProps {
  isOpen: boolean
  componentIsClosing: boolean
}

const wrapperModalModifiers = {
  open: (theme: DefaultTheme) => css`
    [data-content],
    [data-button-close-modal] {
      pointer-events: auto;
      animation: fadeIn ${theme.transition.modal} both;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,
  close: (theme: DefaultTheme) => css`
    [data-content],
    [data-button-close-modal] {
      pointer-events: none;
      animation: fadeOut ${theme.transition.modal} both;
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `
}

const transformInPercentage = (v: number) => `${v}%`

const HEIGHT_CONTENT = 80
const WIDTH_CONTENT = 80

const heightContent = transformInPercentage(HEIGHT_CONTENT)
const widthContent = transformInPercentage(WIDTH_CONTENT)

export const ModalWrapper = styled.div<IContentWrapperProps>`
  ${({ isOpen, theme, componentIsClosing }) => css`
    [data-button-close-modal] {
      right: 2rem;
      top: 2rem;

      z-index: 121;
      position: absolute;

      color: ${theme.colors.texts.normal};

      font-size: 4rem;
    }

    ${isOpen && wrapperModalModifiers.open(theme)}
    ${componentIsClosing && wrapperModalModifiers.close(theme)}
  `}
`

export const ContentWrapper = styled.div`
  ${() => css`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: ${widthContent};
    height: ${heightContent};
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 120;

    background-color: white;
  `}
`
