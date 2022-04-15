import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'
import { LINK_GITHUB } from 'helpers/links'

const ButtonGithub = () => (
  <S.ButtonGithubWrapper
    data-component-button-github
    aria-label="Vá para o meu github"
  >
    <Icons
      icon="github"
      href={`/${LINK_GITHUB}`}
      iconStyles={{
        size: '3'
      }}
    />
  </S.ButtonGithubWrapper>
)

export default ButtonGithub
