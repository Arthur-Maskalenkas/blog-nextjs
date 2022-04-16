import { Story, Meta } from '@storybook/react'
import React from 'react'

import { IIconsProps } from './icons'

import Icons from '.'

export default {
  title: 'Icons',
  component: Icons,
  args: {
    icon: 'github',
    iconStyles: {
      color: '#000000',
      size: '2',
      colorOnHover: 'red'
    }
  }
} as Meta<IIconsProps>

export const withoutLink: Story<IIconsProps> = (args) => <Icons {...args} />

export const withLink: Story<IIconsProps> = (args) => <Icons {...args} />

withLink.args = {
  href: 'um link'
}
