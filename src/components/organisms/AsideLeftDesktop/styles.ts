import styled, { css } from 'styled-components'

export const AsideLeftDesktopWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mediumBackground};
    padding: ${theme.spacings.sp4.s1};

    width: 32rem;

    position: fixed;
    left: 0;

    height: 100vh;

    border-right: 1px solid ${theme.colors.borders};

    [data-component-profile-container] {
      margin-bottom: ${theme.spacings.sp3.s2};
    }

    [data-component-icon-group] {
      justify-content: center;

      & a:not(:last-child) {
        margin-right: 2rem;
      }
    }

    [data-component-menu-link-group] {
      flex-direction: column;
      align-items: center;
    }

    [data-component-menu-link-group] a:not(:last-child) {
      margin-bottom: ${theme.spacings.sp2.s3};
    }
  `}
`

export const ProfileDescription = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 300;

    text-align: center;

    color: ${theme.colors.texts};

    margin-bottom: ${theme.spacings.sp4.s1};
  `}
`

export const SocialLinksWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;

    justify-content: center;

    margin-bottom: ${theme.spacings.sp4.s1};

    & > li:not(:last-child) {
      margin-right: 2rem;
    }
  `}
`
