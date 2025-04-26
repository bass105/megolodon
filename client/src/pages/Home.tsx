import { useEffect } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import { linktreeData } from '@/lib/linktree-data';
import LinkCard from '@/components/LinkCard';
import DropdownLinkCard from '@/components/DropdownLinkCard';
import CyberpunkEffects from '@/components/CyberpunkEffects';
import GridBackground from '@/components/GridBackground';
import { motion } from 'framer-motion';

export default function Home() {
  useEffect(() => {
    document.title = "Link Tautan - MA Almanshuriyah 2025";
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center pb-16 relative overflow-hidden">
      {/* Scan Line Effect */}
      <div className="scan-line opacity-20 fixed inset-0 pointer-events-none z-50"></div>

      {/* Grid Background */}
      <GridBackground />

      {/* Cyberpunk Decorative Elements */}
      <CyberpunkEffects />

      {/* Main Container */}
      <div className="w-full max-w-md px-4 flex flex-col items-center z-10">
        {/* Title at the top - Enhanced Cyberpunk 2077 Style */}
        <div className="w-full text-center relative mb-8 mt-6 overflow-hidden">
          {/* Scanline effect overlay */}
          <div className="absolute inset-0 cyberpunk-scanline pointer-events-none z-30 opacity-30"></div>
          
          {/* Main title container */}
          <div className="relative py-3 px-8 inline-block">
            {/* Cyberpunk 2077 decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-80 bg-gradient-to-r from-cyber-dark/80 to-cyber-dark/80 backdrop-blur-sm cyberpunk2077-clip"></div>
            <div className="absolute top-0 right-0 w-12 h-1 bg-cyberpunk-yellow"></div>
            <div className="absolute bottom-0 left-0 w-12 h-1 bg-cyberpunk-red"></div>
            <div className="absolute top-[3px] left-[3px] w-3 h-3 border-l-2 border-t-2 border-cyberpunk-yellow/70"></div>
            <div className="absolute top-[3px] right-[3px] w-3 h-3 border-r-2 border-t-2 border-cyberpunk-red/70"></div>
            <div className="absolute bottom-[3px] left-[3px] w-3 h-3 border-l-2 border-b-2 border-cyberpunk-red/70"></div>
            <div className="absolute bottom-[3px] right-[3px] w-3 h-3 border-r-2 border-b-2 border-cyberpunk-yellow/70"></div>
            
            {/* Glitch text effect */}
            <h1 className="relative font-orbitron font-black text-4xl tracking-wider">
              {/* Background version for glitch effect */}
              <span className="absolute -inset-x-1 top-[0.05em] left-[0.02em] text-cyberpunk-red opacity-70 blur-[0.5px] z-0">LINK TAUTAN</span>
              <span className="absolute -inset-x-1 top-[-0.05em] left-[-0.02em] text-cyberpunk-yellow opacity-70 blur-[0.5px] z-0">LINK TAUTAN</span>
              
              {/* Main visible title */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-yellow via-white to-cyberpunk-red">
                LINK TAUTAN
              </span>
              
              {/* Animated elements for cyberpunk effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[card-shine_3s_linear_infinite] z-20"></span>
            </h1>
            
            {/* Subtitle in Cyberpunk 2077 style */}
            <div className="flex items-center justify-center mt-1 gap-2">
              <div className="h-px w-12 bg-cyberpunk-yellow/70"></div>
              <div className="text-xs tracking-widest text-cyberpunk-yellow font-mono uppercase relative">
                NIGHT-CITY EDITION v2.0.7.7
              </div>
              <div className="h-px w-12 bg-cyberpunk-red/70"></div>
            </div>
          </div>
          
          {/* Cyberpunk 2077 style badge indicator */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-cyberpunk-yellow text-cyber-dark text-[9px] font-mono uppercase tracking-wider py-0.5 px-2 font-bold">
            SYSTEM//READY
          </div>
          
          {/* Background glow effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-xl opacity-30 bg-gradient-to-r from-cyberpunk-red/0 via-cyberpunk-yellow/20 to-cyberpunk-red/0 -z-10"></div>
        </div>

        {/* Header Section */}
        <ProfileHeader />

        {/* Main Content */}
        <main className="w-full space-y-6 backdrop-blur-sm bg-gradient-to-b from-cyber-navy/30 to-transparent p-4 rounded-lg border border-neon-blue/20">
          {/* Registration Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-cyberpunk-yellow to-transparent"></div>
            <DropdownLinkCard
              title="Pendaftaran Siswa"
              icon="user-plus"
              iconType="regular"
              iconBgFrom="from-cyberpunk-yellow"
              iconBgTo="to-cyberpunk-orange"
              hoverShadow="hover:shadow-neon-yellow"
              iconColor="text-cyberpunk-yellow"
              links={linktreeData.registration}
            />
          </motion.section>

          {/* Social Media Section - Instagram */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-neon-pink to-transparent"></div>

            {/* Instagram Dropdown */}
            <DropdownLinkCard
              title="Instagram Feed"
              icon="camera-retro"
              iconType="regular"
              iconBgFrom="from-neon-pink"
              iconBgTo="to-neon-purple"
              hoverShadow="hover:shadow-neon-pink"
              iconColor="text-neon-pink"
              links={linktreeData.instagram}
            />

            {/* Facebook Dropdown */}
            <DropdownLinkCard
              title="Facebook Resmi"
              icon="thumbs-up"
              iconType="regular"
              iconBgFrom="from-neon-blue"
              iconBgTo="to-cyberpunk-cyan"
              hoverShadow="hover:shadow-neon-blue"
              iconColor="text-neon-blue"
              links={linktreeData.facebook}
            />

            {/* YouTube Dropdown */}
            <DropdownLinkCard
              title="YouTube Channel"
              icon="play-circle"
              iconType="regular"
              iconBgFrom="from-cyberpunk-red"
              iconBgTo="to-neon-pink"
              hoverShadow="hover:shadow-neon-red"
              iconColor="text-cyberpunk-red"
              links={linktreeData.youtube}
            />

            {/* TikTok Dropdown */}
            <DropdownLinkCard
              title="TikTok Official"
              icon="music"
              iconType="regular"
              iconBgFrom="from-black"
              iconBgTo="to-neon-purple"
              hoverShadow="hover:shadow-neon-purple"
              iconColor="text-white"
              links={linktreeData.tiktok}
            />
          </motion.section>

          {/* WhatsApp Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-neon-green to-transparent"></div>
            <DropdownLinkCard
              title="WhatsApp Contact"
              icon="comments"
              iconType="regular"
              iconBgFrom="from-neon-green"
              iconBgTo="to-cyberpunk-cyan"
              hoverShadow="hover:shadow-neon-green"
              iconColor="text-neon-green"
              links={linktreeData.whatsapp}
            />
          </motion.section>

          {/* Location Section - Enhanced Cyberpunk 2077 Style */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-cyberpunk-cyan to-transparent"></div>
            <motion.div 
              className="cyberpunk2077-clip bg-gradient-to-r from-cyber-navy/80 to-cyber-blue/40 backdrop-blur-sm p-4 mb-3 transition-all duration-300 block border border-cyberpunk-cyan/30 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0, 254, 253, 0.5)" }}
            >
              {/* Cyberpunk 2077 Corner Elements */}
              <div className="absolute top-0 right-0 w-12 h-1 bg-cyberpunk-cyan"></div>
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-cyberpunk-yellow"></div>
              <div className="absolute top-0 right-12 h-8 w-1 bg-cyberpunk-cyan"></div>
              
              {/* Animated scan effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse-slow"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[card-shine_3s_linear_infinite]"></div>
              </div>

              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-cyberpunk-cyan to-neon-blue flex items-center justify-center shadow-neon-cyan relative">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-cyan to-white">MA Almanshuriyah</h4>
                  <div className="flex items-center gap-1">
                    <span className="text-[0.6rem] text-cyberpunk-yellow font-mono uppercase tracking-wide">LOCATION:</span>
                    <p className="text-sm text-gray-300">Jalan raya Pagelaran km 61, Cipari, Pagelaran, Cianjur</p>
                  </div>
                </div>
              </div>

              {/* Map Area - Cyberpunk 2077 Style */}
              <div className="cyberpunk2077-clip overflow-hidden relative h-40 bg-cyber-dark border border-cyberpunk-cyan/40">
                {/* Matrix/Grid background */}
                <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-40">
                  {Array.from({ length: 1600 }).map((_, i) => (
                    <div key={i} className="border border-cyberpunk-cyan/10 border-dashed"></div>
                  ))}
                </div>
                
                {/* Futuristic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-cyan/5 to-transparent"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-cyberpunk-cyan/40"></div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-cyberpunk-cyan/40"></div>
                <div className="absolute inset-y-0 left-0 w-px bg-cyberpunk-cyan/40"></div>
                <div className="absolute inset-y-0 right-0 w-px bg-cyberpunk-cyan/40"></div>
                
                {/* Scan line effect */}
                <div className="absolute inset-0 cyberpunk-scanline"></div>
                
                {/* Location display */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center relative z-10 bg-cyber-dark/50 px-4 py-2 rounded-sm border border-cyberpunk-cyan/30">
                    <i className="fas fa-location-dot text-3xl text-cyberpunk-cyan mb-1 shadow-neon-cyan animate-pulse-slow"></i>
                    <p className="font-orbitron text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-cyan to-white">LOKASI SEKOLAH</p>
                    <div className="mt-1 text-[0.6rem] font-mono text-cyberpunk-cyan">
                      COORDINATES: -7.1234° S, 107.5678° E
                    </div>
                  </div>
                </div>

                {/* Cyberpunk 2077 HUD-like Elements */}
                <div className="absolute top-2 right-2">
                  <div className="text-[0.6rem] font-mono text-cyberpunk-cyan text-right">
                    STATUS: <span className="text-neon-green">CONNECTED</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2">
                  <div className="text-[0.6rem] font-mono text-cyberpunk-cyan">
                    SIGNAL: <span className="text-cyberpunk-yellow">100%</span>
                  </div>
                </div>
                
                {/* Corner elements in cyberpunk 2077 style */}
                <div className="absolute top-0 left-0 w-5 h-5 border-l border-t border-cyberpunk-cyan"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-r border-t border-cyberpunk-cyan"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l border-b border-cyberpunk-cyan"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r border-b border-cyberpunk-cyan"></div>
              </div>
            </motion.div>
          </motion.section>
        </main>

        {/* Footer - Cyberpunk 2077 Style */}
        <motion.footer 
          className="w-full px-4 mt-12 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative p-4 backdrop-blur-sm bg-gradient-to-b from-cyber-navy/40 to-transparent cyberpunk2077-clip border border-cyberpunk-yellow/20 overflow-hidden">
            {/* Cyberpunk 2077 Decorative Elements */}
            <div className="absolute top-0 right-0 w-20 h-1 bg-cyberpunk-yellow"></div>
            <div className="absolute bottom-0 left-0 w-20 h-1 bg-cyberpunk-red"></div>
            <div className="absolute bottom-0 right-5 h-3 w-1 bg-cyberpunk-yellow"></div>
            
            {/* Cyberpunk 2077 Text */}
            <div className="relative z-10">
              <p className="font-mono text-xs text-cyberpunk-yellow mb-1 tracking-widest uppercase">SYSTEM//2025//SECURED_CONNECTION</p>
              <p className="font-rajdhani text-gray-300">&copy; 2025 MA Almanshuriyah | <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-yellow to-cyberpunk-red animate-pulse-slow">CYBERPUNK LINKTREE</span></p>
              
              <div className="my-2 w-full h-px bg-gradient-to-r from-transparent via-cyberpunk-yellow/30 to-transparent"></div>
              
              <div className="p-1 inline-block">
                <a href="#" className="inline-block font-orbitron text-xs uppercase tracking-wider text-gray-400 hover:text-cyberpunk-yellow transition-colors group">
                  <span className="inline-flex items-center">
                    <i className="fas fa-hashtag mr-1 group-hover:scale-110 transition-transform"></i>
                    <span className="group-hover:tracking-wider transition-all">MA_Almanshuriyah2025</span>
                  </span>
                </a>
              </div>
              
              {/* Cyberpunk 2077 Status Text */}
              <div className="mt-1 text-[0.6rem] font-mono text-gray-500 tracking-wider">
                <span className="text-cyberpunk-yellow">STATUS:</span> ONLINE | <span className="text-cyberpunk-yellow">VERSION:</span> 2.0.7.7
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}