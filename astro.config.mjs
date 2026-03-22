// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightKbd from 'starlight-kbd'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightKbd({
				types: [
					{ id: 'windows', label: 'Windows', default: true },
				],
				}),
			],
			title: 'Jupyter Classroom',
			logo: {
				src: './src/assets/favicon.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/leowilkin/jupyter-classroom' }],
			editLink: {
				baseUrl: 'https://github.com/leowilkin/jupyter-classroom-docs/edit/main/',
			},
			sidebar: [
				{ label: 'GitHub Repo', link: 'https://github.com/leowilkin/jupyter-classroom' },
				{
				label: 'Configuration',
				items: [
					'configuration',
					'configuration/installation',
					'configuration/access',
					{
						label: 'OAuth Providers',
						items: [
							'configuration/oauth/azure',
							'configuration/oauth/github',
							'configuration/oauth/google',
							'configuration/oauth/custom',
						],
					},
					'configuration/lessons',
					'configuration/classroom'
				],
				},
				{
					label: 'Usage',
					autogenerate: { directory: 'usage' },
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
		}),
	],
});
