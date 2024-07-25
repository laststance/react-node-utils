import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['**/*.{test,spec}.{ts,js}'],
    exclude: ['node_modules', 'dist'],
  },
})
