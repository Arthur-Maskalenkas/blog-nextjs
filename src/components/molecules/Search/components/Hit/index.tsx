import * as S from './styles'
import React from 'react'

const Hit = (props: any) => (
  <S.HitWrapper data-component-Hit>{props.hit.title}</S.HitWrapper>
)

export default Hit
