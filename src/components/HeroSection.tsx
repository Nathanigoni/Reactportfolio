import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    'Full-Stack Developer',
    'React Specialist',
    'Java Developer',
    'Problem Solver',
  ];

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      if (charIndex < texts[currentIndex].length) {
        setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(typingEffect);
  }, [charIndex, currentIndex, texts]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Nathan Igoni</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600 dark:text-slate-300">
              {currentText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with modern technologies. 
            Specializing in React, Java, and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Learn More About Me
            </motion.button>
            
            {/* <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-200"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </motion.a> */}
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/nathanigoni"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-slate-700 dark:text-slate-300"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/nathanigoni"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-slate-700 dark:text-slate-300"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              href="mailto:nathan.igoni@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-slate-700 dark:text-slate-300"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToAbout}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;