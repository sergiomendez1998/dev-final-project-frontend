import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://3.16.158.123/lab2you',
  envPrefix: 'VITE_',
  server: {
    port: 3000,
    open: true,
  },
});