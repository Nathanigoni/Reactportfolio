import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Lightbulb, Users } from 'lucide-react';

const AboutMe: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion',
      description: 'Love for creating digital solutions that make a difference'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Thriving in team environments and open communication'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm a passionate software engineer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Hello! I'm Nathan, a software engineer with a passion for crafting digital experiences 
                that make a real impact. My journey in technology began with curiosity about how things 
                work, and it has evolved into a dedication to building solutions that solve real-world problems.
              </p>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                With expertise in both frontend and backend development, I specialize in creating 
                full-stack applications using modern technologies like React, Java, and Spring Boot. 
                I'm particularly drawn to projects that challenge me to think creatively and push 
                the boundaries of what's possible.
              </p>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying at the forefront of industry trends.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">My Mission</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            To create technology that empowers people and businesses to achieve their goals, 
            while continuously growing as a developer and contributing to the tech community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;