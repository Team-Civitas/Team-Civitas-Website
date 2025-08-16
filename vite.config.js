import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), svelte({
		extensions: ['.svelte', '.md'],
		preprocess: markdown()
	})],
	server: {
		host: true,
		allowedHosts: ['dev.revilo0509.net']
	}
});
