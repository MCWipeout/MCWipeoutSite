module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-lobby': "url('/background-img/presskit-1.png')"
			},
			colors: {
				'red-team': '#EB403C',
				'orange-team': '#EC8B33',
				'yellow-team': '#F2BA0C',
				'lime-team': '#62DD0B',
				'green-team': '#2EA128',
				'cyan-team': '#00A69A',
				'aqua-team': '#09ABE9',
				'blue-team': '#0057FA',
				'purple-team': '#961DCF',
				'pink-team': '#E627CF'
			}
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=emerald]']
					// primary: '#5479A1',
					// secondary: '#F0B764',
					// accent: '#6F49B2'
				},
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=forest]']
					// primary: '#F0B764',
					// secondary: '#5479A1',
					// accent: '#6F49B2'
				}
			}
		]
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};
