// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3004
//   }
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@t-shirt/shared": path.resolve(__dirname, "../shared/src"),
    },
  },
  server: {
    port: 3004,
    allowedHosts: [
      "lvh.me",
      "localhost",
      "127.0.0.1",
      "prolific.lvh.me",
      "doktari.lvh.me",
      "nike.lvh.me",
      "adidas.lvh.me",
    ],
  },
});
