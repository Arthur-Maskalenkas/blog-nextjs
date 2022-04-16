import styled, { css } from 'styled-components'

export const HitWrapper = styled.div`
  ${() => css`
    .ais-Highlight-highlighted {
      background: var(--highlight);
      color: var(--withSelection);
      font-weight: 1000;
      text-transform: uppercase;
    }
  `}
`
