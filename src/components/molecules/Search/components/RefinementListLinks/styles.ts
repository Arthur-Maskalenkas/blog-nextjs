import styled, { css } from 'styled-components'

export const RefinementListLinks = styled.div`
  ${() => css`
    display: flex;
    align-items: center;

    [data-component-modal] [data-content] {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--background);
      border: 1px solid var(--borders);
    }
  `}
`
