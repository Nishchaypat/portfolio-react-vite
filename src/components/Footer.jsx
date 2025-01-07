import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();
  return (
    <footer className={`${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center">
          <p className={`flex items-center ${currentTheme.text.secondary}`}>
            Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind
          </p>
          <p className={`mt-2 ${currentTheme.text.secondary}`}>
            © {new Date().getFullYear()} Nishchay Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;