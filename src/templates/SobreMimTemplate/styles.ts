import {SocialLinksWrapper} from 'components/organisms/AsideLeftDesktop/styles'
import {customMedia} from 'helpers/customMedia'
import styled from 'styled-components'
import {ContainerPageBlogGlobalStyle} from 'styles/globa'

export const SobreMimTemplateWrapper = styled(ContainerPageBlogGlobalStyle)`
  ${customMedia.greaterThan('desktop')`
    padding-top: 10.5rem;
  `}
`

export const SocialLinksWrappers = styled(SocialLinksWrapper)`
  justify-content: flex-start;
  
  

  list-style: none;

  padding-left: unset !important;

  list-style: none !important;
  
  a {
    border: none;
  }

  li {
    padding-left: unset;
  }
`
