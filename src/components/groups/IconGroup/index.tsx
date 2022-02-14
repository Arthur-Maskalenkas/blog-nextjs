import * as S from './styles'
import React from 'react'

import { IIconGroupProps } from './iconGroup'
import dataNameResolved from 'helpers/dataNameResolver'
import Icons from 'components/atoms/Icons'

const IconGroup = ({ items, ariaLabel, dataName }: IIconGroupProps) => (
  <S.Wrapper aria-label={ariaLabel} {...dataNameResolved(dataName)}>
    {items?.map((item, index) => (
      <Icons {...item} key={index} />
    ))}
  </S.Wrapper>
)

export default IconGroup
