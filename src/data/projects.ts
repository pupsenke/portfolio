import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Цифровой дневник для ПТК НовГУ',
    description: 'Платформа находится в разработке в команде из 4-х человек. Работа была защищена, как курсовой проект и продолжается разработка, чтобы защитить работу, как дипломный проект ',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/pupsenke/college-diary-frontend.git',
    liveUrl: '',
    image: '/novgu-icon.png'
  },
  {
    id: 2,
    title: 'Потрфолио-сайт',
    description: 'Современный и адаптивный сайт-портфолио с анимациями, темной темой и оптимизацией производительности.',
    technologies: ['React', 'Vite', 'Framer Motion', 'CSS Modules'],
    githubUrl: 'https://github.com/pupsenke/portfolio.git',
    liveUrl: '',
    image: '/web-icon.png'
  }
];