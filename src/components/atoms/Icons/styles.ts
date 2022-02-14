import styled, { css, DefaultTheme } from 'styled-components'

const WrapperModifier = {
  sizeResolved: (theme: DefaultTheme, size: string) => css`
    width: ${size};
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
}

export const Wrapper = styled.span<IWrapperStyleProps>`
  ${({ theme, color, size, colorOnHover }) => css`
    display: inline-block;

    ${!!color && WrapperModifier.colorResolved(theme, color)}
    ${!!colorOnHover && WrapperModifier.colorOnHoverResolved(colorOnHover)}
    ${!!size && WrapperModifier.sizeResolved(theme, `${size}rem`)}
  `}
`
