import { useEffect } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import { linktreeData } from '@/lib/linktree-data';
import CategoryHeader from '@/components/CategoryHeader';
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
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-neon-blue to-transparent"></div>
            <CategoryHeader 
              title="Pendaftaran" 
              icon="user-plus" 
              gradientFrom="from-neon-blue" 
              gradientTo="to-neon-purple" 
            />
            {linktreeData.registration.map((link, index) => (
              <LinkCard 
                key={`registration-${index}`}
                title={link.title}
                url={link.url}
                description={link.description}
                icon={link.icon}
                iconBgFrom="from-neon-blue"
                iconBgTo="to-neon-purple"
                hoverShadow="hover:shadow-neon-blue"
                iconColor="text-neon-blue"
              />
            ))}
          </motion.section>

          {/* Social Media Section - Instagram */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-neon-pink to-transparent"></div>
            <CategoryHeader 
              title="Media Sosial" 
              icon="share-alt" 
              gradientFrom="from-neon-pink" 
              gradientTo="to-neon-purple" 
            />
            
            {/* Instagram Dropdown */}
            <DropdownLinkCard
              title="Instagram"
              icon="instagram"
              iconType="brand"
              iconBgFrom="from-neon-pink"
              iconBgTo="to-neon-purple"
              hoverShadow="hover:shadow-neon-pink"
              iconColor="text-neon-pink"
              links={linktreeData.instagram}
            />
            
            {/* Facebook Dropdown */}
            <DropdownLinkCard
              title="Facebook"
              icon="facebook-f"
              iconType="brand"
              iconBgFrom="from-neon-blue"
              iconBgTo="to-cyber-blue"
              hoverShadow="hover:shadow-neon-blue"
              iconColor="text-neon-blue"
              links={linktreeData.facebook}
            />
            
            {/* YouTube Dropdown */}
            <DropdownLinkCard
              title="YouTube"
              icon="youtube"
              iconType="brand"
              iconBgFrom="from-neon-pink"
              iconBgTo="to-red-600"
              hoverShadow="hover:shadow-neon-pink"
              iconColor="text-neon-pink"
              links={linktreeData.youtube}
            />
            
            {/* TikTok Dropdown */}
            <DropdownLinkCard
              title="TikTok"
              icon="tiktok"
              iconType="brand"
              iconBgFrom="from-black"
              iconBgTo="to-gray-700"
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
            <CategoryHeader 
              title="Kontak" 
              icon="phone-alt"
              gradientFrom="from-neon-green" 
              gradientTo="to-green-700" 
            />
            <DropdownLinkCard
              title="WhatsApp"
              icon="whatsapp"
              iconType="brand"
              iconBgFrom="from-neon-green"
              iconBgTo="to-green-700"
              hoverShadow="hover:shadow-neon-green"
              iconColor="text-neon-green"
              links={linktreeData.whatsapp}
            />
          </motion.section>

          {/* Location Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-neon-yellow to-transparent"></div>
            <CategoryHeader 
              title="Lokasi" 
              icon="map-marker-alt" 
              gradientFrom="from-neon-yellow" 
              gradientTo="to-yellow-600" 
            />
            <motion.a 
              href="https://maps.app.goo.gl/vqVNtX7fB5uKFFpL9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyber-navy/80 to-cyber-blue/40 backdrop-blur-sm rounded-md p-4 mb-3 transition-all duration-300 block border border-neon-yellow/20 overflow-hidden link-card relative"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 15px rgba(255, 230, 0, 0.3)",
                borderColor: "rgba(255, 230, 0, 0.5)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated light effect */}
              <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
                <div className="absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse-slow"></div>
                <div className="absolute top-0 -right-1 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-neon-yellow to-yellow-600 flex items-center justify-center shadow-inner relative">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-orbitron font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">MA Almanshuriyah</h4>
                  <p className="text-sm text-gray-300">Jalan raya Pagelaran km 61, Cipari, Pagelaran, Cianjur</p>
                </div>
              </div>
              
              <div className="rounded-md overflow-hidden border border-neon-yellow/30 grid-bg h-36 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/40 to-transparent backdrop-blur-sm"></div>
                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-30">
                  {Array.from({ length: 400 }).map((_, i) => (
                    <div key={i} className="border border-neon-yellow/20"></div>
                  ))}
                </div>
                
                {/* Map pin with pulsing effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center relative">
                    <div className="absolute -inset-4 rounded-full bg-neon-yellow/20 animate-ping"></div>
                    <i className="fas fa-map-marked-alt text-4xl text-neon-yellow mb-2 filter drop-shadow-lg"></i>
                    <p className="font-orbitron text-sm text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-white to-neon-yellow animate-pulse-slow">Buka di Google Maps</p>
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-neon-yellow/50"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-neon-yellow/50"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-neon-yellow/50"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-neon-yellow/50"></div>
              </div>
            </motion.a>
          </motion.section>
        </main>

        {/* Footer */}
        <motion.footer 
          className="w-full px-4 mt-12 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative p-4 backdrop-blur-sm bg-gradient-to-b from-cyber-navy/40 to-transparent rounded-lg border border-neon-blue/10">
            <p className="font-rajdhani text-gray-300">&copy; 2025 MA Almanshuriyah | <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue animate-pulse-slow">Cyberpunk Link Tree</span></p>
            
            <div className="my-2 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
            
            <a href="#" className="inline-block font-orbitron text-xs uppercase tracking-wider text-gray-400 hover:text-neon-blue transition-colors group">
              <span className="inline-flex items-center">
                <i className="fas fa-hashtag mr-1 group-hover:scale-110 transition-transform"></i>
                <span className="group-hover:tracking-wider transition-all">MA_Almanshuriyah2025</span>
              </span>
            </a>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-neon-blue/30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-neon-blue/30"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-neon-blue/30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-neon-blue/30"></div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
