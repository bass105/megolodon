import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [stage, setStage] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stages = [
      () => setTimeout(() => setStage(1), 1000),
      () => setTimeout(() => setStage(2), 2000),
      () => setTimeout(() => setStage(3), 2000),
      () => setTimeout(() => setStage(4), 2000),
      () => setTimeout(() => onComplete(), 2000),
    ];

    if (stage < stages.length) {
      const timer = stages[stage]();
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Skip button */}
        {showSkip && (
          <motion.button
            className="absolute top-8 right-8 px-4 py-2 text-sm text-slate-400 hover:text-white border border-slate-600 hover:border-blue-400 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
            onClick={handleSkip}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Intro
          </motion.button>
        )}

        {/* Main content */}
        <div className="text-center relative z-10">
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <motion.div
                  className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.p
                  className="text-slate-300 font-mono text-sm tracking-wider"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing...
                </motion.p>
              </motion.div>
            )}

            {stage === 1 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="space-y-6"
              >
                <motion.h1
                  className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  Welcome
                </motion.h1>
                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="name"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="space-y-4"
              >
                <motion.p
                  className="text-slate-400 text-lg font-light tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  to
                </motion.p>
                <motion.h2
                  className="text-5xl font-bold text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  MA Almanshuriyah
                </motion.h2>
                <motion.p
                  className="text-slate-300 text-xl font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Digital Portfolio & Information Hub
                </motion.p>
              </motion.div>
            )}

            {stage === 3 && (
              <motion.div
                key="features"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="space-y-8"
              >
                <motion.h3
                  className="text-3xl font-semibold text-slate-200 mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Experience the Modern Web
                </motion.h3>
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {[
                    { icon: "✨", text: "Interactive Design" },
                    { icon: "🚀", text: "Modern Interface" },
                    { icon: "💫", text: "Smooth Animations" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <p className="text-slate-300 text-sm">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === 4 && (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <motion.div
                  className="text-8xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎓
                </motion.div>
                <motion.h3
                  className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Ready to Explore?
                </motion.h3>
                <motion.div
                  className="flex items-center justify-center space-x-2 text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <span>Loading experience</span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ...
                  </motion.span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  stage >= i ? 'bg-blue-400' : 'bg-slate-600'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: stage >= i ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}