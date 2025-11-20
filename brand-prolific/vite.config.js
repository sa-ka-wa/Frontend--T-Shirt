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
      "@admin": path.resolve(__dirname, "../admin-app/src/"),
    },
  },
  server: {
    host: "prolific.lvh.me",
    port: 3004,
    open: true, // 👈 automatically open browser
    fs: {
      allow: [".."], // ✅ still allow shared folder
    },
  },
});
