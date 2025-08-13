import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$res: path.resolve('./src/resources'),
			$img: path.resolve('./src/resources/img')
		}
	}
});
