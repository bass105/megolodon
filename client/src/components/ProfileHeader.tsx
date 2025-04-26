import { motion } from 'framer-motion';

const ProfileHeader: React.FC = () => {
  return (
    <header className="w-full max-w-md px-4 pt-10 mb-8 flex flex-col items-center relative">
      {/* Profile Logos Container with cyberpunk styling */}
      <div className="w-full flex justify-center items-center gap-6 mb-6">
        {/* MA Logo */}
        <motion.div 
          className="cyber-bordered holographic-effect relative w-24 h-24 rounded-md overflow-hidden grid-bg animate-float shadow-neon-blue backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-navy/50 to-transparent backdrop-blur-sm"></div>
          <div className="relative z-10 w-full h-full p-1">
            <img 
              src="/attached_assets/ma%20logo.png" 
              alt="MA Almanshuriyah Logo" 
              className="w-full h-full object-contain" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>
          <div className="absolute inset-0 border border-neon-blue/30 rounded-md"></div>
          <div className="absolute h-1 w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-pulse"></div>
        </motion.div>
        
        {/* BES Logo */}
        <motion.div 
          className="cyber-bordered holographic-effect relative w-24 h-24 rounded-md overflow-hidden grid-bg animate-float shadow-neon-purple backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{ animationDelay: '0.5s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-navy/50 to-transparent backdrop-blur-sm"></div>
          <div className="relative z-10 w-full h-full p-2">
            <img 
              src="/attached_assets/aeefee3a-c0b7-43f3-b174-7d51fae795df_20231220_043108_0000.png" 
              alt="BES MA Logo" 
              className="w-full h-full object-contain" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>
          <div className="absolute inset-0 border border-neon-purple/30 rounded-md"></div>
          <div className="absolute h-1 w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-pulse"></div>
        </motion.div>
      </div>
      
      {/* Futuristic Divider */}
      <div className="w-full relative h-px mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-neon-blue/0 via-neon-blue/10 to-neon-blue/0 rounded-full blur-xl"></div>
      </div>
      
      {/* Title */}
      <motion.div
        className="w-full text-center relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="font-orbitron font-bold text-3xl text-center mb-1 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue animate-pulse-slow">
          LINK TAUTAN
        </h1>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-xl opacity-50 bg-gradient-to-r from-neon-blue/0 via-neon-blue/20 to-neon-blue/0 rounded-full"></div>
      </motion.div>
      
      <motion.h2 
        className="font-orbitron font-bold text-xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-white to-neon-green animate-pulse-slow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        MA ALMANSHURIYAH 2025
      </motion.h2>
      
      {/* Decorative Cyberpunk Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-cyber-dark/20 backdrop-blur-3xl"></div>
        <div className="absolute top-10 left-5 w-3 h-3 bg-neon-pink/70 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-20 right-10 w-2 h-2 bg-neon-yellow/70 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-5 left-1/4 w-4 h-1 bg-neon-blue/70 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-4 bg-neon-green/70 rounded-full animate-pulse blur-sm"></div>
      </div>
    </header>
  );
};

export default ProfileHeader;
