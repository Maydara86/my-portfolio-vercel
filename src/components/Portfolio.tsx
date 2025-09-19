'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';
import { projects } from '@/data/projects';
import Modal from './Modal';

const Portfolio = () => {
  const { theme, isRTL } = useTheme();
  const { t } = useTranslation();
  type Category = 'all' | 'web' | 'SaaS' | 'e-commerce' | 'mobile' | 'chrome-extension';
  const [filter, setFilter] = useState<Category>('all');

  const categories: Category[] = ['all', 'web', 'SaaS', 'e-commerce', 'mobile', 'chrome-extension'];
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  console.log("Selected Project:", selectedProject, isModalOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 fade-in ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.portfolioTitle}
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto fade-in`}>
            {t.portfolioDescription}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex ${
          isRTL ? 'flex-row-reverse' : 'flex-row'
        } justify-center gap-4 mb-12 flex-wrap`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${
          isRTL ? 'rtl' : 'ltr'
        }`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              } rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* Project Image */}
              <div className="relative overflow-hidden h-48 cursor-pointer bg-white flex items-center justify-center" onClick={() => openModal(project)}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className={`text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
                  {project.title}
                </h3>

                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } mb-4 leading-relaxed`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={`flex flex-row flex-wrap gap-2 mb-4`}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full cursor-default ${
                        theme === 'dark'
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-3 py-1 text-sm rounded-full cursor-default ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
                    }`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-blue-600 flex-row hover:text-blue-700 font-medium transition-colors duration-200 `}
                >
                  {t.viewProject}
                  <ExternalLink className={`w-4 h-4 ${isRTL ? 'scale-x-[-1]' : ''}`} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              No projects found for this category.
            </p>
          </div>
        )}
      </div>

        {/* Project Details Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedProject && (
            <div className={`flex flex-col md:flex-row gap-6`}>
                <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-md overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="mb-4 text-sm leading-relaxed">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full cursor-default ${
                        theme === 'dark'
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {t.viewProject}
                    <ExternalLink className={`w-4 h-4 ${isRTL ? 'scale-x-[-1]' : ''}`} />
                  </a>

                  {/* Github source code */}
                  {/* {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${theme === "dark" ? "text-gray-100 hover:text-gray-400" : "text-gray-600 hover:text-gray-800"} font-medium`}
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          )}
        </Modal>
    </section>
  );
};

export default Portfolio;