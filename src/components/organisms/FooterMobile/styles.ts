import styled, { css } from 'styled-components'

export const FooterMobileWrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.sp2.s2};

    z-index: ${theme.layers.footerMobile};

    background-color: var(--mediumBackground);

    border-top: 1px solid var(--borders);

    height: ${theme.heightContainerAroundScreens.footerMobile};
  `}
`

export const ListIcons = styled.ul`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

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
      color: var(--highlight);
    }
  }
`
