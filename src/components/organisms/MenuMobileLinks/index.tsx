import * as S from './styles'
import React from 'react'
import { useMenuMobile } from 'hooks/useMenuMobile'
import MenuLinkGroup from 'components/molecules/MenuLinkGroup'
import ButtonGithub from 'components/ButtonsMenu/ButtonGithub'
import ButtonLinkedin from 'components/ButtonsMenu/ButtonLinkedin'

const MenuMobileLinks = () => {
  const { isOpen } = useMenuMobile()

  return (
    <S.MenuMobileLinksWrapper
      data-component-menu-mobile
      aria-hidden={!isOpen}
      isOpen={isOpen}
    >
      <MenuLinkGroup />
      <S.IconsGroup>
        <ButtonGithub />
        <ButtonLinkedin />
      </S.IconsGroup>
    </S.MenuMobileLinksWrapper>
  )
}

export default MenuMobileLinks
