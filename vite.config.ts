import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
    server: {
        open: true, // automatically open the browser when the server starts
        port: 4000, // specifies the port to run the server on
    }
});
