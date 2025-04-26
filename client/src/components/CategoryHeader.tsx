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
    <div className={`category-header bg-gradient-to-r ${gradientFrom} ${gradientTo} py-2 px-4 mb-3 relative`}>
      <h3 className="font-orbitron text-lg font-bold flex items-center gap-2">
        <i className={`fa${iconType === 'brand' ? 'b' : 's'} fa-${icon}`}></i>
        <span>{title}</span>
      </h3>
      <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-transparent to-transparent opacity-30"></div>
    </div>
  );
};

export default CategoryHeader;
