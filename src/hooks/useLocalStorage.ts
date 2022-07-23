import { useEffect, useState } from 'react';


export function useLocalStorage(initialValue: string, key: string) {
  const storage = localStorage.getItem(key);
  if (storage) initialValue = storage

  const [theme, setTheme] = useState(initialValue);

  const toggleTheme:any = () => {
    const newTheme:string = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem(key, theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};