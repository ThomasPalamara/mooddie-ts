import facepaint from 'facepaint';

export const colors = {
  red: '#fb6363',
  orange: '#ff7302',
  yellow: '#f6c72f',
  blue: '#32c6e6',
  darkblue: '#7578d8',
  cyan: '#0fcabf',
  green: '#6ad869',
  purple: '#c481ec',
  grey: '#d8d8d8',
  darkgrey: '#323232',
  pink: '#ff85c0',
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

export const theme = {
  bps: { xs: 576, sm: 768, md: 992, lg: 1200 },
  colors: {
    ...colors,
    red: colors.red,
    orange: colors.orange,
    yellow: colors.yellow,
    blue: colors.blue,
    darkblue: colors.darkblue,
    cyan: colors.cyan,
    green: colors.green,
    purple: colors.purple,
    success: colors.green,
  },
  // ! Must match constants from utils/constants.js
  mood: {
    // happy: colors.yellow,
    // energetic: colors.pink,
    // grumpy: colors.red,
    // average: colors.green,
    // anxious: colors.blue,
    // annoyed: colors.purple,
    // sad: colors.darkblue,
    // depressed: colors.darkgrey,
    // sick: colors.grey,
    happy: '#ffe382',
    energetic: '#fec899',
    grumpy: '#ff8290',
    average: '#80fead',
    anxious: colors.purple,
    annoyed: colors.pink,
    sad: '#82e8ff',
    depressed: colors.darkgrey,
    sick: colors.grey,
  },
  fz: {
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  },
};

const { bps } = theme;
export const mq = facepaint(
  [bps.xs, bps.sm, bps.md, bps.lg].map(bp => `@media (min-width: ${bp}px)`),
);
