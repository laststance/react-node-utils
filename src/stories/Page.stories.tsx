import type { StoryFn, Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import React from 'react'

import { Page } from './Page'

export default {
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Example/Page',
} as Meta<typeof Page>

export const LoggedOut = {}

export const LoggedIn = {
  // @ts-expect-error
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}
