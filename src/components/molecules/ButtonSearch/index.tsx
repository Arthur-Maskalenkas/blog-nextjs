import * as S from './styles'
import React from 'react'
import Icons from 'components/atoms/Icons'
import Link from 'next/link'

const ButtonSearch = () => (
  <Link href={`/search`}>
    <a aria-label="Pesquisar postagem no blog">
      <S.ButtonSearchWrapper data-component-button-search>
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

export default ButtonSearch
