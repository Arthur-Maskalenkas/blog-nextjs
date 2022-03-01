import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'

const ButtonSearch = () => (
  <S.ButtonSearchWrapper
    data-component-button-search
    aria-label="Pesquisar postagem no blog"
  >
    <Icons
      icon="search"
      iconStyles={{
        size: '2.24',
        color: theme.colors.texts,
        colorOnHover: theme.colors.highlight,
        sizeInDesktop: '2.5'
      }}
    />
  </S.ButtonSearchWrapper>
)

export default ButtonSearch
