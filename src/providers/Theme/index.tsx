import { createTheme, CssBaseline, ThemeProvider as Provider } from "@mui/material";
import { components } from "./components";

import { palette } from "./palette";

export const theme = createTheme({
  palette,
  components
});

export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
}