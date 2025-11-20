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
    host: "admin.lvh.me", // 👈 same domain
    port: 3001,
    open: true, // 👈 automatically open browser
    fs: {
      allow: [".."], // ✅ still allow shared folder
    },
  },
});
