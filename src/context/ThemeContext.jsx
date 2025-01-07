import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    primary: 'blue',
    secondary: 'purple',
    accent: 'pink',
    background: {
      primary: 'bg-gray-50',
      secondary: 'bg-white',
      accent: 'bg-blue-50'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      accent: 'text-blue-600'
    },
    border: {
      primary: 'border-gray-200',
      secondary: 'border-blue-200',
      accent: 'border-purple-200'
    }
  },
  dark: {
    primary: 'blue',
    secondary: 'purple',
    accent: 'pink',
    background: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      accent: 'bg-blue-900'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      accent: 'text-blue-400'
    },
    border: {
      primary: 'border-gray-700',
      secondary: 'border-blue-700',
      accent: 'border-purple-700'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('transition-colors', 'duration-300');
    setIsLoading(false);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme: themes[theme] }}>
      <div className={`${themes[theme].background.primary} min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);