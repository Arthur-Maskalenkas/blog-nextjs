import styled from 'styled-components'
import { textWithHighlightGlobalStyle } from 'styles/globa'

export const MenuLinkGroupWrapper = styled.ul``

export const MenuLink = styled(textWithHighlightGlobalStyle).attrs({
  as: 'a'
})`
  font-size: 2.88rem;
  line-height: 2.88rem;
  font-weight: 300;
`
