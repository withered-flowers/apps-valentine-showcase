/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#FDF2F8",
				secondary: "#F8FDF2",
				tertiary: "#F2F8FD",
				"primary-mono": "#F6C6E0",
				"secondary-mono": "#E0F6C6",
				"tertiary-mono": "#C6E0F6",
			},
			fontFamily: {
				primary: ["Meow Script", ...defaultTheme.fontFamily.sans],
				secondary: ["Rancho", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
