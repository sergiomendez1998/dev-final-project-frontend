import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  envPrefix: 'VITE_',
  server: {
    port: 3000,
    open: true,
  },
});
