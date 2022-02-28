import * as S from './styles'
import React from 'react'
import { useMenuMobile } from 'context/useMenuMobile'

const MenuMobileLinks = () => {
  const { isOpen } = useMenuMobile()

  return (
    <S.MenuMobileLinksWrapper data-component-menu-mobile>
      {isOpen ? 'aberto' : 'fechado'}
    </S.MenuMobileLinksWrapper>
  )
}

export default MenuMobileLinks
