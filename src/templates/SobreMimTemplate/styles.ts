import { SocialLinksWrapper } from 'components/organisms/AsideLeftDesktop/styles'
import { customMedia } from 'helpers/customMedia'
import styled, { css } from 'styled-components'
import { ContainerPageBlogGlobalStyle } from 'styles/globa'

export const SobreMimTemplateWrapper = styled(ContainerPageBlogGlobalStyle)`
  ${customMedia.greaterThan('desktop')`
    padding-top: 10.5rem;
  `}
`

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
