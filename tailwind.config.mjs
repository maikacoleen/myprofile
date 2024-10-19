/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				yellowtext: "#FFFF00", 
				blackblue: "#101827",
				icongrey: "#BFC1C9",
				iconblack: "#26282C",
				cardcolor: "#1B1D28",
			}
		}
	},
	plugins: [],
}
