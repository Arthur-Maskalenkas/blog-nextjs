import { Home } from '@styled-icons/boxicons-solid/Home'
import { Search } from '@styled-icons/boxicons-regular/Search'
import { Menu } from '@styled-icons/heroicons-outline/Menu'
import { LightBulb } from '@styled-icons/entypo/LightBulb'
import { ArrowUpShort } from 'styled-icons/bootstrap'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

import { ReactNode } from 'react'

export interface IIconsList {
  home: ReactNode
  search: ReactNode
  changeTheme: ReactNode
  goToTopPage: ReactNode
  github: ReactNode
  linkedin: ReactNode
  menu: ReactNode
}

export const IconsCollection: IIconsList = {
  changeTheme: <LightBulb />,
  goToTopPage: <ArrowUpShort />,
  home: <Home />,
  search: <Search />,
  github: <Github />,
  linkedin: <Linkedin />,
  menu: <Menu />
}
