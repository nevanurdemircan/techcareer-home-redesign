/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: { global: {} },
  plugins: [react()],
  resolve: { alias: { '@od': `${path.resolve('./src/')}` } }})