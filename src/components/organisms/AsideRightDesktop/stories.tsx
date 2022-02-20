import { Story, Meta } from '@storybook/react'
import React from 'react'

import AsideRightDesktop from '.'

export default {
  title: 'menudesktop/AsideRightDesktop',
  component: AsideRightDesktop
} as Meta

export const Desktop: Story = (args) => <AsideRightDesktop {...args} />
