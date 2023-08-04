import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import resolve from './vite.resolve.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], resolve
})
