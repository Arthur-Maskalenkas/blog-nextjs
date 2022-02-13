import * as S from './styles'
import React from 'react'

import { IIconsProps } from './icons'

import dataNameResolved from 'helpers/dataNameResolver'
import { iconPropsDefault } from './utils'

const Icons = ({
  icon,
  iconStyles = iconPropsDefault,
  ariaLabel,
  dataName
}: IIconsProps) => (
  <S.Wrapper
    aria-label={ariaLabel}
    {...dataNameResolved(dataName)}
    {...iconStyles}
  >
    {icon}
  </S.Wrapper>
)

export default Icons
