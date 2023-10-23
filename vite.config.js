import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://development.d3t6q2xdj566fj.amplifyapp.com",
  envPrefix: 'VITE_',
  server: {
    port: 3000,
    open: true,
  },
});