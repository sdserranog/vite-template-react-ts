import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    environment: 'happy-dom',
    globals: true,
    include: ['**/*.test.{ts,tsx}'],
    setupFiles: './.vitest/setup.ts',
  },
})
