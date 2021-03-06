const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        cyan: colors.cyan,
        sky: colors.sky
      }
    },
	},
	plugins: [],
}
