import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'about', label: '👤', title: 'About' },
    { id: 'work', label: '💼', title: 'Experience' },
    { id: 'projects', label: '🚀', title: 'Projects' },
    { id: 'contact', label: '📧', title: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-40">
          {/* Menu Items */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="flex flex-col space-y-3 mb-3"
              >
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="w-12 h-12 bg-tertiary text-white rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 flex items-center justify-center group relative"
                    title={item.title}
                  >
                    <span className="text-lg">{item.label}</span>
                    <span className="absolute right-14 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.title}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              ✨
            </motion.div>
          </motion.button>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="mt-3 w-12 h-12 bg-secondary/80 text-white rounded-full shadow-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center"
            title="Scroll to top"
          >
            ↑
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;