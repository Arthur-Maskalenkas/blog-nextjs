import * as S from './styles'
import React from 'react'

import ButtonGoToTopPage from 'components/molecules/ButtonGoToTopPage'
import ButtonSearch from 'components/molecules/ButtonSearch'
import ButtonGoToHome from 'components/molecules/ButtonGoToHome'
import ButtonOpenMenuMobile from 'components/molecules/ButtonOpenMenuMobile'

const FooterMobile = () => {
  return (
    <S.FooterMobileWrapper data-component-footer-mobile>
      <S.ListIcons>
        <li>
          <ButtonGoToHome />
        </li>
        <li>
          <ButtonSearch />
        </li>
        <li>
          <ButtonOpenMenuMobile />
        </li>
        <li>
          <ButtonGoToTopPage />
        </li>
      </S.ListIcons>
    </S.FooterMobileWrapper>
  )
}

export default FooterMobile
