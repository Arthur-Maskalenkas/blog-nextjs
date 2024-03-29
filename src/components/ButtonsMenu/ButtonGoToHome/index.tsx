import React from 'react'
import Link from 'next/link'

import * as S from './styles'

import Icons from 'components/atoms/Icons'
import { useMenuMobile } from 'hooks/useMenuMobile'

const ButtonGoToHome = () => {
  const { changeMenuVisibility } = useMenuMobile()
  return (
    <Link href={'/'}>
      <a aria-label="Vá para a home">
        <S.ButtonGoToHomeWrapper
          onClick={() => changeMenuVisibility(false)}
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
      </a>
    </Link>
  )
}

export default ButtonGoToHome
