import { motion } from 'framer-motion';

const ProfileHeader: React.FC = () => {
  return (
    <header className="w-full max-w-md px-4 pt-10 mb-8 flex flex-col items-center relative animate-float">
      {/* Profile Logo Container with cyberpunk styling */}
      <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden cyber-border grid-bg animate-pulse-slow shadow-neon-blue">
        <div className="absolute inset-1 rounded-full overflow-hidden holographic-effect">
          <img 
            src="/attached_assets/ma%20logo.png" 
            alt="MA Almanshuriyah Logo" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4/5">
          <img 
            src="/attached_assets/aeefee3a-c0b7-43f3-b174-7d51fae795df_20231220_043108_0000.png" 
            alt="BES MA Logo" 
            className="w-full" 
          />
        </div>
      </div>
      
      {/* Title */}
      <motion.h1 
        className="font-orbitron font-bold text-2xl text-center mb-1 neon-text tracking-wider"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        LINK TAUTAN
      </motion.h1>
      
      <motion.h2 
        className="font-orbitron font-bold text-xl text-center mb-4 neon-text-green"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        MA ALMANSHURIYAH 2025
      </motion.h2>
      
      {/* Decorative Cyberpunk Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-cyber-dark"></div>
        <div className="absolute top-10 left-5 w-3 h-3 bg-neon-pink rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-10 w-2 h-2 bg-neon-yellow rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 left-1/4 w-4 h-1 bg-neon-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-4 bg-neon-green rounded-full animate-pulse"></div>
      </div>
    </header>
  );
};

export default ProfileHeader;
