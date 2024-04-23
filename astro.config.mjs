import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'IndoNostr.xyz',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Panduan',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Mulai menggunakan Nostr', link: '/panduan/mulai-menggunakan-nostr' },
					],
				},
				{
					label: 'Protokol',
					autogenerate: { directory: 'protokol' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});