import React from 'react'

import * as S from './styles'

import ButtonGithub from 'components/ButtonsMenu/ButtonGithub'
import ButtonLinkedin from 'components/ButtonsMenu/ButtonLinkedin'
import ButtonGoToHome from 'components/ButtonsMenu/ButtonGoToHome'
import ButtonSearch from 'components/ButtonsMenu/ButtonSearch'
import ButtonGoToTopPage from 'components/ButtonsMenu/ButtonGoToTopPage'

const AsideRightDesktop = () => (
  <S.AsideRightDesktopWrapper data-component-aside-right-desktop>
    <S.FirstColumn>
      <li>
        <ButtonGoToHome />
      </li>
      <li>
        <ButtonSearch />
      </li>
      <li>
        <ButtonLinkedin />
      </li>
      <li>
        <ButtonGithub />
      </li>
    </S.FirstColumn>

    <S.SecondColumn>
      <li>
        <ButtonGoToTopPage />
      </li>
    </S.SecondColumn>
  </S.AsideRightDesktopWrapper>
)

export default AsideRightDesktop
