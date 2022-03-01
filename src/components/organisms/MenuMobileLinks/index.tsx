import * as S from './styles'
import React from 'react'
import { useMenuMobile } from 'hooks/useMenuMobile'
import MenuLinkGroup from 'components/molecules/MenuLinkGroup'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'

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
        <Icons
          icon="github"
          href="google.com.br"
          iconStyles={{
            color: theme.colors.texts,
            size: '3',
            colorOnHover: theme.colors.highlight
          }}
        />
        <Icons
          icon="linkedin"
          href="google.com.br"
          iconStyles={{
            color: theme.colors.texts,
            size: '3',
            colorOnHover: theme.colors.highlight
          }}
        />
      </S.IconsGroup>
    </S.MenuMobileLinksWrapper>
  )
}

export default MenuMobileLinks
