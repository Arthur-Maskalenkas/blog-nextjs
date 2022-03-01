import { ReactNode } from 'react'
import { IIconStyle } from 'types/globald'
import { IIconsList } from './iconsCollection'

export interface IIconsProps {
  icon: keyof IIconsList

  iconStyles?: IIconStyle
  href?: string

  ariaLabel?: string
  dataName?: string

  defaultStyle?: boolean
}
