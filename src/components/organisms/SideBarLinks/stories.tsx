import { Story, Meta } from '@storybook/react'
import React from 'react'

import SideBarLinks from '.'

export default {
  title: 'SideBarLinks',
  component: SideBarLinks
} as Meta

export const Default: Story = (args) => <SideBarLinks {...args} />

export const Mobile: Story = (args) => <SideBarLinks {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
