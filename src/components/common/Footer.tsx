import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter, LightbulbIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border-t border-neutral-200 dark:border-neutral-700 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <LightbulbIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Truthium</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              Dedicated to debunking myths and spreading factual awareness in a fun, 
              interactive, and accessible way for curious minds everywhere.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:info@truthium.edu" 
                className="p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/myths', label: 'Myths Archive' },
                { to: '/quiz', label: 'Quiz' },
                { to: '/about', label: 'About' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Important Note</h3>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                Truthium strives for accuracy but is not a substitute for professional advice. 
                Content is for educational purposes only. Always consult qualified professionals for important decisions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            &copy; {currentYear} Truthium. All rights reserved. Made with ❤️ for curious minds.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;