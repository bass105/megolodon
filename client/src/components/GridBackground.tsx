const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <svg 
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#00C6FF"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
          <radialGradient id="glow1" cx="20%" cy="35%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0D3A90" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#030018" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="75%" cy="44%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9D00FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#030018" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow3" cx="50%" cy="80%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#030018" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#glow1)" />
        <rect width="100%" height="100%" fill="url(#glow2)" />
        <rect width="100%" height="100%" fill="url(#glow3)" />
      </svg>
    </div>
  );
};

export default GridBackground;
