import { Story, Meta } from '@storybook/react'
import React from 'react'

import { IPostProps } from './post'

import Post from '.'

export default {
  title: 'Post',
  component: Post,
  args: {
    tag: { title: 'misc', colorText: 'white', colorBackground: 'green' },
    date: { day: 15, month: 5, year: 2000 },
    title: 'Meu ano de 2021',
    shortText:
      'Ano passado ja foi complicado para mim, mas esse ano foi mais ainda.',
    href: '/'
  }
} as Meta<IPostProps>

export const Desktop: Story<IPostProps> = (args) => <Post {...args} />

export const Mobile: Story<IPostProps> = (args) => <Post {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
