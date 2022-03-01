import { customMedia } from 'helpers/customMedia'
import styled, { css, DefaultTheme } from 'styled-components'

const WrapperModifier = {
  sizeResolved: (theme: DefaultTheme, size: string, sizeMedia?: string) => css`
    width: ${size};
  `,
  sizeInDesktop: (sizeInDesktop: string) => css`
    ${customMedia.greaterThan('desktop')`
      width: ${sizeInDesktop}
    `}
  `,
  colorResolved: (theme: DefaultTheme, color: string) => css`
    color: ${color};
  `,
  colorOnHoverResolved: (color: string) => css`
    &:hover {
      color: ${color};
    }
  `
}

interface IWrapperStyleProps {
  color?: string
  colorOnHover?: string
  size?: string
  sizeInDesktop?: string
}

export const Wrapper = styled.span<IWrapperStyleProps>`
  ${({ theme, color, size, colorOnHover, sizeInDesktop }) => css`
    display: inline-block;

    ${!!color && WrapperModifier.colorResolved(theme, color)}
    ${!!colorOnHover && WrapperModifier.colorOnHoverResolved(colorOnHover)}
    ${!!size && WrapperModifier.sizeResolved(theme, `${size}rem`)}
    ${!!sizeInDesktop && WrapperModifier.sizeInDesktop(`${sizeInDesktop}rem`)}
  `}
`
