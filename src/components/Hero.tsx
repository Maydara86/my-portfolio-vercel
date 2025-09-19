'use client';

import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
  const { theme, isRTL } = useTheme();
  const { t } = useTranslation();

  // Parallax effect for service cards
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach((card, index) => {
        const speed = 0.1 + (index * 0.05);
        (card as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: '🌐',
      titleKey: 'webApps',
      descKey: 'webAppsDesc',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🔌',
      titleKey: 'chromeExtensions',
      descKey: 'chromeExtensionsDesc',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '☁️',
      titleKey: 'cloudDeployment',
      descKey: 'cloudDeploymentDesc',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '📱',
      titleKey: 'mobileApps',
      descKey: 'mobileAppsDesc',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`container mx-auto px-6 py-20 mt-16`}>
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>

          {/* Text Content */}
          <div className={`${
            isRTL ? 'text-right' : 'text-left'
          } space-y-6 fade-in`}>
            <h1 className={`text-5xl lg:text-6xl font-bold leading-normal pb-2 bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-blue-400 via-purple-400 to-pink-400'
                : 'from-blue-600 via-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}>
              {t.heroTitle}
            </h1>

            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed max-w-2xl`}>
              {t.heroDescription}
            </p>

            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <button
                onClick={scrollToContact}
                className={`px-8 py-3 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-medium ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {t.getInTouch}
              </button>

              <button
                onClick={scrollToPortfolio}
                className={`px-8 py-3 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 border-gray-600 text-white'
                    : 'bg-white hover:bg-gray-50 border-gray-300 text-gray-900'
                } border-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-medium`}
              >
                {t.portfolioTitle}
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className={`${isRTL ? 'lg:order-1' : ''} relative`}>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                      : 'bg-white border border-gray-200 hover:bg-gray-50'
                  } shadow-lg hover:shadow-2xl group`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  } group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text transition-all duration-300`}>
                    {t[service.titleKey] || service.titleKey}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  } leading-relaxed`}>
                    {t[service.descKey] || service.descKey}
                  </p>

                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Decorative Background Elements */}
            <div className={`absolute -z-10 -top-8 ${
              isRTL ? 'left-8' : 'right-8'
            } w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse`}></div>

            <div className={`absolute -z-10 -bottom-8 ${
              isRTL ? 'right-8' : 'left-8'
            } w-24 h-24 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-bounce`}></div>

            {/* Floating geometric shapes */}
            <div className={`absolute -top-4 ${
              isRTL ? 'left-4' : 'right-4'
            } w-8 h-8 border-2 ${
              theme === 'dark' ? 'border-blue-400' : 'border-blue-600'
            } rotate-45 opacity-30 animate-spin`}></div>

            <div className={`absolute -bottom-6 ${
              isRTL ? 'right-12' : 'left-12'
            } w-6 h-6 ${
              theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
            } rounded-full opacity-40 animate-ping`}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${
          theme === 'dark' ? 'border-gray-400' : 'border-gray-600'
        } rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${
            theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'
          } rounded-full mt-2 animate-pulse`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;