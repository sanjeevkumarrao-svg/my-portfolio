import React from 'react';
import { Monitor, Moon, Sun, Zap } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { Theme } from '../types';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  const themes: { value: Theme; icon: React.ReactNode }[] = [
    { value: 'light', icon: <Sun className="w-5 h-5" /> },
    { value: 'dark', icon: <Moon className="w-5 h-5" /> },
    { value: 'cyberpunk', icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <div className="flex gap-2 bg-white/10 p-1 rounded-lg backdrop-blur-sm">
      {themes.map(({ value, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`p-2 rounded-md transition-all ${
            theme === value
              ? 'bg-primary text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};