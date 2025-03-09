import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
// import { ThemeToggle } from './components/ThemeToggle';
import { Chatbot } from './components/Chatbot';
import { ContactForm } from './components/ContactForm';
import { useThemeStore } from './store/themeStore';
import { experiences } from './data/experience';
import { projects } from './data/projects';
import { education } from './data/education';
import { GraduationCap } from 'lucide-react';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : theme === 'cyberpunk'
          ? 'bg-black text-neon-green'
          : 'bg-white text-gray-900'
    }`}>
      <CustomCursor />
      <Navbar />

      <main>
        <section id="home" className="bg-gradient-animated">
          <Hero />
        </section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-20 bg-grid relative"
        >
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-20 bg-dots relative"
        >
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.period}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {edu.description.map((item: string, i: number) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                  {edu.achievements && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Achievements</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {edu.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-20 bg-waves relative"
        >
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {exp.period}
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {exp.description.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-20 bg-circuit relative"
        >
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
            <ContactForm />
          </div>
        </motion.section>
      </main>

      <Chatbot />
    </div>
  );
}

export default App;