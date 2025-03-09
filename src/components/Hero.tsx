import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Code, Terminal, Database, Cloud, Twitter, Instagram, Youtube } from 'lucide-react';

export const Hero: React.FC = () => {
  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } }
  };

  const techIcons = [
    { Icon: Code, label: 'Development', color: '#3B82F6' },
    { Icon: Terminal, label: 'System Admin', color: '#10B981' },
    { Icon: Database, label: 'Database', color: '#8B5CF6' },
    { Icon: Cloud, label: 'Cloud', color: '#EC4899' },
  ];

  const socialIcons = [
    { Icon: Github, label: 'Github', href: 'https://github.com', color: '#333' },
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0077B5' },
    { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: '#1DA1F2' },
    { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: '#E4405F' },
    { Icon: Youtube, label: 'Youtube', href: 'https://youtube.com', color: '#FF0000' },
    { Icon: Mail, label: 'Email', href: 'mailto:your.email@example.com', color: '#EA4335' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border-2 border-primary rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border-2 border-primary rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] border-2 border-primary rounded-full"
        />
      </div>

      {/* Left side tech icons */}
      <motion.div 
        className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        {techIcons.map(({ Icon, label, color }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover="hover"
            variants={iconVariants}
            className="group relative"
            style={{ perspective: '1000px' }}
          >
            <motion.div 
              className="p-4 backdrop-blur-sm rounded-full transition-all duration-300 shadow-lg"
              whileHover={{ 
                backgroundColor: `${color}20`,
                boxShadow: `0 0 20px ${color}40`
              }}
              style={{ 
                backgroundColor: `${color}10`,
                border: `2px solid ${color}30`
              }}
            >
              <Icon className="w-8 h-8" style={{ color }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, rotateY: 90 }}
              whileHover={{ opacity: 1, x: 0, rotateY: 0 }}
              className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg whitespace-nowrap z-20"
              style={{ 
                backgroundColor: `${color}20`,
                color,
                backdropFilter: 'blur(8px)',
                transformOrigin: 'left'
              }}
            >
              {label}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right side social icons */}
      <motion.div 
        className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        {socialIcons.map(({ Icon, label, href, color }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="group relative"
            style={{ perspective: '1000px' }}
          >
            <motion.div 
              className="p-3 backdrop-blur-sm rounded-full transition-all duration-300"
              whileHover={{ 
                backgroundColor: `${color}20`,
                boxShadow: `0 0 20px ${color}40`
              }}
              style={{ 
                backgroundColor: `${color}10`,
                border: `2px solid ${color}30`
              }}
            >
              <Icon className="w-6 h-6" style={{ color }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20, rotateY: -90 }}
              whileHover={{ opacity: 1, x: 0, rotateY: 0 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg whitespace-nowrap"
              style={{ 
                backgroundColor: `${color}20`,
                color,
                backdropFilter: 'blur(8px)',
                transformOrigin: 'right'
              }}
            >
              {label}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="text-primary inline-block">
              <TypeAnimation
                sequence={[
                  'a System Administrator',
                  2000,
                  'a Web Developer',
                  2000,
                  'a Problem Solver',
                  2000,
                ]}
                repeat={Infinity}
                className="min-w-[300px] inline-block"
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Bridging the gap between infrastructure and development, creating
            <span className="text-primary"> seamless</span> and
            <span className="text-primary"> scalable</span> solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 group"
            >
              Let's Connect
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};