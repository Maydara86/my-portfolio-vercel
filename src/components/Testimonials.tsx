'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  const { theme, isRTL } = useTheme();
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide testimonials
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`py-20 ${theme === 'dark' ? 'bg-gray-700' : 'text-gray-50'}`}
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 fade-in ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t.testimonialsTitle}
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto fade-in`}>
            {t.testimonialsDescription}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out flex-row`}
              style={{
                transform: isRTL
                  ? `translateX(${currentTestimonial * 100}%)`
                  : `translateX(-${currentTestimonial * 100}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className={`${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } rounded-2xl p-8 lg:p-12 shadow-lg relative`}>

                    {/* Quote Icon */}
                    <div className={`absolute top-6 ${
                      isRTL ? 'right-6' : 'left-6'
                    } p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full`}>
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Rating Stars */}
                    <div className={`flex justify-center mb-6 mt-4`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className={`text-lg lg:text-xl ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    } mb-8 italic leading-relaxed text-center`}>
                      &quot;{testimonial.content}&quot;
                    </blockquote>

                    {/* Client Info */}
                    <div className={`flex items-center justify-center gap-4`}>
                      {testimonial.avatar && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <h4 className={`font-semibold text-lg ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>{testimonial.name}</h4>
                        <p className={`${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        } text-sm`}>
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isRTL ? 'right-4' : 'left-4'
            } ${
              theme === 'dark'
                ? 'bg-gray-800 hover:bg-gray-700 text-white shadow-gray-900'
                : 'bg-white hover:bg-gray-50 text-gray-900'
            } p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110`}
            aria-label="Previous testimonial"
          >
            {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isRTL ? 'left-4' : 'right-4'
            } ${
              theme === 'dark'
                ? 'bg-gray-800 hover:bg-gray-700 text-white shadow-gray-900'
                : 'bg-white hover:bg-gray-50 text-gray-900'
            } p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110`}
            aria-label="Next testimonial"
          >
            {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Dots Indicators */}
          <div className={`flex ${
            isRTL ? 'flex-row-reverse' : 'flex-row'
          } justify-center mt-8 gap-3`}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className="relative"
              >
                <div
                  className={`transition-all duration-200 rounded-full ${
                    currentTestimonial === index
                      ? 'w-8'
                      : 'w-3'
                  } h-3 ${
                    theme === 'dark'
                      ? 'bg-gray-600'
                      : 'bg-gray-300'
                  }`}
                />
                {currentTestimonial === index && (
                  <div
                    key={`progress-${currentTestimonial}`}
                    className="absolute inset-0 rounded-full overflow-hidden w-8"
                  >
                    <div
                      className="h-full w-full bg-gradient-to-r from-blue-600 to-purple-600"
                      style={{
                        animation: 'bulletProgress 5s linear forwards',
                        animationPlayState: isHovered ? 'paused' : 'running',
                        transformOrigin: isRTL ? 'right' : 'left'
                      }}
                      onAnimationEnd={() => {
                        if (!isHovered) {
                          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                        }
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;