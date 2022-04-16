import { customMedia } from 'helpers/customMedia'
import styled, { css, DefaultTheme } from 'styled-components'

const WrapperModifier = {
  sizeResolved: (theme: DefaultTheme, size: string) => css`
    width: ${size};
  `,
  sizeInDesktop: (sizeInDesktop: string) => css`
    ${customMedia.greaterThan('desktop')`
      width: ${sizeInDesktop}
    `}
  `,
  defaultStyleResolved: () => css`
    color: var(--texts);

    &:hover {
      color: var(--highlight);
    }
  `
}

interface IWrapperStyleProps {
  size?: string
  sizeInDesktop?: string
  defaultStyle?: boolean
}

export const Wrapper = styled.span<IWrapperStyleProps>`
  ${({ theme, size, sizeInDesktop, defaultStyle }) => css`
    display: inline-block;

    transition: unset;

    ${!!size && WrapperModifier.sizeResolved(theme, `${size}rem`)}
    ${!!sizeInDesktop && WrapperModifier.sizeInDesktop(`${sizeInDesktop}rem`)}
    ${!!defaultStyle && WrapperModifier.defaultStyleResolved(theme)}
  `}
`
