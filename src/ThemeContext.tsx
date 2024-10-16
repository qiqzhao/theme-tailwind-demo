import React, { createContext, useContext, useMemo } from "react";
import themes, { Theme } from "./theme";

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const hostname = window.location.hostname;

  const theme = useMemo(() => {
    if (hostname.includes("example1.com")) {
      return themes.example1;
    } else if (hostname.includes("example2.com")) {
      return themes.example2;
    } else {
      return themes.example1;
    }
  }, [hostname]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context.theme;
};
