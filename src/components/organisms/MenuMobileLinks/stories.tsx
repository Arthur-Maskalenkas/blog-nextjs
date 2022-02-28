import { Story, Meta } from '@storybook/react'
import React from 'react'

import MenuMobile from '.'

export default {
  title: 'menumobile/MenuMobileLinks',
  component: MenuMobile
} as Meta

export const CloseMenu: Story = (args) => <MenuMobile {...args} />

CloseMenu.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}

export const OpenMenu: Story = (args) => <MenuMobile {...args} />

OpenMenu.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}

OpenMenu.args = {
  MenuMobileContextValue: {
    isOpen: true
  }
}
