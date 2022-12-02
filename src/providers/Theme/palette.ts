
import { PaletteOptions } from "@mui/material/styles";

const brand: PaletteOptions["brand"] = {
  orange:"#F18F01",
  blue:"#1D7DEA",
  mediumBlue:"#41BBD9",
  lightBlue:"#E6F0FF",
  black:"#020202",
  white: "white",
  background: "#F8F8F8"
};

export const palette: PaletteOptions = {
  brand,
  primary: {
    main: brand.blue,
    darker: brand.blue,
  },
  secondary:{
    main: brand.orange,
    darker: brand.orange,
  },
  common: {
    black: brand.black,
    white: brand.white,
  },
  background: {
    default: brand.background,
  }
};