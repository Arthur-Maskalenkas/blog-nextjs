import * as S from './styles'
import React from 'react'
import AsideLeftDesktop from '../AsideLeftDesktop'
import AsideRightDesktop from '../AsideRightDesktop'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'
import { ILayoutProps } from './Layout'
import MenuMobileLinks from '../MenuMobileLinks'

const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.LayoutWrapper data-component-layout>
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
