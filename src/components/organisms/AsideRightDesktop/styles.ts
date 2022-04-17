import styled, { css } from 'styled-components'

export const AsideRightDesktopWrapper = styled.aside`
  ${({ theme }) => css`
    background-color: var(--mediumBackground);
    border-left: 1px solid var(--borders);

    height: 100vh;

    padding: 1.4rem 1.8rem;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
  `}
`

export const FirstColumn = styled.ul`
  padding-bottom: 3.52rem;

  & > li:not(:last-child) {
    margin-bottom: 3.52rem;
  }
`

export const SecondColumn = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: 3.52rem;
  }
`
