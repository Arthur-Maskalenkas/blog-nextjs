import styled, { css, DefaultTheme } from 'styled-components'

const WrapperModifier = {
  sizeResolved: (theme: DefaultTheme, size: string) => css`
    width: ${size};
  `,
  colorResolved: (theme: DefaultTheme, color: string) => css`
    color: ${color};
  `
}

interface IWrapperStyleProps {
  color?: string
  size?: string
}

export const Wrapper = styled.span<IWrapperStyleProps>`
  ${({ theme, color, size }) => css`
    display: inline-block;

    ${!!color && WrapperModifier.colorResolved(theme, color)}
    ${!!size && WrapperModifier.sizeResolved(theme, `${size}rem`)}
  `}
`
