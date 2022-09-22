import React from 'react'

import * as S from './styles'
import { IButtonProps } from './button'

import dataNameResolved from 'helpers/dataNameResolver'

const Button = ({ children, dataName, ariaLabel, ...props }: IButtonProps) => (
  <S.Button aria-label={ariaLabel} {...dataNameResolved(dataName)} {...props}>
    {children}
  </S.Button>
)

export default Button
