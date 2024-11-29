import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'blended-gradient': 'linear-gradient(90deg, #fbc41c, #f97001, #f34d3a)',
			},
			backgroundColor: {
				'main-bg': '#fff7dc',
				'title-bg': '#fcd35f',
			},
		},

	},
	plugins: [],
};
export default config;
