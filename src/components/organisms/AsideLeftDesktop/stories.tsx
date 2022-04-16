import { Story, Meta } from '@storybook/react'
import React from 'react'

import AsideLeftDesktop from '.'

export default {
  title: 'menudesktop/AsideLeftDesktop',
  component: AsideLeftDesktop
} as Meta

export const Desktop: Story = (args) => <AsideLeftDesktop {...args} />
