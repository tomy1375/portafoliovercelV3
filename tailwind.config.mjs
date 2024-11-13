/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  '.experience-item': {
			position: 'relative',
			'background-image': 'linear-gradient(#13151a,#13151a)',
			'background-image': 'linear-gradient(145deg,transparent 35%,#e81cff,#40c9ff)',
			border: '2px solid transparent',
			'border-radius': '5px',
			transition: 'all .6s cubic-bezier(.23,1,.32,1)',
			padding: '10px 15px',
		  },
		  
		}
	  },
	plugins: [],
}
