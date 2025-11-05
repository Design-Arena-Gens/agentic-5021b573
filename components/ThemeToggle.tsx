"use client";

import React from "react";

const STORAGE_KEY = "toduu-theme";

function applyTheme(theme: "light" | "dark") {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.setAttribute("data-theme", theme);
}

function getPreferred(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
  if (stored) return stored;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  return mq.matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(getPreferred());

  React.useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  React.useEffect(() => {
    // Apply immediately on mount (SSR hydration)
    applyTheme(getPreferred());
  }, []);

  return (
    <button
      aria-label="Toggle theme"
      className="btn btn-ghost"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
