import * as S from './styles'
import React from 'react'
import { linkListSideBar } from './utils'
import Link from 'next/link'

const MenuLinkGroup = () => (
  <S.MenuLinkGroupWrapper data-component-menu-link-group>
    {linkListSideBar.map((item, index) => (
      <li key={index}>
        <Link href={item.href} passHref>
          <S.MenuLink>{item.textLink}</S.MenuLink>
        </Link>
      </li>
    ))}
  </S.MenuLinkGroupWrapper>
)

export default MenuLinkGroup
