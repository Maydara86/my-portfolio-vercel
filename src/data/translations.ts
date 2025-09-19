export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  name: string;
  heroTitle: string;
  heroDescription: string;
  portfolioTitle: string;
  portfolioDescription: string;
  testimonialsTitle: string;
  testimonialsDescription: string;
  contactTitle: string;
  contactDescription: string;
  viewProject: string;
  downloadCV: string;
  getInTouch: string;
  aboutMe: string;
  mySkills: string;
  experience: string;
  education: string;
  services: string;
  contactInfoLocation: string;
  contactInfoLocationValue: string;
  contactInfoAvailabilityText: string;
  contactInfoAvailabilityValue: string;
  yearsOfExperienceLabel: string;
  yearsOfExperienceValue: string;
  responseTimeLabel: string;
  responseTimeValue: string;
  contactInfoEmail: string;
  contactInfoGithub: string;
  contactInfoLinkedIn: string;
  contactInfoUpwork: string;
  contactInfoQuickStats: string;
  contactInfoprojectsCompleted: string;
  contactInfoResponseTime: string;
  webApps: string;
  webAppsDesc: string;
  chromeExtensions: string;
  chromeExtensionsDesc: string;
  cloudDeployment: string;
  cloudDeploymentDesc: string;
  mobileApps: string;
  mobileAppsDesc: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    name: "Mohamed Cherif",
    heroTitle: "Full-Stack Web Developer",
    heroDescription: "Passionate about creating modern, scalable web applications with cutting-edge technologies. I bring ideas to life through clean code and exceptional user experiences.",
    portfolioTitle: "My Work",
    portfolioDescription: "Here are some of the projects I've built",
    testimonialsTitle: "What Clients Say",
    testimonialsDescription: "Don't just take my word for it - here's what my clients have to say",
    contactTitle: "Let's Connect",
    contactDescription: "Ready to work together? Get in touch!",
    viewProject: "View Project",
    downloadCV: "Download CV",
    getInTouch: "Get in Touch",
    aboutMe: "About Me",
    mySkills: "My Skills",
    experience: "Experience",
    education: "Education",
    services: "Services",
    contactInfoLocation: "Location",
    contactInfoLocationValue: "Ariana, Tunisia",
    contactInfoAvailabilityText: "Available",
    contactInfoAvailabilityValue: "24/7 for projects",
    yearsOfExperienceLabel: "Years of Experience",
    yearsOfExperienceValue: "10+",
    responseTimeLabel: "Response Time",
    responseTimeValue: "< 24 hours",
    contactInfoEmail: "Send me an email",
    contactInfoGithub: "Check out my code",
    contactInfoLinkedIn: "Connect with me professionally",
    contactInfoUpwork: "Hire me on Upwork",
    contactInfoQuickStats: "Quick Stats",
    contactInfoprojectsCompleted: "Projects Completed",
    contactInfoResponseTime: "Response Time",
    webApps: "Web Apps",
    webAppsDesc: "Modern, responsive web applications",
    chromeExtensions: "Chrome Extensions",
    chromeExtensionsDesc: "Browser extensions and plugins",
    cloudDeployment: "Cloud Deployment",
    cloudDeploymentDesc: "Scalable cloud infrastructure",
    mobileApps: "Mobile Apps",
    mobileAppsDesc: "iOS and Android applications"
  },
  fr: {
    name: "Mohamed Cherif",
    heroTitle: "Développeur Web Full-Stack",
    heroDescription: "Passionné par la création d'applications web modernes et évolutives avec des technologies de pointe. Je donne vie aux idées grâce à du code propre et des expériences utilisateur exceptionnelles.",
    portfolioTitle: "Mon Travail",
    portfolioDescription: "Voici quelques projets que j'ai réalisés",
    testimonialsTitle: "Ce Que Disent Les Clients",
    testimonialsDescription: "Ne vous fiez pas seulement à ma parole - voici ce que mes clients ont à dire",
    contactTitle: "Connectons-Nous",
    contactDescription: "Prêt à travailler ensemble ? Contactez-moi !",
    viewProject: "Voir le Projet",
    downloadCV: "Télécharger CV",
    getInTouch: "Me Contacter",
    aboutMe: "À Propos",
    mySkills: "Mes Compétences",
    experience: "Expérience",
    education: "Formation",
    services: "Services",
    contactInfoLocation: "Localisation",
    contactInfoLocationValue: "Ariana, Tunisie",
    contactInfoAvailabilityText: "Disponibilité",
    contactInfoAvailabilityValue: "24/7 pour des projets",
    yearsOfExperienceLabel: "Années d'Expérience",
    yearsOfExperienceValue: "10+",
    responseTimeLabel: "Temps de Réponse",
    responseTimeValue: "< 24 heures",
    contactInfoEmail: "Envoyez-moi un email",
    contactInfoGithub: "Découvrez mon code",
    contactInfoLinkedIn: "Connectez-vous avec moi professionnellement",
    contactInfoUpwork: "Engagez-moi sur Upwork",
    contactInfoQuickStats: "Statistiques Rapides",
    contactInfoprojectsCompleted: "Projets Réalisés",
    contactInfoResponseTime: "Temps de Réponse",
    webApps: "Applications Web",
    webAppsDesc: "Applications web modernes et responsives",
    chromeExtensions: "Extensions Chrome",
    chromeExtensionsDesc: "Extensions et plugins navigateur",
    cloudDeployment: "Déploiement Cloud",
    cloudDeploymentDesc: "Infrastructure cloud évolutive",
    mobileApps: "Apps Mobile",
    mobileAppsDesc: "Applications iOS et Android"
  },
  ar: {
    name: "محمد الشريف",
    heroTitle: "مطور ويب متكامل",
    heroDescription: "شغوف بإنشاء تطبيقات ويب حديثة وقابلة للتوسع باستخدام أحدث التقنيات. أجعل الأفكار تأتي إلى الحياة من خلال الكود النظيف وتجارب المستخدم الاستثنائية.",
    portfolioTitle: "أعمالي",
    portfolioDescription: "إليكم بعض المشاريع التي قمت ببنائها",
    testimonialsTitle: "ما يقوله العملاء",
    testimonialsDescription: "لا تأخذ كلامي فقط - إليك ما يقوله عملائي",
    contactTitle: "لنتواصل",
    contactDescription: "مستعد للعمل معاً؟ تواصل معي!",
    viewProject: "عرض المشروع",
    downloadCV: "تحميل السيرة الذاتية",
    getInTouch: "تواصل معي",
    aboutMe: "نبذة عني",
    mySkills: "مهاراتي",
    experience: "الخبرة",
    education: "التعليم",
    services: "الخدمات",
    contactInfoLocation: "الموقع",
    contactInfoLocationValue: "أريانة، تونس",
    contactInfoAvailabilityText: "متاح",
    contactInfoAvailabilityValue: "24/7 للمشاريع",
    yearsOfExperienceLabel: "سنوات الخبرة",
    yearsOfExperienceValue: "10+",
    responseTimeLabel: "زمن الاستجابة",
    responseTimeValue: "< 24 ساعة",
    contactInfoEmail: "أرسل لي بريدًا إلكترونيًا",
    contactInfoGithub: "اطلع على شيفرتي البرمجية",
    contactInfoLinkedIn: "تواصل معي مهنيًا",
    contactInfoUpwork: "استأجرني على Upwork",
    contactInfoQuickStats: "إحصائيات سريعة",
    contactInfoprojectsCompleted: "المشاريع المكتملة",
    contactInfoResponseTime: "زمن الاستجابة",
    webApps: "تطبيقات الويب",
    webAppsDesc: "تطبيقات ويب حديثة ومتجاوبة",
    chromeExtensions: "ملحقات كروم",
    chromeExtensionsDesc: "ملحقات وإضافات المتصفح",
    cloudDeployment: "النشر السحابي",
    cloudDeploymentDesc: "بنية تحتية سحابية قابلة للتوسع",
    mobileApps: "تطبيقات الهاتف",
    mobileAppsDesc: "تطبيقات iOS و Android"
  }
};