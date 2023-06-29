/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Inter-700": ["Inter-Bold", 'sans-serif'],
        "Inter-600": ["Inter-SemiBold", 'sans-serif'],
        "Inter-500": ["Inter-Medium", 'sans-serif'],
        "Inter-400": ["Inter", 'sans-serif'],
        "Inter-300": ["Inter-Light", 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'text': ' #d1d1d1;',
        'hovers': '#e2e8fO',
      },
      backgroundImage: {
        'old_wine': 'linear-gradient(to right, #33001b  0%, #ff0084  100%);',
        'premium_dark': 'linear-gradient(to right, #434343 0%, black 100%);',
        'noise': "url('/public/images/noise-transparent.png')"
      },
      screens: {
        'xxl': {'min': '1441px'},
        // 'lm': '900px',
        // "ms": {'min': '576px'},
        // "xsm": {'max': '566px'},
      },
      animation: {
        'wiggle': 'wiggle 2s linear infinite',
        // 'noise': 'noise .2s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        cursor: {
          'hand': "url('/src/assets/pointing-up.cur'), pointer",
        },
    },
    },
   
  plugins: [],
}
}
