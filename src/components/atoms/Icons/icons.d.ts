import { ReactNode } from 'react'
import { IIconStyle } from 'types/globald'

export interface IIconsProps {
  icon: ReactNode

  iconStyles?: IIconStyle

  ariaLabel?: string
  dataName?: string
}
