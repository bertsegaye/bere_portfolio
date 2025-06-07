import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md transition"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};
