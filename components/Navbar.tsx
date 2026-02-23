import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.agency'), path: '/about' },
    { name: t('nav.talents'), path: '/talents' },
    { name: t('nav.staff'), path: '/staff' },
    { name: t('nav.academy'), path: '/academy' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border transition-colors duration-500">
        <div className="flex justify-between items-stretch h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center px-6 md:px-12 border-r border-brand-border">
            <Link to="/" className="group flex flex-col items-start justify-center">
              <h1 className="font-condensed text-3xl md:text-4xl text-brand-text tracking-tighter uppercase leading-none group-hover:opacity-70 transition-opacity duration-300">
                newtalentmanagement
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-end items-stretch">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`flex items-center px-8 border-l border-brand-border text-sm font-condensed uppercase tracking-widest hover:bg-brand-text hover:text-brand-bg transition-colors duration-300
                  ${location.pathname === link.path ? 'bg-brand-text text-brand-bg' : 'text-brand-text'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="flex items-center px-8 border-l border-brand-border bg-brand-text text-brand-bg text-sm font-condensed uppercase tracking-widest hover:bg-brand-bg hover:text-brand-text hover:underline transition-all duration-300"
            >
              {t('nav.cta')}
            </Link>

            {/* Language Selector */}
            <div className="flex flex-col justify-center px-6 border-l border-brand-border text-[10px] font-bold uppercase space-y-1">
              <button 
                onClick={() => setLanguage('es')}
                className={`transition-colors duration-300 ${language === 'es' ? 'text-brand-text underline' : 'text-brand-accent hover:text-brand-text'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`transition-colors duration-300 ${language === 'en' ? 'text-brand-text underline' : 'text-brand-accent hover:text-brand-text'}`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="flex items-center px-6 border-l border-brand-border text-brand-text hover:bg-brand-text hover:text-brand-bg transition-colors"
                aria-label="Toggle Theme"
            >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
                onClick={toggleTheme}
                className="flex items-center px-6 border-l border-brand-border text-brand-text"
            >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
                className="flex items-center px-6 border-l border-brand-border text-brand-text z-50 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-bg z-40 flex flex-col pt-24"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block border-b border-brand-border py-6 px-8 font-condensed text-4xl text-brand-text hover:pl-12 transition-all duration-300 uppercase"
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block border-b border-brand-border py-6 px-8 font-condensed text-4xl text-brand-text underline hover:pl-12 transition-all duration-300 uppercase"
            >
              {t('nav.cta')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;