import * as S from './styles'
import React from 'react'

import { IButtonProps } from './button'

import dataNameResolved from 'helpers/dataNameResolver'

const Button = ({ children, dataName, ariaLabel }: IButtonProps) => (
  <S.Button aria-label={ariaLabel} {...dataNameResolved(dataName)}>
    {children}
  </S.Button>
)

export default Button
