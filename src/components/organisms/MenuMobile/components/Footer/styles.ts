import styled, { css } from 'styled-components'

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.sp2.s2};

    border-top: 1px solid ${theme.colors.borders};
  `}
`

export const ListIcons = styled.ul`
  ${({ theme }) => css`
    display: grid;

    grid-template-columns: repeat(5, 1fr);

    justify-items: center;
    align-items: center;

    & > li {
      display: flex;
      width: 100%;
      justify-content: center;
    }

    & > li > button {
      width: 100%;
    }

    & > li > button:hover {
      & [data-component-icons] {
        color: ${theme.colors.highlight};
      }
    }
  `}
`
