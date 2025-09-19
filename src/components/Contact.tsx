'use client';

import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, MapPin, Phone } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';

const Contact = () => {
  const { theme, isRTL } = useTheme();
  const { t } = useTranslation();

  const contactLinks = [
    {
      id: 'email',
      name: 'Email',
      descriptionKey: "contactInfoEmail",
      href: 'mailto:cherif.mohamed86@gmail.com',
      icon: Mail,
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      descriptionKey: "contactInfoLinkedIn",
      href: 'https://www.linkedin.com/in/mohamed-cherif-b29961a5/',
      icon: Linkedin,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      id: 'github',
      name: 'GitHub',
      descriptionKey: "contactInfoGithub",
      href: 'https://github.com/Maydara86',
      icon: Github,
      color: `${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-900'}`,
    },
    {
      id: 'upwork',
      name: 'Upwork',
      descriptionKey: "contactInfoUpwork",
      href: 'https://www.upwork.com/freelancers/mohamedcherif',
      icon: ExternalLink,
      color: 'bg-green-600 hover:bg-green-700',
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      key: t.contactInfoLocation,
      value: t.contactInfoLocationValue
    },
    {
      icon: Phone,
      key: t.contactInfoAvailabilityText,
      value: t.contactInfoAvailabilityValue
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 fade-in ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
            {t.contactTitle}
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto fade-in`}>
            {t.contactDescription}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <div className="space-y-4">
                  {additionalInfo.map((info) => (
                    <div key={info.key} className="flex items-center gap-3">
                      <div className={`p-2 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-blue-600 to-purple-600 rounded-lg`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {info.key}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className={`p-6 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } rounded-xl shadow-lg`}>
                <h4 className={`font-semibold mb-4 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        } ${
                  isRTL ? 'text-right' : 'text-left'
                }`}>
                  {t.contactInfoQuickStats}
                </h4>
                <div className="space-y-3">
                  <div className={`flex ${
                    isRTL ? 'flex-row-reverse' : 'flex-row'
                  } justify-between`}>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {t.contactInfoprojectsCompleted}
                    </span>
                    <span className={`font-semibold ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>15+</span>
                  </div>
                  <div className={`flex ${
                    isRTL ? 'flex-row-reverse' : 'flex-row'
                  } justify-between`}>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {t.yearsOfExperienceLabel}
                    </span>
                    <span className={`font-semibold ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>10+</span>
                  </div>
                  <div className={`flex ${
                    isRTL ? 'flex-row-reverse' : 'flex-row'
                  } justify-between`}>
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {t.contactInfoResponseTime}
                    </span>
                    <span className={`font-semibold ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>{'< 24h'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      target={link.id !== 'email' ? '_blank' : undefined}
                      rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                      className={`group flex items-center gap-4 p-6 ${
                        theme === 'dark'
                          ? 'bg-gray-900 hover:bg-gray-800 text-gray-400'
                          : 'bg-white hover:bg-gray-50 text-gray-600'
                      } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`p-4 ${link.color} text-white rounded-lg transition-colors duration-200`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors duration-200">
                          {link.name}
                        </h3>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm mb-1`}>
                          {t[link.descriptionKey as keyof typeof t]}
                        </p>
                      </div>

                      <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${isRTL ? 'scale-x-[-1]' : ''}`}>
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;