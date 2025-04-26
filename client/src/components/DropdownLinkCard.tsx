import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LinkItem {
  title: string;
  url: string;
  description: string;
  icon: string;
}

interface DropdownLinkCardProps {
  title: string;
  icon: string;
  iconType?: 'brand' | 'regular';
  iconBgFrom: string;
  iconBgTo: string;
  hoverShadow: string;
  iconColor: string;
  links: LinkItem[];
}

const DropdownLinkCard: React.FC<DropdownLinkCardProps> = ({
  title,
  icon,
  iconType = 'regular',
  iconBgFrom,
  iconBgTo,
  hoverShadow,
  iconColor,
  links,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-3 relative">
      {/* Main card that toggles dropdown */}
      <motion.div
        onClick={toggleDropdown}
        className={`cyberpunk-border cyberpunk2077-clip relative bg-gradient-to-r from-cyber-navy/80 to-cyber-blue/40 backdrop-blur-sm p-4 flex items-center gap-4 ${hoverShadow} transition-all duration-300 cursor-pointer group overflow-hidden`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0.9 }}
        animate={{ 
          opacity: 1,
          boxShadow: isOpen 
            ? `0 0 15px rgba(${iconColor.includes('blue') ? '0, 198, 255' : iconColor.includes('pink') ? '255, 0, 166' : iconColor.includes('green') ? '0, 255, 143' : iconColor.includes('red') ? '255, 40, 60' : '255, 230, 0'}, 0.5)` 
            : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Cyberpunk 2077 Style Elements */}
        <div className="absolute top-0 right-0 w-6 h-1 bg-cyberpunk-yellow"></div>
        <div className="absolute bottom-0 left-0 w-6 h-1 bg-cyberpunk-red"></div>
        
        {/* The icon */}
        <div className={`w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br ${iconBgFrom} ${iconBgTo} flex items-center justify-center group-hover:${iconBgTo} group-hover:${iconBgFrom} transition-all duration-300 relative`}>
          <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${icon} text-xl`}></i>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-full"></div>
        </div>
        
        {/* Text content */}
        <div className="flex-grow">
          <h4 className="font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-cyberpunk-yellow group-hover:to-white transition-all duration-300">{title}</h4>
          <div className="flex items-center text-sm">
            <span className="text-gray-300 mr-1">{links.length}</span>
            <span className="text-xs text-cyberpunk-yellow font-mono">LINK_AVAILABLE</span>
          </div>
        </div>
        
        {/* Arrow indicator */}
        <div className={`${iconColor} transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : ''} relative`}>
          <i className="fas fa-chevron-down"></i>
          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      {/* Dropdown content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-2 ml-4 space-y-2 border-l-2 pl-4 pt-1 pb-1"
            style={{ borderColor: `var(--${iconColor.includes('blue') ? 'neon-blue' : iconColor.includes('pink') ? 'neon-pink' : iconColor.includes('green') ? 'neon-green' : 'neon-yellow'})` }}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-card backdrop-blur-md bg-gradient-to-r from-cyber-navy/40 to-transparent rounded-md p-3 flex items-center gap-3 hover:${hoverShadow} transition-all duration-300 block border border-transparent hover:border-${iconColor.split('-')[1]}/30`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5, backgroundColor: 'rgba(13, 25, 48, 0.5)' }}
              >
                <div className={`w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-br ${iconBgFrom} ${iconBgTo} flex items-center justify-center text-white`}>
                  <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${link.icon || icon} text-sm`}></i>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-orbitron">{link.title}</h4>
                  <p className="text-xs text-gray-300 truncate">{link.description}</p>
                </div>
                <div className={`${iconColor} text-xs`}>
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownLinkCard;