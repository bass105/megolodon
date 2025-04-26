import { motion } from 'framer-motion';

interface LinkCardProps {
  title: string;
  url: string;
  description: string;
  icon: string;
  iconType?: 'brand' | 'regular';
  iconBgFrom: string;
  iconBgTo: string;
  hoverShadow: string;
  iconColor: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  title,
  url,
  description,
  icon,
  iconType = 'regular',
  iconBgFrom,
  iconBgTo,
  hoverShadow,
  iconColor,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`cyberpunk2077-clip relative bg-gradient-to-r from-cyber-navy/80 to-cyber-blue/40 backdrop-blur-sm p-4 flex items-center gap-4 ${hoverShadow} mb-3 transition-all duration-300 group border border-${iconBgFrom.split('-')[1]}/20 overflow-hidden`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 15px rgba(${iconColor.includes('blue') ? '0, 198, 255' : iconColor.includes('pink') ? '255, 0, 166' : iconColor.includes('green') ? '0, 255, 143' : iconColor.includes('red') ? '255, 40, 60' : '255, 230, 0'}, 0.3)`,
        borderColor: `rgba(${iconColor.includes('blue') ? '0, 198, 255' : iconColor.includes('pink') ? '255, 0, 166' : iconColor.includes('green') ? '0, 255, 143' : iconColor.includes('red') ? '255, 40, 60' : '255, 230, 0'}, 0.5)`
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Cyberpunk 2077 Style Corner Elements */}
      <div className="absolute top-0 right-0 w-8 h-1 bg-cyberpunk-yellow"></div>
      <div className="absolute bottom-0 left-0 w-8 h-1 bg-cyberpunk-red"></div>
      
      {/* Scanning effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-in-out"></div>
      
      {/* Icon with hover effects */}
      <div className={`w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br ${iconBgFrom} ${iconBgTo} flex items-center justify-center group-hover:${iconBgTo} group-hover:${iconBgFrom} transition-all duration-300 shadow-inner relative overflow-hidden z-10`}>
        <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${icon} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyberpunk-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      </div>
      
      {/* Content section with Cyberpunk styling */}
      <div className="flex-grow">
        <h4 className="font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-cyberpunk-yellow group-hover:to-white transition-all duration-300">{title}</h4>
        <div className="flex items-center gap-1">
          <span className="text-[0.65rem] text-cyberpunk-yellow font-mono uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">[LINK]</span>
          <p className="text-sm text-gray-300 truncate">{description}</p>
        </div>
      </div>
      
      {/* Call to action with Cyberpunk styling */}
      <div className="flex flex-col items-center justify-center relative">
        <div className={`${iconColor} w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-cyber-navy/80 to-transparent group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
          <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
          
          {/* Light effect inside button */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* "ACCESS" text in Cyberpunk style */}
        <span className="text-[0.6rem] text-cyberpunk-yellow font-mono uppercase tracking-wider mt-1 opacity-70">ACCESS</span>
      </div>
    </motion.a>
  );
};

export default LinkCard;
