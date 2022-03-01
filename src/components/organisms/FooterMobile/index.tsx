import * as S from './styles'
import React from 'react'

import Icons from 'components/atoms/Icons'

import { Button } from 'components/atoms/Button/styles'
import theme from 'styles/theme'
import { useMenuMobile } from 'context/useMenuMobile'
import { useChangeTheme } from 'context/useChangeTheme'

const FooterMobile = () => {
  const { changeMenuVisibility } = useMenuMobile()
  const { toggleTheme } = useChangeTheme()

  return (
    <S.FooterMobileWrapper data-component-footer-mobile>
      <S.ListIcons>
        <li>
          <Button aria-label="Ir para a home">
            <Icons
              icon="home"
              iconStyles={{
                size: '2.24',
                color: theme.colors.texts,
                colorOnHover: theme.colors.highlight
              }}
            />
          </Button>
        </li>

        <li>
          <Button aria-label="Pesquisar no blog">
            <Icons
              icon="search"
              iconStyles={{
                size: '2.24',
                color: theme.colors.texts,
                colorOnHover: theme.colors.highlight
              }}
            />
          </Button>
        </li>
        <li>
          <Button
            aria-label="Abrir o menu"
            onClick={() => changeMenuVisibility()}
          >
            <Icons
              icon="menu"
              iconStyles={{
                size: '2.24',
                color: theme.colors.texts,
                colorOnHover: theme.colors.highlight
              }}
            />
          </Button>
        </li>
        <li>
          <Button aria-label="Mudar o tema" onClick={() => toggleTheme()}>
            <Icons
              icon="changeTheme"
              iconStyles={{
                size: '2.24',
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
                size: '3.34',
                color: theme.colors.texts,
                colorOnHover: theme.colors.highlight
              }}
            />
          </Button>
        </li>
      </S.ListIcons>
    </S.FooterMobileWrapper>
  )
}

export default FooterMobile
