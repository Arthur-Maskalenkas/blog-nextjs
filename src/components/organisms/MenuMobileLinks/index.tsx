import * as S from './styles'
import React from 'react'
import { useMenuMobile } from 'hooks/useMenuMobile'
import MenuLinkGroup from 'components/molecules/MenuLinkGroup'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'
import ButtonGithub from 'components/molecules/ButtonGithub'
import ButtonLinkedin from 'components/molecules/ButtonLinkedin'

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
