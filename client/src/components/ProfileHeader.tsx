import { motion } from 'framer-motion';
import maLogo from '../assets/ma logo.png';
import besLogo from '../assets/aeefee3a-c0b7-43f3-b174-7d51fae795df_20231220_043108_0000.png';

const ProfileHeader: React.FC = () => {
  return (
    <header className="w-full max-w-md px-4 pt-10 mb-8 flex flex-col items-center relative">
      {/* Cyberpunk 2077 Style Header Elements */}
      <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-cyberpunk-yellow via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-1 h-24 bg-gradient-to-b from-cyberpunk-red via-transparent to-transparent"></div>
      
      {/* Profile Logos Container with Cyberpunk 2077 styling */}
      <div className="w-full flex justify-center items-center gap-6 mb-6 relative">
        {/* Scanner line effect */}
        <div className="absolute inset-0 cyberpunk-scanline pointer-events-none z-20"></div>
        
        {/* MA Logo - Cyberpunk 2077 style */}
        <motion.div 
          className="relative w-24 h-24 cyberpunk2077-clip-reverse overflow-hidden animate-float shadow-neon-blue backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Cyberpunk 2077 decorations */}
          <div className="absolute top-0 left-0 w-8 h-1 bg-cyberpunk-red"></div>
          <div className="absolute bottom-0 right-0 w-8 h-1 bg-cyberpunk-yellow"></div>
          
          {/* Background with digital interference effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-navy to-transparent backdrop-blur-sm"></div>
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,198,255,0.1) 2px, rgba(0,198,255,0.1) 4px)" 
          }}></div>
          
          <div className="relative z-10 w-full h-full p-1">
            <img 
              src={maLogo}
              alt="MA Almanshuriyah Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(0,198,255,0.8)]" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>
          
          {/* Cyberpunk 2077 styled border effect */}
          <div className="absolute inset-0 border border-cyberpunk-yellow/50"></div>
          
          {/* Dynamic scan line */}
          <div className="absolute h-1 w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-cyberpunk-yellow to-transparent animate-pulse-slow"></div>
          
          {/* Status badge in Cyberpunk 2077 style */}
          <div className="absolute -bottom-1 -right-1 bg-cyberpunk-yellow text-[8px] font-mono text-black px-1 transform rotate-0 font-bold z-30">VERIFIED</div>
        </motion.div>
        
        {/* BES Logo - Cyberpunk 2077 style */}
        <motion.div 
          className="relative w-24 h-24 cyberpunk2077-clip overflow-hidden animate-float shadow-neon-purple backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{ animationDelay: '0.5s' }}
        >
          {/* Cyberpunk 2077 decorations */}
          <div className="absolute top-0 right-0 w-8 h-1 bg-cyberpunk-yellow"></div>
          <div className="absolute bottom-0 left-0 w-8 h-1 bg-cyberpunk-red"></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-navy to-transparent backdrop-blur-sm"></div>
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(255,0,166,0.1) 2px, rgba(255,0,166,0.1) 4px)" 
          }}></div>
          
          <div className="relative z-10 w-full h-full p-0">
            <img 
              src={besLogo}
              alt="BES MA Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,0,166,0.8)]" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>
          
          {/* Cyberpunk 2077 styled border effect */}
          <div className="absolute inset-0 border border-cyberpunk-red/50"></div>
          
          {/* Dynamic scan line */}
          <div className="absolute h-1 w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-cyberpunk-red to-transparent animate-pulse-slow"></div>
          
          {/* Status badge in Cyberpunk 2077 style */}
          <div className="absolute -bottom-1 -left-1 bg-cyberpunk-red text-[8px] font-mono text-white px-1 transform rotate-0 font-bold z-30">SECURED</div>
        </motion.div>
      </div>
      
      {/* Cyberpunk 2077 style divider with glitch effect */}
      <div className="w-full relative h-px mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-red via-cyberpunk-yellow to-cyberpunk-red"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyberpunk-red/0 via-cyberpunk-yellow/10 to-cyberpunk-red/0 rounded-full blur-xl"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-white/30 translate-y-[1px] opacity-30"></div>
      </div>
      
      {/* Header title in Cyberpunk 2077 style */}
      <motion.div 
        className="relative font-orbitron font-bold text-xl text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {/* Tag decoration element */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-cyberpunk-yellow tracking-widest">
          [SYSTEM//AUTHENTICATED]
        </div>
        
        {/* Main title with cyberpunk styling */}
        <h2 className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-yellow to-cyberpunk-red">
            MA ALMANSHURIYAH 2025
          </span>
          
          {/* Glitch animation element */}
          <div className="absolute -inset-1 bg-cyberpunk-yellow/10 blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Decorative corner elements in Cyberpunk 2077 style */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-cyberpunk-yellow"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-cyberpunk-red"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-cyberpunk-red"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-cyberpunk-yellow"></div>
        </h2>
        
        {/* Data connection indicator */}
        <div className="mt-1 flex justify-center items-center gap-1">
          <span className="w-1 h-1 bg-cyberpunk-yellow rounded-full animate-pulse-slow"></span>
          <span className="text-[8px] font-mono text-gray-400 tracking-widest uppercase">connection_stable</span>
          <span className="w-1 h-1 bg-cyberpunk-yellow rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></span>
        </div>
      </motion.div>
      
      {/* Decorative Cyberpunk Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-cyber-dark/20 backdrop-blur-3xl"></div>
        <div className="absolute top-10 left-5 w-3 h-3 bg-cyberpunk-red/70 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-20 right-10 w-2 h-2 bg-cyberpunk-yellow/70 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-5 left-1/4 w-4 h-1 bg-cyberpunk-yellow/70 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-10 right-1/3 w-1 h-4 bg-cyberpunk-red/70 rounded-full animate-pulse blur-sm"></div>
      </div>
    </header>
  );
};

export default ProfileHeader;
