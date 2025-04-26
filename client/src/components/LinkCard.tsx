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
      className={`link-card cyber-border bg-cyber-navy bg-opacity-80 rounded-md p-4 flex items-center gap-4 ${hoverShadow} mb-3 transition-all duration-300 group`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br ${iconBgFrom} ${iconBgTo} flex items-center justify-center group-hover:${iconBgTo} group-hover:${iconBgFrom} transition-all duration-300`}>
        <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${icon} text-xl`}></i>
      </div>
      <div className="flex-grow">
        <h4 className="font-orbitron font-semibold">{title}</h4>
        <p className="text-sm text-gray-300 truncate">{description}</p>
      </div>
      <div className={`${iconColor} group-hover:translate-x-1 transition-transform`}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </motion.a>
  );
};

export default LinkCard;
