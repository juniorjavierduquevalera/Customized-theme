import { useContext } from "react";
import { ThemeContext } from "./Theme";

// Hooks //
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
