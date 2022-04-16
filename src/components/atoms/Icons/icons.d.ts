import { IIconStyle } from 'types/globald'
import { IIconsList } from './iconsCollection'

export interface IIconsProps {
  icon: keyof IIconsList

  iconStyles?: IIconStyle
  href?: string
  openLinkInOtherPage?: boolean

  ariaLabel?: string
  dataName?: string

  defaultStyle?: boolean
}
