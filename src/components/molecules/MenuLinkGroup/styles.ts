import styled from 'styled-components'
import { textWithHighlightGlobalStyle } from 'styles/globa'

import { customMedia } from 'helpers/dataNameResolver/customMedia'

export const MenuLinkGroupWrapper = styled.nav`
  display: flex;
`

export const MenuLink = styled(textWithHighlightGlobalStyle).attrs({
  as: 'a'
})`
  font-size: 2.88rem;
  line-height: 2.88rem;
  font-weight: 300;

  ${customMedia.greaterThan('desktop')`
    font-size: 1.92rem;
    line-height: 1.92rem;
  `}
`
