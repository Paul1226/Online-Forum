/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				merriweather: ['Merriweather', 'serif'],
			},

			colors: {
				'charade': '#2B2D38',
				'cerise': '#DB2A6B',
				'silver': '#ABABAB',
			},
		},

	},
	plugins: [],
}
