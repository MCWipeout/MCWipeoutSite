module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-lobby': "url('/background-img/presskit-1.webp')"
			}
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
					primary: '#38BDF8',
					secondary: '#B91C1C',
					accent: '#E5E5E5'
				},
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=forest]'],
					primary: '#38BDF8',
					secondary: '#B91C1C',
					accent: '#E5E5E5'
				}
			}
		]
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
