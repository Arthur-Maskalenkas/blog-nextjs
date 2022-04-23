import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import Link from 'next/link'
import { useMenuMobile } from 'hooks/useMenuMobile'

const ButtonSearch = () => {
  const { changeMenuVisibility } = useMenuMobile()

  return (
    <Link href={`/search`}>
      <a onClick={() => changeMenuVisibility(false)}>
        <S.ButtonSearchWrapper
          data-component-button-search
          aria-label="Pesquisar postagem no blog"
        >
          <Icons
            icon="search"
            iconStyles={{
              size: '2.24',
              sizeInDesktop: '2.5'
            }}
          />
        </S.ButtonSearchWrapper>
      </a>
    </Link>
  )
}

export default ButtonSearch
