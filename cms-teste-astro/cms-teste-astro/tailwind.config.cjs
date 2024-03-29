/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
		'./index.html',
		'./public/index.html',
		'./src/**/*.css',
		'./src/**/*.js',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
