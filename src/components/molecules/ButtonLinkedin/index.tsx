import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'

const ButtonLinkedin = () => (
  <S.ButtonLinkedinWrapper
    data-component-button-linkedin
    aria-label="Vá para o meu linkedin"
  >
    <Icons
      icon="linkedin"
      href="google.com.br"
      iconStyles={{
        color: theme.colors.texts,
        size: '3',
        colorOnHover: theme.colors.highlight,
        sizeInDesktop: '2.5'
      }}
    />
  </S.ButtonLinkedinWrapper>
)

export default ButtonLinkedin
