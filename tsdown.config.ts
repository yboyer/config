import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/vite-plus.ts'],
  format: 'esm',
  fixedExtension: true,
  dts: { sourcemap: true },
  clean: true,
})
