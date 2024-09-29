import animations from '@midudev/tailwind-animations';
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // Habilita el modo oscuro usando la clase "dark"
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#333',
				'secondary': '#ddd',
			},
			gridTemplateColumns: {
				'auto-fit-100': 'repeat (auto-fit, minmax (100px, 1fr)',
				'auto-fit-200': 'repeat (auto-fit, minmax (200px, 1fr)',
				'auto-fit-300': 'repeat (auto-fit, minmax (300px, 1fr)',
				'auto-fit-400': 'repeat (auto-fit, minmax (400px, 1fr)',
				'auto-fit-500': 'repeat (auto-fit, minmax (450px, 1fr)',
				'auto-fit-600': 'repeat (auto-fit, minmax (150px, 1fr)',
				'auto-fit-700': 'repeat (auto-fit, minmax (150px, 1fr)',
				'auto-fit-800': 'repeat (auto-fit, minmax (150px, 1fr)',
				'auto-fit-900': 'repeat (auto-fit, minmax (150px, 1fr)',
				'auto-fit-950': 'repeat (auto-fit, minmax (150px, 1fr)'
			}
		},
	},
	plugins: [animations],
}
