import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    happy: PaletteColor;
    energetic: PaletteColor;
    grumpy: PaletteColor;
    average: PaletteColor;
    anxious: PaletteColor;
    annoyed: PaletteColor;
    sad: PaletteColor;
    depressed: PaletteColor;
    sick: PaletteColor;
  }

  interface PaletteOptions {
    happy: PaletteColorOptions;
    energetic: PaletteColorOptions;
    grumpy: PaletteColorOptions;
    average: PaletteColorOptions;
    anxious: PaletteColorOptions;
    annoyed: PaletteColorOptions;
    sad: PaletteColorOptions;
    depressed: PaletteColorOptions;
    sick: PaletteColorOptions;
  }
}

function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
  });
}

export default createMyTheme({
  palette: {
    // moods
    happy: { main: '#ffe382' },
    energetic: { main: '#fec899' },
    grumpy: { main: '#ff8290' },
    average: { main: '#80fead' },
    anxious: { main: '#c481ec' },
    annoyed: { main: '#ff85c0' },
    sad: { main: '#82e8ff' },
    depressed: { main: '#323232' },
    sick: { main: '#d8d8d8' },
  },
});
