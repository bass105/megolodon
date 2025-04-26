import { useEffect, useRef } from 'react';

const CyberpunkEffects: React.FC = () => {
  const effectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!effectsRef.current) return;
      
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      const elements = effectsRef.current.querySelectorAll('.cyberpunk-element');
      
      elements.forEach((elem, index) => {
        const speed = (index + 1) * 0.2;
        (elem as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Add text glitch effect on hover
  useEffect(() => {
    const glitchText = (text: HTMLElement) => {
      const originalText = text.textContent || '';
      let iterations = 0;
      
      const interval = setInterval(() => {
        if (iterations >= 2) {
          clearInterval(interval);
          text.textContent = originalText;
          return;
        }
        
        text.textContent = originalText
          .split('')
          .map((char) => {
            if (Math.random() < 0.25 && char.trim() !== '') {
              const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('');
        
        iterations += 1;
      }, 100);
    };

    const orbitronTexts = document.querySelectorAll('.font-orbitron');
    
    orbitronTexts.forEach(text => {
      text.addEventListener('mouseover', () => glitchText(text as HTMLElement));
    });
    
    return () => {
      orbitronTexts.forEach(text => {
        text.removeEventListener('mouseover', () => glitchText(text as HTMLElement));
      });
    };
  }, []);

  return (
    <div ref={effectsRef} className="fixed inset-0 z-0 pointer-events-none">
      {/* Cyberpunk Decorative Elements */}
      <div className="cyberpunk-element fixed top-0 right-0 w-1/2 h-1 bg-gradient-to-l from-neon-blue to-transparent"></div>
      <div className="cyberpunk-element fixed top-0 left-0 w-1 h-1/3 bg-gradient-to-b from-neon-pink to-transparent"></div>
      <div className="cyberpunk-element fixed bottom-0 right-0 w-1 h-1/4 bg-gradient-to-t from-neon-green to-transparent"></div>
      <div className="cyberpunk-element fixed bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-neon-yellow to-transparent"></div>
      
      {/* Additional floating elements */}
      <div className="cyberpunk-element fixed top-[10%] left-[5%] w-2 h-2 rounded-full bg-neon-pink opacity-70 animate-pulse blur-sm"></div>
      <div className="cyberpunk-element fixed top-[20%] right-[8%] w-3 h-3 rounded-full bg-neon-blue opacity-70 animate-pulse-slow blur-sm"></div>
      <div className="cyberpunk-element fixed bottom-[15%] left-[10%] w-2 h-2 rounded-full bg-neon-green opacity-70 animate-pulse blur-sm"></div>
      <div className="cyberpunk-element fixed bottom-[25%] right-[12%] w-2 h-2 rounded-full bg-neon-yellow opacity-70 animate-pulse-slow blur-sm"></div>
      
      {/* Circuit-like lines */}
      <div className="cyberpunk-element fixed top-[30%] left-0 w-[10%] h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-40"></div>
      <div className="cyberpunk-element fixed top-[30%] left-[10%] w-[1px] h-[15%] bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-40"></div>
      <div className="cyberpunk-element fixed bottom-[40%] right-0 w-[15%] h-[1px] bg-gradient-to-l from-transparent via-neon-pink to-transparent opacity-40"></div>
      <div className="cyberpunk-element fixed bottom-[40%] right-[15%] w-[1px] h-[10%] bg-gradient-to-b from-transparent via-neon-pink to-transparent opacity-40"></div>
      
      {/* Futuristic floating elements */}
      <div className="cyberpunk-element fixed top-[50%] left-[85%] w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue/5 to-transparent blur-3xl"></div>
      <div className="cyberpunk-element fixed top-[15%] left-[75%] w-32 h-32 rounded-full bg-gradient-to-br from-neon-pink/5 to-transparent blur-3xl animate-pulse-slow"></div>
      <div className="cyberpunk-element fixed top-[75%] left-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-neon-green/5 to-transparent blur-3xl"></div>
    </div>
  );
};

export default CyberpunkEffects;
