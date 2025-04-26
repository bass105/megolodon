import { motion } from 'framer-motion';

interface CategoryHeaderProps {
  title: string;
  icon: string;
  iconType?: 'brand' | 'regular';
  gradientFrom: string;
  gradientTo: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  icon,
  iconType = 'regular',
  gradientFrom,
  gradientTo,
}) => {
  return (
    <motion.div 
      className={`category-header backdrop-blur-sm bg-gradient-to-r ${gradientFrom}/80 ${gradientTo}/60 py-3 px-4 mb-3 relative border border-${gradientFrom.split('-')[1]}/30`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        boxShadow: `0 0 15px rgba(${gradientFrom.includes('blue') ? '0, 198, 255' : gradientFrom.includes('pink') ? '255, 0, 166' : gradientFrom.includes('green') ? '0, 255, 143' : '255, 230, 0'}, 0.2)`,
        backgroundColor: 'rgba(10, 20, 40, 0.7)'
      }}
    >
      <h3 className="font-orbitron text-lg font-bold flex items-center gap-3 relative">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-${gradientFrom.split('-')[1]} to-${gradientTo.split('-')[1]} flex items-center justify-center`}>
          <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${icon}`}></i>
        </div>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">{title}</span>
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
      </h3>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-white/5 to-transparent"></div>
      <div className="absolute -bottom-px right-1/4 left-0 h-px bg-gradient-to-r from-${gradientFrom.split('-')[1]}/70 to-transparent"></div>
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-${gradientFrom.split('-')[1]}/70 to-transparent"></div>
      <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-${gradientTo.split('-')[1]}/70 to-transparent"></div>
      <div className="absolute -right-px top-0 h-4 w-4 border-t border-r border-${gradientTo.split('-')[1]}/50"></div>
      <div className="absolute -left-px bottom-0 h-4 w-4 border-b border-l border-${gradientFrom.split('-')[1]}/50"></div>
    </motion.div>
  );
};

export default CategoryHeader;
