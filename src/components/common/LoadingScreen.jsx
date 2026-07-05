/* eslint-disable react-hooks/set-state-in-effect */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stars, setStars] = useState([]);

  // توليد النجوم مرة واحدة فقط عند التحميل
  useEffect(() => {
    const generatedStars = [];
    for (let i = 0; i < 30; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    // محاكاة التحميل
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center"
        >
          {/* الخلفية مع تأثير نجوم متحركة */}
          <div className="absolute inset-0 overflow-hidden">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                initial={{ 
                  x: star.x + '%',
                  y: star.y + '%',
                  scale: 0
                }}
                animate={{
                  y: [null, -50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                }}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: star.x + '%',
                  top: star.y + '%',
                }}
              />
            ))}
          </div>

          {/* المحتوى الأساسي */}
          <div className="relative z-10 text-center">
            {/* أنيميشن SVG */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <svg
                className="w-32 h-32 mx-auto"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#6C63FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, rotate: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.path
                  d="M35 50L45 60L65 40"
                  stroke="#6C63FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </svg>
            </motion.div>

            {/* النص */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-primary">Fady</span> Ashraf
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                Software Developer
              </p>
            </motion.div>

            {/* شريط التحميل */}
            <div className="mt-8 h-1 bg-primary/30 rounded-full overflow-hidden max-w-xs mx-auto w-64">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* نسبة التحميل */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-2 text-xs text-gray-500"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;