import { Story, Meta } from '@storybook/react'
import React from 'react'

import Header from '.'

export default {
  title: 'MenuMobile/Header',
  component: Header
} as Meta

export const Mobile: Story = (args) => <Header {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
