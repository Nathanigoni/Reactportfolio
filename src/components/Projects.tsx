import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import ticketimg from '../images/ticket.png';
import tiktokimg from '../images/tick.png';
import taskimg from '../images/taskapp.png';
import realimage from '../images/realapp.png';


const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Spring Boot backend. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: ticketimg,
      tech: ['React', 'Spring Boot', 'MongoDB', 'Stripe API'],
        github: 'https://github.com/allcodez/Zoom-vroom-Frontend',
      demo: 'https://ecommerce-demo.nathanigoni.dev',
      date: '2024'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: taskimg,
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/Nathanigoni/connect-task-grid',
      demo: 'https://tasks.nathanigoni.dev',
      date: '2024'
    },
    {
      id: 4,
      title: 'Tik Tok clone',
      description: 'Full-featured blogging platform with rich text editor, comment system, and social sharing capabilities.',
      image: tiktokimg,
      tech: ['React', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/Nathanigoni/ticktock..clone',
      demo: 'https://blog.nathanigoni.dev',
      date: '2023'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{project.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </motion.a>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;