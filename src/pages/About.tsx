import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Coffee, Code2, Heart, Lightbulb, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales with your business needs'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Passion',
      description: 'Genuine love for creating digital solutions that make a real difference'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative approaches to problem-solving'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'Thriving in team environments with open communication and shared goals'
    }
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '25+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Full-Stack Developer',
      company: 'Freelance',
      description: 'Expanded into full-stack development, working with various clients on complex web applications.'
    },
    {
      year: '2023',
      title: 'Junior Developer',
      company: 'TechStart Solutions',
      description: 'Gained professional experience in software development and team collaboration.'
    },
    {
      year: '2022',
      title: 'Software Engineering Graduate',
      company: 'NIIT',
      description: 'Completed comprehensive software engineering program with focus on modern web technologies.'
    },
    {
      year: '2021',
      title: 'Started Journey',
      company: 'Self-Taught',
      description: 'Began learning programming with HTML, CSS, and JavaScript, building first projects.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm a passionate software engineer dedicated to creating innovative digital solutions
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Hello, I'm Nathan Igoni
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  I'm a software engineer with a passion for creating innovative digital experiences. 
                  My journey in technology began with curiosity about how things work, and it has 
                  evolved into a dedicated career focused on building solutions that solve real-world problems.
                </p>
                <p>
                  With expertise spanning both frontend and backend development, I specialize in 
                  creating full-stack applications using modern technologies like React, Java, and 
                  Spring Boot. I'm particularly drawn to projects that challenge me to think creatively 
                  and push the boundaries of what's possible.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying at the forefront of industry trends.
                </p>
              </div>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </motion.a>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Code2 className="h-24 w-24 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-800" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white text-center mb-12">
            My Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white text-center mb-12">
            My Journey
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative md:pl-20">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 hidden md:block" />
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {item.company}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <Target className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">My Mission</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            To create technology that empowers people and businesses to achieve their goals, 
            while continuously growing as a developer and contributing to the tech community. 
            I believe in building solutions that are not just functional, but also meaningful 
            and impactful.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;