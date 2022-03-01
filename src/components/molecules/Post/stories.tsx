import { Story, Meta } from '@storybook/react'
import React from 'react'

import { IPostProps } from './post'

import Post from '.'

export default {
  title: 'Post',
  component: Post,
  args: {
    tag: { title: 'misc', colorText: 'white', colorBackground: 'green' },
    date: '2022-02-26 22:50:35',
    title: 'Meu ano de 2021',
    shortText:
      'Ano passado ja foi complicado para mim, mas esse ano foi mais ainda.',
    slug: '/'
  }
} as Meta<IPostProps>

export const Desktop: Story<IPostProps> = (args) => <Post {...args} />

export const Mobile: Story<IPostProps> = (args) => <Post {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'MobileMin'
  }
}
