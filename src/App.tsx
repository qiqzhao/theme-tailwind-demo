// src/App.js

import React, { useState } from "react";
import "./index.css"; // 确保引入 Tailwind CSS

function App() {
  const [theme, setTheme] = useState("light"); // 默认主题为浅色

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`container mx-auto p-4 ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800"
      }`}
    >
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        切换主题
      </button>
      <GridLayout theme={theme} />
      <TwoColumnLayout theme={theme} />
    </div>
  );
}

function GridLayout({ theme }: any) {
  return (
    <div>
      <h1
        className={`text-2xl font-bold mb-4 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        响应式网格布局
      </h1>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 p-4 rounded-lg shadow ${
          theme === "light" ? "bg-white" : "bg-gray-700"
        }`}
      >
        <div
          className={`p-4 text-white rounded ${
            theme === "light" ? "bg-blue-500" : "bg-blue-700"
          }`}
        >
          项目 1
        </div>
        <div
          className={`p-4 text-white rounded ${
            theme === "light" ? "bg-green-500" : "bg-green-700"
          }`}
        >
          项目 2
        </div>
        <div
          className={`p-4 text-white rounded ${
            theme === "light" ? "bg-red-500" : "bg-red-700"
          }`}
        >
          项目 3
        </div>
        <div
          className={`p-4 text-white rounded ${
            theme === "light" ? "bg-yellow-500" : "bg-yellow-700"
          }`}
        >
          项目 4
        </div>
        <div
          className={`p-4 text-white rounded ${
            theme === "light" ? "bg-purple-500" : "bg-purple-700"
          }`}
        >
          项目 5
        </div>
        <div
          className={`p-4 text-white rounded ${
            theme === "light" ? "bg-pink-500" : "bg-pink-700"
          }`}
        >
          项目 6
        </div>
      </div>
    </div>
  );
}

function TwoColumnLayout({ theme }: any) {
  return (
    <div>
      <h1
        className={`text-2xl font-bold mb-4 mt-8 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        两栏布局
      </h1>
      <div
        className={`flex flex-col md:flex-row p-4 rounded-lg shadow ${
          theme === "light" ? "bg-white" : "bg-gray-700"
        }`}
      >
        <div
          className={`md:w-2/3 p-4 text-white rounded ${
            theme === "light" ? "bg-blue-300" : "bg-blue-600"
          }`}
        >
          主内容区域
        </div>
        <div
          className={`md:w-1/3 p-4 text-black rounded ${
            theme === "light" ? "bg-gray-300" : "bg-gray-600"
          }`}
        >
          侧边栏
        </div>
      </div>
    </div>
  );
}

export default App;
