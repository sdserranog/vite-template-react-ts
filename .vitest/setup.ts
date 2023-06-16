import '@testing-library/jest-dom'

import { afterEach, expect } from 'vitest'

import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

expect.extend(matchers)

// runs a cleanup after each test case
afterEach(() => {
  cleanup()
})
