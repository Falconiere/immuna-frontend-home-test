declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      orange: string;
      blue: string;
      mediumBlue: string;
      lightBlue: string;
      black: string;
      white: string;
      background: string;
    },
    primary: {
      main: string;
      darker: string;
    }
    secondary: {
      main: string;
      darker: string;
    }
    common: {
      black: string;
      white: string;
    },
    background:{
      default: string;
    }
  }
  type PaletteOptions = Palette;
}