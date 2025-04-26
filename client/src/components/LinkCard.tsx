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
      className={`link-card bg-gradient-to-r from-cyber-navy/80 to-cyber-blue/40 backdrop-blur-sm rounded-md p-4 flex items-center gap-4 ${hoverShadow} mb-3 transition-all duration-300 group border border-${iconBgFrom.split('-')[1]}/20`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 15px rgba(${iconColor.includes('blue') ? '0, 198, 255' : iconColor.includes('pink') ? '255, 0, 166' : iconColor.includes('green') ? '0, 255, 143' : '255, 230, 0'}, 0.3)`,
        borderColor: `rgba(${iconColor.includes('blue') ? '0, 198, 255' : iconColor.includes('pink') ? '255, 0, 166' : iconColor.includes('green') ? '0, 255, 143' : '255, 230, 0'}, 0.5)`
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br ${iconBgFrom} ${iconBgTo} flex items-center justify-center group-hover:${iconBgTo} group-hover:${iconBgFrom} transition-all duration-300 shadow-inner mr-4`}>
        <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${icon} text-xl`}></i>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-full"></div>
      </div>
      
      {/* Animated light effect */}
      <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
        <div className="absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-0 -right-1 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className={`w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br ${iconBgFrom} ${iconBgTo} flex items-center justify-center group-hover:${iconBgTo} group-hover:${iconBgFrom} transition-all duration-300 shadow-inner`}>
        <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${icon} text-xl`}></i>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-full"></div>
      </div>
      
      <div className="flex-grow">
        <h4 className="font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-white group-hover:to-white transition-all duration-300">{title}</h4>
        <p className="text-sm text-gray-300 truncate">{description}</p>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <div className={`${iconColor} w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-cyber-navy/80 to-transparent group-hover:scale-90 transition-all duration-300`}>
          <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform duration-300"></i>
        </div>
        <span className="text-xs text-gray-400 mt-1 opacity-70">Klik</span>
      </div>
    </motion.a>
  );
};

export default LinkCard;
