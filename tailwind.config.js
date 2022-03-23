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
        main2: {
          100: '#cdf3e8',
          200: '#9ce7d0',
          300: '#6adab9',
          400: '#39cea1',
          500: '#07c28a',
          600: '#069b6e',
          700: '#047453',
          800: '#034e37',
          900: '#01271c',
        },
        blackish: '#1D2947',
        blackishlight: '#61697E',
        tmorange: '#F3A258',
        tmred: {
          og: '#EF4631',
          dark: '#bf3827',
        },
        tmblue: {
          og: '#2292EC',
          dark: '#1b75bd',
        },
        glassblack: '#000000CC',
      },
    },
    fontFamily: {
      'sans': ['Plex', 'ui-sans-serif', 'system-ui'],
      'sansv2': ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(border|bg|text)-(.*)/,
      variants: ['hover', 'active'],
    },
  ],
}
