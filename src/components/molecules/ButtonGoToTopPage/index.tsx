import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'

const ButtonGoToTopPage = () => (
  <S.ButtonGoToTopPageWrapper
    data-component-button-go-to-top-page
    aria-label="ir para o topo da pagina"
  >
    <Icons
      icon="goToTopPage"
      iconStyles={{
        size: '3.34',
        sizeInDesktop: '2.5'
      }}
    />
  </S.ButtonGoToTopPageWrapper>
)

export default ButtonGoToTopPage
