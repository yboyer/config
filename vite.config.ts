import { defineConfig, mergeConfig } from 'vite-plus'

import config from './src/vite-plus.js'

export default defineConfig(
  mergeConfig(config, {
    pack: {
      entry: ['src/vite-plus.ts'],
    },
    lint: {
      env: { node: true },
    },
  })
)
