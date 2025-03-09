import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'education', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: User, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-primary"
          >
            Portfolio
          </motion.div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(({ id, icon: Icon, label }) => (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    activeSection === id
                      ? 'text-primary'
                      : 'hover:text-primary'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};