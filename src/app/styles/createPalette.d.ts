import '@material-ui/styles';

// and extend it
declare module '@material-ui/styles' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
