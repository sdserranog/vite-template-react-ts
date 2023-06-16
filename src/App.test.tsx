import { describe, expect, test } from 'vitest'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()

    // Get by h1
    const h1 = wrapper.container.querySelector('h1')
    expect(h1?.textContent).toBe('Vite + React')

    // Get by text using the React testing library
    const text = screen.getByText('Vite + React')
    expect(text).toBeInTheDocument()
  })

  test('Click button', async () => {
    render(<App />)
    const user = userEvent.setup()

    // Click button
    const button = screen.getByRole('button')
    await user.click(button)

    expect(button).toHaveTextContent('count is 1')
  })
})
