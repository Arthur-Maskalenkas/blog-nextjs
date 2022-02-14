/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import React from 'react'

import { IIconsProps } from './icons'

import dataNameResolved from 'helpers/dataNameResolver'
import { iconPropsDefault, tagWrapperResolved } from './utils'

const Icons = ({
  icon,
  iconStyles = iconPropsDefault,
  ariaLabel,
  href,
  dataName
}: IIconsProps) => (
  // @ts-ignore
  <S.Wrapper
    aria-label={ariaLabel}
    {...tagWrapperResolved(href)}
    {...dataNameResolved(dataName)}
    {...iconStyles}
  >
    {icon}
  </S.Wrapper>
)

export default Icons
