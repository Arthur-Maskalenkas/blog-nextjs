import { Story, Meta } from '@storybook/react'
import React from 'react'

import MenuMobile from '.'

export default {
  title: 'MenuMobile/Wrapper',
  component: MenuMobile
} as Meta

export const Desktop: Story = (args) => <MenuMobile {...args} />

export const Mobile: Story = (args) => <MenuMobile {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
