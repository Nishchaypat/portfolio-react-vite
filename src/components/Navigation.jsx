import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, currentTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' }, 
    { name: 'Currently Working On?', href: '#workingon' },
    { name: 'Interest', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full transition-all duration-300 z-50 
    ${isScrolled 
      ? `${currentTheme.background.secondary} shadow-lg backdrop-blur-sm bg-opacity-90` 
      : 'bg-transparent'
    }`;

  return (
    <>
      <nav className={navbarClasses}>
        {/* Navigation content from previous code */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${currentTheme.text.accent} hover:scale-110 transition-transform duration-300`}>
                NP
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} 
                    transition-colors relative group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 
                    transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${currentTheme.background.accent} 
                  hover:ring-2 ring-blue-400 transition-all duration-300`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-blue-600" />
                ) : (
                  <Sun className="w-5 h-5 text-blue-400" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${currentTheme.background.accent} 
                  hover:ring-2 ring-blue-400 transition-all duration-300`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-blue-600" />
                ) : (
                  <Sun className="w-5 h-5 text-blue-400" />
                )}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${currentTheme.text.primary} hover:${currentTheme.text.accent}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute w-full transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } ${currentTheme.background.secondary}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md ${currentTheme.text.secondary} 
                  hover:${currentTheme.text.accent} hover:${currentTheme.background.accent} 
                  transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className={`block ${currentTheme.text.primary}`}>Hi, I'm</span>
              <span className="block text-blue-600">Nishchay Patel</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              AI Software Engineer & Full Stack Developer
            </p>
            <div className="mt-5 flex justify-center space-x-6">
              <a href="https://github.com/Nishchaypat" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/nishchay-pat" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="mailto:nishchay22.03.2003@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-8">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavigationBar;