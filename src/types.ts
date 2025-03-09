export type Theme = 'light' | 'dark' | 'cyberpunk';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}