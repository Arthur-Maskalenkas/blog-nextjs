import styled, { css } from 'styled-components'

interface IContentWrapperProps {
  isOpen: boolean
}

const wrapperModalModifiers = {
  open: () => css`
    [data-content] {
      pointer-events: auto;
      visibility: visible;
    }

    [data-content] {
      opacity: 1;
    }
  `,
  close: () => css`
    [data-content] {
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
  `
}

export const ModalWrapper = styled.div<IContentWrapperProps>`
  ${({ isOpen, theme }) => css`
    [data-content] {
      transition: ${theme.transition.modal} all;
    }

    ${isOpen ? wrapperModalModifiers.open() : wrapperModalModifiers.close()}
  `}
`

export const ContentWrapper = styled.div`
  ${() => css`
    position: absolute;
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 120;

    background-color: white;
  `}
`
