import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
var require = createRequire(import.meta.url);
var module = { exports: {} };


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() , eslint()],
});
