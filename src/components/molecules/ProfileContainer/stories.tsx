import { Story, Meta } from '@storybook/react'
import React from 'react'

import ProfileContainer from '.'

export default {
  title: 'ProfileContainer',
  component: ProfileContainer
} as Meta

export const Default: Story = (args) => <ProfileContainer {...args} />

export const Mobile: Story = (args) => <ProfileContainer {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
