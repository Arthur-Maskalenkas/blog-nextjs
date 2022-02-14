import { Story, Meta } from '@storybook/react'
import React from 'react'

import { IIconGroupProps } from './iconGroup'

import IconGroup from '.'
import { IconListSideBar } from './utils'

export default {
  title: 'IconGroup',
  component: IconGroup,
  args: {
    items: IconListSideBar.items
  }
} as Meta<IIconGroupProps>

export const Default: Story<IIconGroupProps> = (args) => <IconGroup {...args} />
