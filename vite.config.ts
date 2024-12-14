import { defineConfig } from 'vite';
import devtools from 'solid-devtools/vite';
import solid from 'vite-plugin-solid';
import eslint from 'vite-plugin-eslint2';

export default defineConfig({
    plugins: [
        devtools({
            autoname: true,
        }),
        solid(),
        eslint({ exclude: ['**/virtual:/**', '**/node_modules/**'] }),
    ],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
        port: 3000,
    },
    preview: {
        port: 4173,
    },
    build: {
        target: ['es2021', 'edge91', 'firefox90', 'chrome91', 'safari15', 'opera77'],
    },
});
