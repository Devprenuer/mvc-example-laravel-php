import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@devprenuer/ui-utils': fileURLToPath(new URL('./packages/devprenuer-ui-utils/src', import.meta.url)),
        }
    }
});
