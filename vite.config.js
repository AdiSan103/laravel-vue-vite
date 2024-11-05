import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; // Import resolve from path

export default defineConfig({
    plugins: [
        laravel(["resources/js/app.js"]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"), // Corrected resolve usage
        },
    },
    server: {
        hmr: {
            host: "localhost",
        },
    },
});
