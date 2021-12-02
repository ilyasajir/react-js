module.exports = {
    purge: [
        './src/**/*.{js,jsx}',
        './src/**/**/*.{js,jsx}',
        './src/**/**/**/*.{js,jsx}',
        './src/**/**/**/**/*.{js,jsx}',
        './src/**/**/**/**/**/*.{js,jsx}',
        './src/**/**/**/**/**/**/*.{js,jsx}',
        './src/**/**/**/**/**/**/**/*.{js,jsx}',
        './src/**/**/**/**/**/**/**/**/*.{js,jsx}',
        './src/**/**/**/**/**/**/**/**/**/*.{js,jsx}',
        './public/index.html'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        //..
        require('@tailwindcss/line-clamp'),
    ],
}