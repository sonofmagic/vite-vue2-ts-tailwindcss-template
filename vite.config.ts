import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import utwm from 'unplugin-tailwindcss-mangle/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), utwm({
    classMapOutput: true,
  })],
})
