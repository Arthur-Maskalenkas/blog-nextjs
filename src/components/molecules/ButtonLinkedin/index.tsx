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
        size: '3',
        sizeInDesktop: '2.5'
      }}
    />
  </S.ButtonLinkedinWrapper>
)

export default ButtonLinkedin
