import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import ticketimg from '../images/ticket.png';
import tiktokimg from '../images/tick.png';
import realimage from '../images/realapp.png';
import taskimg from '../images/taskapp.png';




const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Tickecting App',
        image: ticketimg,
      tech: ['React', 'TypeScript', 'Spring Boot', 'MongoDB', 'Stripe API', 'JWT', 'Docker'],
      github: 'https://github.com/allcodez/Zoom-vroom-Frontend',
      date: '2024',
      status: 'Completed',
      category: 'Full-Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Node.js, and Socket.io for real-time communication.',
      longDescription: 'A modern task management solution that enables teams to collaborate efficiently. Features include real-time task updates, drag-and-drop kanban boards, file attachments, commenting system, and team member assignment. The application uses Socket.io for real-time communication and PostgreSQL for data persistence.',
      image: taskimg,
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Express.js', 'JWT', 'AWS S3'],
      github: 'https://github.com/Nathanigoni/connect-task-grid',
      demo: 'https://tasks.nathanigoni.dev',
      date: '2024',
      status: 'Completed',
      category: 'Full-Stack'
    },
    {
      id: 4,
      title: 'Tik Tok clone',
      description: 'Full-featured blogging platform with rich text editor, comment system, and social sharing capabilities. Includes user authentication, post management, and SEO optimization.',
  image: tiktokimg,
  tech: ['html', 'css'],
       github: 'https://github.com/Nathanigoni/ticktock..clone',
  demo: 'https://blog.nathanigoni.dev',
  date: '2023',
  status: 'Completed',
  category: 'Front End'
},
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with advanced search filters, virtual tours, and agent management system. Built with modern web technologies for optimal performance.',
      longDescription: 'A comprehensive real estate platform that connects buyers, sellers, and agents. Features include advanced property search with multiple filters, virtual tour integration, agent profiles, property comparison tools, and mortgage calculator.',
      image: realimage,
      tech: ['React', 'Node.js', 'MySQL', 'Google Maps API', 'AWS', 'Stripe', 'JWT'],
      github: 'https://github.com/Nathanigoni/nestfinder-nexus',
      demo: 'https://realestate.nathanigoni.dev',
      date: '2023',
      status: 'In Progress',
      category: 'Full-Stack'
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive showcase of my development work, from full-stack applications to frontend experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm rounded-full">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                  
                  </div>
                  
                  <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                    <Code2 className="h-4 w-4" />
                    <span className="text-sm">{project.tech.length} techs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-lg opacity-90 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;