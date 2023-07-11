import { isAbsolute } from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import solid from 'vite-plugin-solid'

export default defineConfig({
  build: {
    lib: {
      // entry: resolve(__dirname, 'src/index.ts'),
      entry: './src/index.ts',
      name: 'solid-apollo',
      fileName: 'solid-apollo',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: id => !(id.trim().startsWith('./') || isAbsolute(id.trim())),
    },
  },
  plugins: [solid(), dts()],
})
