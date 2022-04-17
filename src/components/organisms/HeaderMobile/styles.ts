import styled, { css } from 'styled-components'

export const HeaderMobileWrapper = styled.header`
  ${({ theme }) => css`
    padding: 1.6rem;

    background-color: var(--mediumBackground);

    border-bottom: 1px solid var(--borders);

    height: ${theme.heightContainerAroundScreens.headerMobile};

    z-index: ${theme.layers.headerMobile};
  `}
`
