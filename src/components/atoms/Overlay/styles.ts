import styled, { css } from 'styled-components'

const wrapperModalModifiers = {
  open: () => css`
    pointer-events: auto;
    visibility: visible;

    opacity: 0.7;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  `
}

interface IContentWrapperProps {
  isOpen: boolean
}

export const OverlayWrapper = styled.div<IContentWrapperProps>`
  ${({ isOpen, theme }) => css`
    transition: ${theme.transition.modal} all;

    position: absolute;
    background-color: black;
    z-index: 110;
    inset: 0 0 0 0;

    ${isOpen ? wrapperModalModifiers.open() : wrapperModalModifiers.close()}
  `}
`
