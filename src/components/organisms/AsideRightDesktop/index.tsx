import * as S from './styles'
import React from 'react'
import ButtonGithub from 'components/molecules/ButtonGithub'
import ButtonLinkedin from 'components/molecules/ButtonLinkedin'
import ButtonGoToHome from 'components/molecules/ButtonGoToHome'
import ButtonSearch from 'components/molecules/ButtonSearch'
import ButtonChangeTheme from 'components/molecules/ButtonChangeTheme'
import ButtonGoToTopPage from 'components/molecules/ButtonGoToTopPage'

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
        <ButtonChangeTheme />
      </li>
      <li>
        <ButtonGoToTopPage />
      </li>
    </S.SecondColumn>
  </S.AsideRightDesktopWrapper>
)

export default AsideRightDesktop
