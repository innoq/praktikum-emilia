import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: true,
        cors: "https://edge-config.vercel.com"
    }
})