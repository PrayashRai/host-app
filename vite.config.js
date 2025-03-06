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
        chatApp: "http://localhost:5001/assets/remoteEntry.js",//Ensure correct remote entry URL
        emailApp: "http://localhost:5002/assets/remoteEntry.js",
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
