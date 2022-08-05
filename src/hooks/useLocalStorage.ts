import { useEffect, useState } from "react";

export default function useLocalStorage(initialValue: string, key: string) {
  let value: string = initialValue;
  const storage: string | null = localStorage.getItem(key);
  if (storage) value = storage;

  const [theme, setTheme] = useState(value);

  const toggleTheme: any = () => {
    const newTheme: string = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem(key, theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
}
