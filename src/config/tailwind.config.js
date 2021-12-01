module.exports = {
    mode: 'jit',
    purge: [
        '../**/*.{js,jsx}',
        '../**/**/*.{js,jsx}',
        '../**/**/**/*.{js,jsx}',
        '../**/**/**/**/*.{js,jsx}',
        '../**/**/**/**/**/*.{js,jsx}',
        '../**/**/**/**/**/**/*.{js,jsx}',
        '../**/**/**/**/**/**/**/*.{js,jsx}',
        '../**/**/**/**/**/**/**/**/*.{js,jsx}',
        '../**/**/**/**/**/**/**/**/**/*.{js,jsx}',
        '../../public/index.html'],
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