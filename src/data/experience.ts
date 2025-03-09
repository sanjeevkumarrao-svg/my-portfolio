import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    title: 'System Administrator',
    company: 'Cedcoss Technologies',
    period: '2022 - 2024',
    description: [
      'Managed and maintained Linux and Windows server infrastructure',
      'Implemented automated deployment solutions using Ansible',
      'Handled network security and firewall configurations',
      'Managed cloud infrastructure on AWS and Azure',
    ],
    technologies: ['Linux', 'Windows Server', 'AWS', 'Azure', 'Ansible', 'Docker'],
  },
  {
    title: 'Junior Web Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description: [
      'Developed responsive web applications using React',
      'Created RESTful APIs using Node.js and Express',
      'Implemented modern UI/UX designs',
      'Worked with various frontend technologies and frameworks',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'],
  },
];