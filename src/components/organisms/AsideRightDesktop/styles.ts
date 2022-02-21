import styled, { css } from 'styled-components'

export const AsideRightDesktopWrapper = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.mediumBackground};
    border-left: 1px solid ${theme.colors.borders};

    height: 100vh;

    padding: ${theme.spacings.sp2.s2} ${theme.spacings.sp2.s4};

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
  `}
`

export const FirstColumn = styled.ul`
  ${({ theme }) => css`
    padding-bottom: 3.52rem;

    & > li:not(:last-child) {
      margin-bottom: 3.52rem;
    }
  `}
`

export const SecondColumn = styled.ul`
  ${({ theme }) => css`
    & > li:not(:last-child) {
      margin-bottom: 3.52rem;
    }
  `}
`
