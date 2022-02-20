/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import React from 'react'

import { IIconsProps } from './icons'

import dataNameResolved from 'helpers/dataNameResolver'
import { iconPropsDefault, tagWrapperResolved } from './utils'

import { IconsCollection } from './iconsCollection'

const Icons = ({
  icon,
  iconStyles = iconPropsDefault,
  ariaLabel,
  href,
  dataName
}: IIconsProps) => (
  // @ts-ignore
  <S.Wrapper
    data-component-icons
    aria-label={ariaLabel}
    {...tagWrapperResolved(href)}
    {...dataNameResolved(dataName)}
    {...iconStyles}
  >
    {IconsCollection[icon]}
  </S.Wrapper>
)

export default Icons
