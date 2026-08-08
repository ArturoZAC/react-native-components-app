import { Colors } from './src/constans/Colors.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          success: Colors.light.success,
          background: Colors.light.background,
          text: Colors.light.text,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          success: Colors.dark.success,
          background: Colors.dark.background,
          text: Colors.dark.text,
        },
      },
    },
  },
  plugins: [],
};
