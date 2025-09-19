export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: string[];
  category: Array<'web' | 'mobile' | 'SaaS' | 'e-commerce' | 'chrome-extension'>;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Fourpins - E-Commerce Platform',
    description: 'Modern e-commerce solution with Wordpress and WooCommerce, Flatesome theme, and Elementor builder, Newsletter subscription, and SEO optimization',
    image: '/images/fourpins.jpg',
    link: 'https://www.fourpins.com.tn/',
    github: '',
    technologies: ['Wordpress', 'WooCommerce', 'Elementor', 'Flatsome', 'PHP', 'MySQL'],
    category: ['web', 'e-commerce']
  },
  {
    id: 'news-website',
    title: 'Tunisie Telegraph - News Website',
    description: 'Modern Tunisian news website built with Wordpress and Newspaper theme, Elementor builder, Newsletter subscription, and SEO optimization',
    image: '/images/tunisie-telegraph.jpg',
    link: 'https://tunisie-telegraph.com/',
    github: '',
    technologies: ['Wordpress', 'Newspaper', 'Elementor', 'PHP', 'MySQL', 'SEO', 'i18n'],
    category: [ 'web' ]
  },
  {
    id: 'etl-app',
    title: 'MakeItOne an ETL app',
    description: 'A fully fledge ETL application developed with React and Spring Boot, it includes a designer canvas page that supports nodes drag & drop, wiring nodes, data manipulation, save and export feature and so much more',
    image: '/images/MakeItOne.jpg',
    // link: 'https://www.linkedin.com/company/istars/',
    link: 'http://istars.net/',
    github: '',
    technologies: ['React', 'react-flow', 'Material-UI', 'redux-toolkit', 'Spring Boot', 'Microsoft SQL Server'],
    category: ['web', 'SaaS']
  },
  {
    id: 'kaspr',
    title: 'Kaspr an all in one lead prospecting tool',
    description: 'Kaspr is a chrome extension that helps you find and verify B2B email addresses directly from LinkedIn profiles. Kaspr\'s Dashoboard is a web application that allows you to manage your leads, campaigns, and account settings. Kaspr\'s Backoffice is a web application that allows staff members to manage their users, subscriptions, and credits.',
    image: '/images/kaspr.jpg',
    link: 'https://www.kaspr.io/',
    github: '',
    technologies: ['react', 'express.js', 'Mongodb', 'Various APIs integrations'],
    category: ['web', 'chrome-extension', 'SaaS']
  },
  {
    id: 'cognism',
    title: 'Cognism\'s front-end Design System',
    description: 'Design System for all Cognism front-end projects, the library is composed of 40+ high-quality components, they were designed in Figma, built with React, showcased in Storybook and delivered through npm packages',
    image: '/images/cognism.png',
    link: 'https://www.cognism.com/',
    github: '',
    technologies: ['React', 'CSS', 'Storybook', 'npm', 'Figma'],
    category: ['web', 'SaaS']
  },
  {
    id: 'satisfactory',
    title: 'SatisFactory feedback management tool',
    description: 'SatisFactory is a solution specialized in Feedback Management, it helps businesses collect, analyze, and act on customer feedback to improve customer experience and operational performance',
    image: '/images/satisfactory.png',
    link: 'https://www.satisfactory.fr/',
    github: '',
    technologies: ['PHP', 'Zend', 'MySQL', 'Angular', 'Various APIs integrations'],
    category: ['web', 'SaaS']
  }
];