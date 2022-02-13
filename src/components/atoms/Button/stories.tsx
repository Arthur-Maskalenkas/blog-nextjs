import { Story, Meta } from '@storybook/react'
import React from 'react'

import { IButtonProps } from './button'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Clique aqui'
  }
} as Meta<IButtonProps>

export const Default: Story<IButtonProps> = (args) => <Button {...args} />
