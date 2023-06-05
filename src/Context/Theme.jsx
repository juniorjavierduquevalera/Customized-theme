import { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialTheme = {
  light: {
    background: "bg-white",
    color: "text-black",
  },
};

export const ThemeContext = createContext({
  theme: initialTheme.light,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme.light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
