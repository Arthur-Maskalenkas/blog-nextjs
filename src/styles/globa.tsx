import styled, { css } from 'styled-components'

export const textWithHighlightGlobalStyle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.highlight};
    }
  `}
`
