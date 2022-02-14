import styled, { css } from 'styled-components'

export const textWithHighlightGlobalStyle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.texts};

    &:hover {
      color: ${theme.colors.highlight};
    }
  `}
`
