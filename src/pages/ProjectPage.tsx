import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ProjectPage() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <div className="max-w-4xl mx-auto p-4">
        {/* Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold mb-4">Hello Dark Mode 🌗</h1>
        <p className="text-lg">
          This background and text should change when you toggle the button.
        </p>
      </div>
    </div>
  );
}
