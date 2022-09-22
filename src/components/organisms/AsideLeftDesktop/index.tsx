import React from 'react'

import * as S from './styles'

import ProfileContainer from 'components/molecules/ProfileContainer'
import MenuLinkGroup from 'components/molecules/MenuLinkGroup'
import ButtonGithub from 'components/ButtonsMenu/ButtonGithub'
import ButtonLinkedin from 'components/ButtonsMenu/ButtonLinkedin'

const AsideLeftDesktop = () => (
  <S.AsideLeftDesktopWrapper data-component-aside-left-desktop>
    <ProfileContainer />

    <S.ProfileDescription>
      Você vai encontrar alguns tutoriais e um autor extremamente apaixonado por
      tudo que envolve JS nesse blog.
    </S.ProfileDescription>

    <S.SocialLinksWrapper>
      <li>
        <ButtonGithub />
      </li>

      <li>
        <ButtonLinkedin />
      </li>
    </S.SocialLinksWrapper>

    <MenuLinkGroup />
  </S.AsideLeftDesktopWrapper>
)

export default AsideLeftDesktop
