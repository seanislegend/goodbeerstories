const theme = require('./tailwind-theme.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    plugins: [require('tailwindcss-animate')],
    theme: {extend: theme}
};
