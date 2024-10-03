/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				yellowtext: "#FFFF00", // Corrected color value
			}
		}
	},
	plugins: [],
}