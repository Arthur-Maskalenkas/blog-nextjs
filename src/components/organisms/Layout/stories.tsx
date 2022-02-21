import { Story, Meta } from '@storybook/react'
import React from 'react'

import Layout from '.'

export default {
  title: 'Layout',
  component: Layout
} as Meta

export const Desktop: Story = (args) => <Layout {...args}>a</Layout>

export const Mobile: Story = (args) => <Layout {...args}>a</Layout>

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
