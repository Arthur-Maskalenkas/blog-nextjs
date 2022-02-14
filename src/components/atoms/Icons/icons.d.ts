import { ReactNode } from 'react'
import { IIconStyle } from 'types/globald'

export interface IIconsProps {
  icon: ReactNode

  iconStyles?: IIconStyle
  href?: string

  ariaLabel?: string
  dataName?: string
}
