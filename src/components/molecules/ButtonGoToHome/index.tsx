import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'

const ButtonGoToHome = () => (
  <S.ButtonGoToHomeWrapper
    data-component-button-go-to-home
    aria-label="Vá para a home"
  >
    <Icons
      icon="home"
      iconStyles={{
        size: '2.24',
        color: theme.colors.texts,
        colorOnHover: theme.colors.highlight,
        sizeInDesktop: '2.5'
      }}
    />
  </S.ButtonGoToHomeWrapper>
)

export default ButtonGoToHome
