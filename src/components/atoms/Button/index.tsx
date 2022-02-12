import * as S from './styles'
import React from 'react'

import { IButtonProps } from './button'
import dataNameResolved from 'helpers/dataNameResolver'

const Button = ({ children, dataName = 'button-default' }: IButtonProps) => (
  <S.Button
    className="teste"
    aria-label={dataName}
    {...dataNameResolved(dataName)}
  >
    {children}
  </S.Button>
)

export default Button
