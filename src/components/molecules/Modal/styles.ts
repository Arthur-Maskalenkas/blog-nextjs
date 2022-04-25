import styled, { css } from 'styled-components'

interface IContentWrapperProps {
  isOpen: boolean
}

const wrapperModalModifiers = {
  open: () => css`
    [data-content],
    [data-overlay] {
      pointer-events: auto;
      visibility: visible;
    }

    [data-overlay] {
      opacity: 0.7;
    }

    [data-content] {
      opacity: 1;
    }
  `,
  close: () => css`
    [data-content],
    [data-overlay] {
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
  `
}

export const ModalWrapper = styled.div<IContentWrapperProps>`
  ${({ isOpen }) => css`
    [data-content],
    [data-overlay] {
      transition: 1s all;
    }

    ${isOpen ? wrapperModalModifiers.open() : wrapperModalModifiers.close()}
  `}
`

export const ContentWrapper = styled.div`
  ${() => css`
    position: absolute;

    width: 80%;

    left: 50%;
    top: 50%;

    transform: translate3d(-50%, -50%, 0);

    z-index: 120;
  `}
`

export const Overlay = styled.div`
  position: absolute;
  background-color: black;
  z-index: 110;
  inset: 0 0 0 0;
`
