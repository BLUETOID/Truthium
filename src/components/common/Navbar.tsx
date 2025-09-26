import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, LightbulbIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
      scrolled 
        ? 'bg-white/95 dark:bg-neutral-900/95 shadow-card border-b border-neutral-200/50 dark:border-neutral-800/50 py-3' 
        : 'bg-white/10 dark:bg-neutral-900/10 py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-xl group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-200">
              <LightbulbIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-200 ${
              scrolled 
                ? 'text-neutral-900 dark:text-white' 
                : 'text-white'
            }`}>Truthium</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/myths', label: 'Myths Archive' },
              { to: '/quiz', label: 'Quiz' },
              { to: '/about', label: 'About' },
            ].map(({ to, label }) => (
              <Link 
                key={to}
                to={to} 
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200'
                  : 'bg-white/10 text-white'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-card transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/myths', label: 'Myths Archive' },
            { to: '/quiz', label: 'Quiz' },
            { to: '/about', label: 'About' },
          ].map(({ to, label }) => (
            <Link 
              key={to}
              to={to} 
              className="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 py-3 px-4 rounded-lg font-medium transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;