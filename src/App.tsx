import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

const ThemedComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-center mb-4 p-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={toggleTheme}
        >
          切换主题
        </button>
      </div>
      <div
        className={`${theme.background} ${theme.textColor} flex flex-col flex-grow items-center justify-center`}
      >
        <h1 className="text-4xl">Hello World</h1>
        <div>
          <img
            className="rounded-full object-cover"
            src={theme.avatar}
            width="100"
            height="100"
            alt="avatar"
          />
        </div>

        {theme.type === "dark" && <div>Only Show on Dark Mode</div>}
      </div>
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
