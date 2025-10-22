import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //server: {
    // This tells Vite to listen on all public network interfaces
    //host: true, 
    //port: 5173, // Optional, but good to explicitly set
  //}
})

