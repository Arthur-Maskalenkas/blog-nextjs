import { SocialLinksWrapper } from 'components/organisms/AsideLeftDesktop/styles'
import styled from 'styled-components'

export const SocialLinksWrappers = styled(SocialLinksWrapper)`
  justify-content: flex-start;

  list-style: none;

  padding-left: unset !important;
  li {
    padding-left: unset;
  }

  li:before {
    display: none;
  }
`
