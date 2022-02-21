import * as S from './styles'
import React from 'react'

import { IHomeProps } from './home'

const Home = ({ default }: IHomeProps) => (
  <S.HomeWrapper data-component-home>
    <h1>home</h1>
  </S.HomeWrapper>
)

export default Home
