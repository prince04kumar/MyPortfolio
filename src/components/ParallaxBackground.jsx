import React, { useEffect, useState } from 'react';

const ParallaxBackground = ({ children, speed = 0.5 }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20"
        style={{
          transform: `translateY(${offsetY * speed}px)`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;