import { IIconsList } from './iconsCollection'

import { IIconStyle } from 'types/globald'

export interface IIconsProps {
  icon: keyof IIconsList

  iconStyles?: IIconStyle
  href?: string
  openLinkInOtherPage?: boolean

  ariaLabel?: string
  dataName?: string

  defaultStyle?: boolean
}
