import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 85, color: 'bg-red-500' },
        { name: 'Spring Boot', level: 80, color: 'bg-green-500' },
        { name: 'Node.js', level: 75, color: 'bg-green-600' },
        { name: 'REST APIs', level: 85, color: 'bg-purple-500' },
        { name: 'MongoDB', level: 75, color: 'bg-green-700' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85, color: 'bg-orange-600' },
        { name: 'Docker', level: 70, color: 'bg-blue-400' },
        { name: 'AWS', level: 65, color: 'bg-yellow-600' },
        { name: 'Figma', level: 80, color: 'bg-pink-500' },
        { name: 'Postman', level: 85, color: 'bg-orange-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2.5 rounded-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices in software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;