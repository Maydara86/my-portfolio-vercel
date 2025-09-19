"use client";

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const BackToTop: React.FC = () => {
  const { theme, isRTL } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const positionClass = isRTL ? 'left-6' : 'right-6';

  const baseClasses = `fixed bottom-8 ${positionClass} z-50 rounded-full p-3 shadow-lg transition-all duration-200 transform ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
  }`;

  const variantClasses = theme === 'dark'
    ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200';

  return (
    <button
      aria-label="Back to top"
      title="Back to top"
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
