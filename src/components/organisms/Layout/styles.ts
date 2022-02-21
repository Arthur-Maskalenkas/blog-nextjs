import { customMedia } from 'helpers/customMedia'
import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  [data-component-aside-left-desktop],
  [data-component-aside-right-desktop] {
    display: none;
  }

  height: 200vh;

  ${customMedia.greaterThan('desktop')`
     [data-component-aside-right-desktop] {
       display: flex;
     }

     [data-component-aside-left-desktop] {
       display: block;
     }

     [data-component-headermobile],
     [data-component-footermobile] {
       display: none;
     }
  `}
`
