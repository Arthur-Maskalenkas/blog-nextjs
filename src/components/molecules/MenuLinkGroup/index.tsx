import * as S from './styles'
import React from 'react'
import { linkListSideBar } from './utils'
import Link from 'next/link'
import { useMenuMobile } from 'hooks/useMenuMobile'

const MenuLinkGroup = () => {
  const { changeMenuVisibility } = useMenuMobile()

  return (
    <S.MenuLinkGroupWrapper data-component-menu-link-group>
      {linkListSideBar.map((item, index) => (
        <Link key={index} href={item.href} passHref>
          <S.MenuLink onClick={() => changeMenuVisibility(false)}>
            {item.textLink}
          </S.MenuLink>
        </Link>
      ))}
    </S.MenuLinkGroupWrapper>
  )
}
export default MenuLinkGroup
