import styled, { css } from 'styled-components'

export const HitWrapper = styled.div`
  ${({ theme }) => css`
    .ais-Highlight-highlighted {
      background: ${theme.colors.highlight};
      color: ${theme.colors.withSelection};
      font-weight: 1000;
      text-transform: uppercase;
    }
  `}
`
