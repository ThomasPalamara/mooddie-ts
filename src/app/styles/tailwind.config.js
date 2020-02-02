const colorPalette = {
  red: { base: '#fb6363' },
  orange: { base: '#ff7302' },
  yellow: { base: '#f6c72f' },
  blue: { base: '#32c6e6' },
  darkblue: { base: '#7578d8' },
  cyan: { base: '#0fcabf' },
  green: { base: '#6ad869' },
  purple: { base: '#c481ec' },
  grey: { base: '#d8d8d8' },
  darkgrey: { base: '#323232' },
  pink: { base: '#ff85c0' },
  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
  },
};
const spacing = {
  baseline: 1,
  unit: 'rem',
};

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    spacing: {
      '0': 0,
      '1': spacing.default * 0.25 + spacing.unit,
      '2': spacing.default * 0.5 + spacing.unit,
      '3': spacing.default * 1 + spacing.unit,
      '4': spacing.default * 1.25 + spacing.unit,
      '5': spacing.default * 1.5 + spacing.unit,
    },
    colors: {
      black: '#000',
      white: '#fff',

      gray: {
        // 100: '#f7fafc',
        200: '#edf2f7',
        // 300: '#e2e8f0',
        // 400: '#cbd5e0',
        // 500: '#a0aec0',
        // 600: '#718096',
        700: '#4a5568',
        // 800: '#2d3748',
        // 900: '#1a202c',
      },
      red: { default: colorPalette.red },

      happy: '#ffe382',
      energetic: '#fec899',
      grumpy: '#ff8290',
      average: '#80fead',
      anxious: '#c481ec',
      annoyed: colorPalette.pink,
      sad: '#82e8ff',
      depressed: colorPalette.darkgrey,
      sick: colorPalette.grey,
      error: {
        default: '#c53030',
        lighter: '#fff5f5',
      },
      success: {
        default: '#2f855a',
        lighter: '#f0fff4',
      },
      primary: {
        default: '#4299e1',
        darker: '#2b6cb0',
      },
    },
  },
  variants: {},
  plugins: [],
};
