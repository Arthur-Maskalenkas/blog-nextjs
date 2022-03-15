import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'
import { useMenuMobile } from 'hooks/useMenuMobile'

const ButtonGoToHome = () => {
  const { changeMenuVisibility } = useMenuMobile()
  return (
    <S.ButtonGoToHomeWrapper
      onClick={() => changeMenuVisibility()}
      data-component-button-go-to-home
      aria-label="Vá para a home"
    >
      <Icons
        icon="home"
        iconStyles={{
          size: '2.24',
          sizeInDesktop: '2.5'
        }}
      />
    </S.ButtonGoToHomeWrapper>
  )
}

export default ButtonGoToHome
