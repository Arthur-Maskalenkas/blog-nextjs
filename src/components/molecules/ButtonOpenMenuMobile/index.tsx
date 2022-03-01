import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import theme from 'styles/theme'
import { useMenuMobile } from 'hooks/useMenuMobile'

const ButtonOpenMenuMobile = () => {
  const { changeMenuVisibility } = useMenuMobile()
  return (
    <S.ButtonOpenMenuMobileWrapper
      data-component-button-open-menu-mobile
      onClick={() => changeMenuVisibility()}
      aria-label="Abrir o menu mobile"
    >
      <Icons
        icon="menu"
        iconStyles={{
          size: '2.24'
        }}
      />
    </S.ButtonOpenMenuMobileWrapper>
  )
}

export default ButtonOpenMenuMobile
