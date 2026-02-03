"use client";

import { useEffect } from "react";

export function DarkModeScript() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return null;
}
