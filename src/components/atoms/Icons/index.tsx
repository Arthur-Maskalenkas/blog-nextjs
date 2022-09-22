/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'

import * as S from './styles'
import { IIconsProps } from './icons'
import { iconPropsDefault, tagWrapperResolved } from './utils'
import { IconsCollection } from './iconsCollection'

import dataNameResolved from 'helpers/dataNameResolver'

const Icons = ({
  icon,
  iconStyles = iconPropsDefault,
  ariaLabel,
  href,
  openLinkInOtherPage,
  dataName,
  defaultStyle = true
}: IIconsProps) => (
  // @ts-ignore
  <S.Wrapper
    data-component-icons
    aria-label={ariaLabel}
    {...tagWrapperResolved(href, openLinkInOtherPage)}
    {...dataNameResolved(dataName)}
    {...iconStyles}
    defaultStyle={defaultStyle}
  >
    {IconsCollection[icon]}
  </S.Wrapper>
)

export default Icons
