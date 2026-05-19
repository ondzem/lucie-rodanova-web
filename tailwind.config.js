/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#FCFCFC',
                    surface: '#E1DFE2',
                    body: '#404042',
                    contrast: '#000000',
                    accent: '#B69E57',
                    accentHover: '#9C874B'
                }
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
