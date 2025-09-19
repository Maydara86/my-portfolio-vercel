'use client';

import React from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const { theme, language, toggleTheme, setLanguage, isRTL } = useTheme();
  const { t } = useTranslation();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
      theme === 'dark'
        ? 'bg-gray-900/80 border-gray-700'
        : 'bg-white/80 border-gray-200'
    } border-b transition-all duration-300`}>
      <div className={`container mx-auto px-6 py-4 flex ${
        isRTL ? 'flex-row-reverse' : 'flex-row'
      } justify-between items-center`}>

        {/* Logo */}
        <div className={`text-2xl font-bold bg-gradient-to-r ${
          theme === 'dark'
            ? 'from-blue-400 to-purple-400'
            : 'from-blue-600 to-purple-600'
        } bg-clip-text text-transparent`}>
          {t.name}
        </div>

        {/* Controls */}
        <div className={`flex ${
          isRTL ? 'flex-row-reverse' : 'flex-row'
        } items-center gap-4`}>

          {/* Language Switcher */}
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'fr' | 'ar')}
              className={`appearance-none ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 text-white'
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } border rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-pointer`}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
            <Globe className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} />
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              theme === 'dark'
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-100 hover:bg-gray-200'
            } transition-all duration-200 transform hover:scale-105`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;