import { Story, Meta } from '@storybook/react'
import React from 'react'

import Footer from '.'

export default {
  title: 'MenuMobile/Footer',
  component: Footer
} as Meta

export const Mobile: Story = (args) => <Footer {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
