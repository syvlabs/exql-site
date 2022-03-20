module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          200: '#a8cdc2',
          300: '#8bbcad',
          400: '#6eab99',
          500: '#58897a',
          600: '#42675c',
          700: '#2c443d',
          800: '#16221f',
          900: '#0b110f',
        },
        tmorange: '#F3A258',
        tmred: {
          og: '#EF4631',
          dark: '#bf3827',
        },
        tmblue: {
          og: '#2292EC',
          dark: '#1b75bd',
        }
      },
    },
    fontFamily: {
      'sans': ['Plex', 'ui-sans-serif', 'system-ui'],
      // 'modern': ['Satoshi', 'ui-sans-serif'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(border|bg|text)-(.*)-(.*)/,
      variants: ['hover', 'active'],
    },
  ],
}
