"use client";

import { Theme } from "@/lib/types";
import { createContext, useContext, useEffect, useState } from "react";

type DarModeContextProviderType = {
  children: React.ReactNode;
};

type DarkThemeContextTypes = {
  theme: Theme;
  toggleTheme: () => void;
};

const DarkThemeContext = createContext<DarkThemeContextTypes | null>(null);

export const DarkThemeContextProvider = ({
  children,
}: DarModeContextProviderType) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <DarkThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkThemeContext);
  if (context === null) {
    throw new Error(
      "useDarkMode must be used within a DarkThemeContextProvider"
    );
  }
  return context;
};
