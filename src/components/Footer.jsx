import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Prince Kumar</h3>
            <p className="text-secondary mb-4">
              Full-stack developer passionate about creating innovative solutions 
              and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/prince04kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/prince04kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com/_.prince_kumar._" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-secondary hover:text-white transition-colors">About</a></li>
              <li><a href="#work" className="text-secondary hover:text-white transition-colors">Experience</a></li>
              <li><a href="#tech" className="text-secondary hover:text-white transition-colors">Tech Stack</a></li>
              <li><a href="#projects" className="text-secondary hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-secondary">
              <p>📍 RAIPUR, India</p>
              <p>🎓 NIT Raipur (Electronics & Communication)</p>
              <p>📧 prince04kumar@example.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-tertiary mt-8 pt-8 text-center">
          <p className="text-secondary">
            &copy; 2025 Prince Kumar. All rights reserved. Built with React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;