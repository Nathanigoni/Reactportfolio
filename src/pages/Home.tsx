import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </motion.div>
  );
};

export default Home;