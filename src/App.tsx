// src/App.js

import React, { useState } from "react";
import "./index.css"; // 确保引入 Tailwind CSS

interface ITheme {
  background: string;
  text: string;
  cardBackground: string;
  itemBackground: string;
}

const themes = {
  light: {
    background: "bg-gray-100",
    text: "text-black",
    cardBackground: "bg-white",
    itemBackground: "bg-blue-500",
  },
  dark: {
    background: "bg-gray-800",
    text: "text-white",
    cardBackground: "bg-gray-700",
    itemBackground: "bg-blue-700",
  },
};

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev: any) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container mx-auto p-4 ${themes[theme].background}`}>
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        切换主题
      </button>
      <GridLayout theme={themes[theme]} />
      <TwoColumnLayout theme={themes[theme]} />
    </div>
  );
}

function GridLayout({ theme }: { theme: ITheme }) {
  return (
    <div>
      <h1 className={`text-2xl font-bold mb-4 ${theme.text}`}>
        响应式网格布局
      </h1>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 p-4 rounded-lg shadow ${theme.cardBackground}`}
      >
        {["项目 1", "项目 2", "项目 3", "项目 4", "项目 5", "项目 6"].map(
          (item, index) => (
            <div
              key={index}
              className={`p-4 text-white rounded ${theme.itemBackground}`}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function TwoColumnLayout({ theme }: { theme: ITheme }) {
  return (
    <div>
      <h1 className={`text-2xl font-bold mb-4 mt-8 ${theme.text}`}>两栏布局</h1>
      <div
        className={`flex flex-col md:flex-row p-4 rounded-lg shadow ${theme.cardBackground}`}
      >
        <div
          className={`md:w-2/3 p-4 text-white rounded ${theme.itemBackground}`}
        >
          主内容区域
        </div>
        <div
          className={`md:w-1/3 p-4 text-black rounded ${theme.cardBackground}`}
        >
          侧边栏
        </div>
      </div>
    </div>
  );
}

export default App;
