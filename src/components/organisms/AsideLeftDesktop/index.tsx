import * as S from './styles'
import React from 'react'
import ProfileContainer from 'components/molecules/ProfileContainer'
import MenuLinkGroup from 'components/molecules/MenuLinkGroup'

import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'
import { Button } from 'components/atoms/Button/styles'

const AsideLeftDesktop = () => (
  <S.AsideLeftDesktopWrapper data-component-aside-left-desktop>
    <ProfileContainer />

    <S.ProfileDescription>
      Você vai encontrar alguns tutoriais e um autor extremamente apaixonado por
      tudo que envolve JS nesse blog.
    </S.ProfileDescription>

    <S.SocialLinksWrapper>
      <li>
        <Button aria-label="Ir para o meu Github">
          <Icons
            icon={<Github />}
            iconStyles={{
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight,
              size: '3'
            }}
          />
        </Button>
      </li>

      <li>
        <Button aria-label="Ir para o meu Linkedin">
          <Icons
            icon={<Linkedin />}
            iconStyles={{
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight,
              size: '3'
            }}
          />
        </Button>
      </li>
    </S.SocialLinksWrapper>

    <MenuLinkGroup />
  </S.AsideLeftDesktopWrapper>
)

export default AsideLeftDesktop
