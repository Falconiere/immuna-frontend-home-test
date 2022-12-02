import { ThemeProvider } from "providers/Theme";
import { Routes } from "routes";

export function Root(){
  return (
    <ThemeProvider>
      <Routes  />
    </ThemeProvider>
  );
}