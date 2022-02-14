import { IIconGroupProps } from './iconGroup'

import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'

import theme from 'styles/theme'

const IconListSideBarStylesDefault = {
  iconStyles: {
    color: theme.colors.texts,
    colorOnHover: theme.colors.highlight,
    size: '3'
  }
}

export const IconListSideBar: IIconGroupProps = {
  items: [
    {
      icon: <Github />,
      ariaLabel: 'Github icon',
      href: 'https://github.com/Arthur-Maskalenkas',
      ...IconListSideBarStylesDefault
    },
    {
      icon: <Linkedin />,
      ariaLabel: 'Linkedin icon',
      href: 'https://www.linkedin.com/in/arthur-maskalenkas-915431214/',
      ...IconListSideBarStylesDefault
    }
  ]
}
