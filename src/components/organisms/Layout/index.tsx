import * as S from './styles'
import React from 'react'
import AsideLeftDesktop from '../AsideLeftDesktop'
import AsideRightDesktop from '../AsideRightDesktop'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'
import { ILayoutProps } from './Layout'

const Layout = ({ children }: ILayoutProps) => (
  <S.LayoutWrapper data-component-layout>
    <AsideLeftDesktop />
    <HeaderMobile />
    {children}
    <FooterMobile />
    <AsideRightDesktop />
  </S.LayoutWrapper>
)

export default Layout
