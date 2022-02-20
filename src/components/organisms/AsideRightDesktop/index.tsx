import * as S from './styles'
import React from 'react'
import { Button } from 'components/atoms/Button/styles'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'

const AsideRightDesktop = () => (
  <S.AsideRightDesktopWrapper data-component-aside-right-desktop>
    <S.FirstColumn>
      <li>
        <Button aria-label="Ir para a home">
          <Icons
            icon="home"
            iconStyles={{
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight,
              size: '2.5'
            }}
          />
        </Button>
      </li>

      <li>
        <Button aria-label="Pesquisar no blog">
          <Icons
            icon="search"
            iconStyles={{
              size: '2.5',
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight
            }}
          />
        </Button>
      </li>

      <li>
        <Button aria-label="Ir para o meu Linkedin">
          <Icons
            icon="linkedin"
            iconStyles={{
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight,
              size: '2.5'
            }}
          />
        </Button>
      </li>

      <li>
        <Button aria-label="Ir para o meu Github">
          <Icons
            icon="github"
            iconStyles={{
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight,
              size: '2.5'
            }}
          />
        </Button>
      </li>
    </S.FirstColumn>

    <S.SecondColumn>
      <li>
        <Button aria-label="Mudar o tema">
          <Icons
            icon="changeTheme"
            iconStyles={{
              size: '2.5',
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight
            }}
          />
        </Button>
      </li>

      <li>
        <Button aria-label="ir para o topo">
          <Icons
            icon="goToTopPage"
            iconStyles={{
              size: '2.5',
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight
            }}
          />
        </Button>
      </li>
    </S.SecondColumn>
  </S.AsideRightDesktopWrapper>
)

export default AsideRightDesktop
