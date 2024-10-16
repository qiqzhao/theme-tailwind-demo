import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

const ThemedComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      className={`${theme.background} ${theme.textColor} min-h-screen flex items-center justify-center`}
    >
      <h1 className="text-4xl">欢迎来到我的网站!</h1>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
