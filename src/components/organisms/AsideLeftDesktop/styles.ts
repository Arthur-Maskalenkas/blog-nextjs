import styled, { css } from 'styled-components'

export const AsideLeftDesktopWrapper = styled.div`
  ${() => css`
    background-color: var(--mediumBackground);
    padding: 3.2rem;

    border-right: 1px solid var(--borders);

    [data-component-profile-container] {
      margin-bottom: 2.4rem;
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
      margin-bottom: 1.6rem;
    }
  `}
`

export const ProfileDescription = styled.p`
  ${() => css`
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 300;

    text-align: center;

    color: var(--texts);

    margin-bottom: 3.2rem;
  `}
`

export const SocialLinksWrapper = styled.ul`
  ${() => css`
    display: flex;

    justify-content: center;

    margin-bottom: 3.2rem;

    & > li:not(:last-child) {
      margin-right: 2rem;
    }
  `}
`
