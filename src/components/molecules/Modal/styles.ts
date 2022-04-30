import styled, { css } from 'styled-components'

interface IContentWrapperProps {
  isOpen: boolean
}

const wrapperModalModifiers = {
  open: () => css`
    [data-content],
    [data-button-close-modal] {
      pointer-events: auto;
      visibility: visible;
    }

    [data-content] {
      opacity: 1;
    }
  `,
  close: () => css`
    [data-content],
    [data-button-close-modal] {
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
  `
}

const transformInPercentage = (v: number) => `${v}%`

const HEIGHT_CONTENT = 80
const WIDTH_CONTENT = 80

// lados = cima baixo | esquerda direita
const NUMBER_SIDES = 2

const TOTAL_WIDTH = 100
const TOTAL_HEIGHT = 100

const REST_HEIGHT_IN_TOP = (TOTAL_HEIGHT - HEIGHT_CONTENT) / NUMBER_SIDES
const REST_WIDTH_IN_RIGHT = (TOTAL_WIDTH - WIDTH_CONTENT) / NUMBER_SIDES

const heightContent = transformInPercentage(HEIGHT_CONTENT)
const widthContent = transformInPercentage(WIDTH_CONTENT)

const positionTopInContent = transformInPercentage(REST_HEIGHT_IN_TOP)
const positionRightInContent = transformInPercentage(REST_WIDTH_IN_RIGHT)

export const ModalWrapper = styled.div<IContentWrapperProps>`
  ${({ isOpen, theme }) => css`
    [data-content],
    [data-button-close-modal] {
      transition: ${theme.transition.modal} all;
    }

    [data-button-close-modal] {
      right: calc(${positionRightInContent} + 20px);
      top: calc(${positionTopInContent} + 20px);

      z-index: 121;
      position: absolute;

      color: ${theme.colors.texts.normal};

      font-size: 4rem;
    }

    ${isOpen ? wrapperModalModifiers.open() : wrapperModalModifiers.close()}
  `}
`

export const ContentWrapper = styled.div`
  ${() => css`
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
