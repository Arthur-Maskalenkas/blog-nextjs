import * as S from './styles'
import React from 'react'
import AsideLeftDesktop from '../AsideLeftDesktop'
import AsideRightDesktop from '../AsideRightDesktop'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'
import { ILayoutProps } from './Layout'
import MenuMobileLinks from '../MenuMobileLinks'
import { useMenuMobile } from 'context/useMenuMobile'

const Layout = ({ children }: ILayoutProps) => {
  const { isOpen } = useMenuMobile()

  return (
    <S.LayoutWrapper isOpen={isOpen} data-component-layout>
      <AsideLeftDesktop />
      <HeaderMobile />
      <MenuMobileLinks />
      {children}
      <FooterMobile />
      <AsideRightDesktop />
    </S.LayoutWrapper>
  )
}
export default Layout
