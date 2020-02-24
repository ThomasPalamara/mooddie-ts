import facepaint from 'facepaint';
import values from 'lodash/values';

const spacing = {
  baseline: 1,
  unit: 'rem',
};
const fz = {
  baseline: 14,
  unit: 'rem',
};

const theme = {
  colors: {
    body: '#362d59',
    black: '#333',
    white: '#eee',
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
    happy: '#ffe382',
    energetic: '#fec899',
    grumpy: '#ff8290',
    average: '#80fead',
    anxious: '#c481ec',
    annoyed: '#ff85c0',
    sad: '#82e8ff',
    depressed: '#323232',
    sick: '#d8d8d8',
  },
  palette: {
    error: {
      main: '#c53030',
      lighter: '#fff5f5',
    },
    success: {
      main: '#2f855a',
      lighter: '#f0fff4',
    },
    primary: {
      main: '#4299e1',
      darker: '#2b6cb0',
    },
  },
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
    '1': spacing.baseline * 0.25 + spacing.unit,
    '2': spacing.baseline * 0.5 + spacing.unit,
    '3': spacing.baseline * 1 + spacing.unit,
    '4': spacing.baseline * 1.25 + spacing.unit,
    '5': spacing.baseline * 1.5 + spacing.unit,
  },
  fontSize: {
    xs: '0.8rem',
    sm: '1rem',
    default: '1.4rem',
    md: '1.6rem',
    lg: '2.4rem',
  },
};

const breakpoints = values(theme.screens);

export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

export default theme;
