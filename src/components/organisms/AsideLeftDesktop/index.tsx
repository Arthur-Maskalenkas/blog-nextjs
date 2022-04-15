import * as S from './styles'
import React from 'react'
import ProfileContainer from 'components/molecules/ProfileContainer'
import MenuLinkGroup from 'components/molecules/MenuLinkGroup'

import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'
import { Button } from 'components/atoms/Button/styles'
import ButtonGithub from 'components/molecules/ButtonGithub'
import ButtonLinkedin from 'components/molecules/ButtonLinkedin'

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
