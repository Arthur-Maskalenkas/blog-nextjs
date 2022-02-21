import { Story, Meta } from '@storybook/react'
import React from 'react'

import { IHomeProps } from './home'

import Home from '.'

export default {
  title: 'Home',
  component: Home
} as Meta

export const Desktop: Story<IHomeProps> = (args) => <Home {...args} />

/*
export const Mobile: Story<IHomeProps> = (args) => <Home {...args}/>

Mobile.parameters = {
 viewport: {
    defaultViewport: 'MobileMin'
  }
}
*/
