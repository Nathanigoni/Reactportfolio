import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      description: [
        'Developed custom web applications for small businesses and startups',
        'Collaborated with clients to understand requirements and deliver solutions',
        'Built responsive e-commerce platforms with payment integration',
        'Maintained and updated existing applications with new features'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe API']
    },
    {
      type: 'work',
      title: 'Junior Software Developer',
      company: 'TechStart Solutions',
      location: 'Lagos, Nigeria',
      period: '2022 - 2023',
      description: [
        'Contributed to the development of internal business applications',
        'Worked closely with senior developers on Java Spring Boot projects',
        'Participated in code reviews and team collaboration sessions',
        'Implemented responsive UI components using React and CSS frameworks'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Git']
    },
    {
      type: 'education',
      title: 'Software Engineering Program',
      company: 'NIIT',
      location: 'Lagos, Nigeria',
      period: '2021 - 2022',
      description: [
        'Completed comprehensive software engineering curriculum',
        'Learned full-stack development with emphasis on Java and web technologies',
        'Worked on capstone projects demonstrating end-to-end application development',
        'Gained experience with modern development tools and methodologies'
      ],
      technologies: ['Java', 'HTML/CSS', 'JavaScript', 'MySQL', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 hidden md:block" />
                
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {exp.type === 'work' ? (
                        <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-700 dark:text-slate-300 flex items-start space-x-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
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
      </div>
    </section>
  );
};

export default Experience;