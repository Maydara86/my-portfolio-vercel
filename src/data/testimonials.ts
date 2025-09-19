export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'David Phillip',
    role: 'Fintech Design Leader',
    company: 'Cognism',
    content: 'I worked with Mohamed on a Design System initiative within a remote team and found him to be an excellent team player. He consistently delivered high-quality work on time and quickly adapted to new programming languages. His dedication and focus on efficiency had a significant positive impact on our project. Mohamed is a skilled and reliable front-end developer who would be a great asset to any team.',
    rating: 5,
    avatar: '/images/David_Phillip.jpeg',
    date: '2024-09-15'
  },
  {
    id: '2',
    name: 'Jamel Arfaoui',
    role: 'Journaliste et Rédacteur en Chef',
    company: 'Tunisie Telegraph',
    content: 'Travailler avec Mohamed a été une excellente expérience. Il a su comprendre nos besoins et livrer un site de news moderne, fluide et parfaitement adapté à notre audience. La mise en ligne s’est faite dans les délais, avec une attention particulière portée à la performance et à la simplicité d’utilisation. Nous sommes très satisfaits du résultat et recommandons vivement ses services !',
    rating: 5,
    avatar: '/images/Jamal.jpg',
    date: '2021-05-03'
  }
];