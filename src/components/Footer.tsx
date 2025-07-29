import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/nathanigoni',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/in/nathanigoni',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: 'mailto:nathan.igoni@example.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Nathan Igoni</span>
            </div>
            <p className="text-slate-400 mb-4">
              Full-stack developer passionate about creating innovative solutions 
              and building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-2">
              <p className="text-slate-400">
                <span className="font-medium">Email:</span> nathan.igoni@example.com
              </p>
              <p className="text-slate-400">
                <span className="font-medium">Location:</span> Lagos, Nigeria
              </p>
              <p className="text-slate-400">
                <span className="font-medium">Status:</span> Available for freelance
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-8 pt-8 text-center"
        >
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <span>&copy; 2024 Nathan Igoni.</span>
  
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;