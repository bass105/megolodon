import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

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
      () => setTimeout(() => setStage(1), 800),
      () => setTimeout(() => setStage(2), 1200),
      () => setTimeout(() => onComplete(), 1500),
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
                className="space-y-6"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                      <GraduationCap size={32} className="text-blue-400" />
                    </div>
                  </div>
                </motion.div>
                <motion.h1
                  className="text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  MA Almanshuriyah
                </motion.h1>
                <motion.p
                  className="text-slate-300 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Madrasah Aliyah Modern & Unggul
                </motion.p>
              </motion.div>
            )}

            {stage === 1 && (
              <motion.div
                key="loading-progress"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6"
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                      <GraduationCap size={32} className="text-blue-400" />
                    </div>
                  </div>
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">MA Almanshuriyah</h1>
                <p className="text-slate-300 text-lg">Madrasah Aliyah Modern & Unggul</p>
                <motion.div
                  className="w-48 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </motion.div>
                <motion.p
                  className="text-slate-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Memuat Portfolio Digital...
                </motion.p>
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="ready"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                      <GraduationCap size={32} className="text-green-400" />
                    </div>
                  </div>
                </motion.div>
                <motion.h1
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Siap Menjelajahi
                </motion.h1>
                <motion.p
                  className="text-slate-300 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Portfolio & Informasi Digital
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full ${
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