import { Story, Meta } from '@storybook/react'
import React from 'react'

import MenuLinkGroup from '.'

export default {
  title: 'MenuLinkGroup',
  component: MenuLinkGroup
} as Meta

export const Default: Story = (args) => <MenuLinkGroup {...args} />

export const Mobile: Story = (args) => <MenuLinkGroup {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
