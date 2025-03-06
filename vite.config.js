import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    federation({
      name: "hostApp",
      remotes: {
        chatApp: "https://micro-frontend-poc-part-1.netlify.app/assets/remoteEntry.js",
        emailApp: "https://micro-frontend-poc-part-2.netlify.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
