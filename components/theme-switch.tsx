"use client";

import { useDarkMode } from "@/context/dark-theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <>
      <button
        className="fixed bottom-5 right-5 w-12 h-12 bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsMoon /> : <BsSun />}
      </button>
    </>
  );
}
