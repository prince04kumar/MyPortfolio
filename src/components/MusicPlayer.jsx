import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  // You can add your own ambient music URLs here
  const tracks = [
    {
      name: "Ambient Focus",
      url: "https://www.soundjay.com/misc/sounds/typing.wav" // Replace with actual ambient music
    }
  ];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.log("Audio play failed:", e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Set low volume for ambient music
      audio.loop = true;
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-8 z-40"
        >
          <div className="bg-tertiary/90 backdrop-blur-sm rounded-lg p-3 shadow-lg flex items-center space-x-3">
            <motion.button
              onClick={togglePlay}
              className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
              >
                {isPlaying ? '⏸️' : '🎵'}
              </motion.div>
            </motion.button>
            
            <div className="text-white text-sm">
              <div className="font-medium">Ambient Music</div>
              <div className="text-xs text-secondary">
                {isPlaying ? 'Playing...' : 'Paused'}
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="text-secondary hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <audio ref={audioRef} preload="none">
            <source src={tracks[0]?.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicPlayer;