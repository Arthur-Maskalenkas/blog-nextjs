import styled, { css } from 'styled-components'

export const HeaderMobileWrapper = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.sp2.s3};

    background-color: ${theme.colors.mediumBackground};

    border-bottom: 1px solid ${theme.colors.borders};

    height: ${theme.heightContainerAroundScreens.headerMobile};
  `}
`
