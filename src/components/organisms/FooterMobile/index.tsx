import * as S from './styles'
import React from 'react'

import ButtonGoToTopPage from 'components/ButtonsMenu/ButtonGoToTopPage'
import ButtonSearch from 'components/ButtonsMenu/ButtonSearch'
import ButtonGoToHome from 'components/ButtonsMenu/ButtonGoToHome'
import ButtonOpenMenuMobile from 'components/ButtonsMenu/ButtonOpenMenuMobile'

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
