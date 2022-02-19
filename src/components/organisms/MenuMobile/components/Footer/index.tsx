import * as S from './styles'
import React from 'react'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { Search } from '@styled-icons/boxicons-regular/Search'
import { Menu } from '@styled-icons/heroicons-outline/Menu'
import { LightBulb } from '@styled-icons/entypo/LightBulb'

import Icons from 'components/atoms/Icons'

import { Button } from 'components/atoms/Button/styles'
import theme from 'styles/theme'
import { ArrowUpShort } from 'styled-icons/bootstrap'

const Footer = () => (
  <S.FooterWrapper data-component-footer>
    <S.ListIcons>
      <li>
        <Button aria-label="Ir para a home">
          <Icons
            icon={<Home />}
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
            icon={<Search />}
            iconStyles={{
              size: '2.24',
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight
            }}
          />
        </Button>
      </li>
      <li>
        <Button aria-label="Abrir o menu">
          <Icons
            icon={<Menu />}
            iconStyles={{
              size: '2.24',
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight
            }}
          />
        </Button>
      </li>
      <li>
        <Button aria-label="Mudar o tema">
          <Icons
            icon={<LightBulb />}
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
            icon={<ArrowUpShort />}
            iconStyles={{
              size: '3.34',
              color: theme.colors.texts,
              colorOnHover: theme.colors.highlight
            }}
          />
        </Button>
      </li>
    </S.ListIcons>
  </S.FooterWrapper>
)

export default Footer
