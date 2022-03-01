import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'

const ButtonGithub = () => (
  <S.ButtonGithubWrapper
    data-component-button-github
    aria-label="Vá para o meu github"
  >
    <Icons
      icon="github"
      href="google.com.br"
      iconStyles={{
        color: theme.colors.texts,
        size: '3',
        colorOnHover: theme.colors.highlight,
        sizeInDesktop: '2.5'
      }}
    />
  </S.ButtonGithubWrapper>
)

export default ButtonGithub
