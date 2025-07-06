import { MoonStar, SunMedium } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggleButton = ({ darkMode, setDarkMode }) => {
  // const [darkMode, setDarkMode] = useState(() => {
  //   return localStorage.getItem("theme") === "dark";
  // });

  // useEffect(() => {
  //   const root = document.body;
  //   if (darkMode) {
  //     root.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     root.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="hidden sm:flex hover:text-gray-800"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      type="button"
    >
     {darkMode ? <SunMedium /> :<MoonStar />}
    </button>
  );
};

export default ThemeToggleButton;
