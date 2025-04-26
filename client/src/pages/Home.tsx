import { useEffect } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import { linktreeData } from '@/lib/linktree-data';
import CategoryHeader from '@/components/CategoryHeader';
import LinkCard from '@/components/LinkCard';
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
      <div className="scan-line opacity-30 fixed inset-0 pointer-events-none z-50"></div>
      
      {/* Grid Background */}
      <GridBackground />
      
      {/* Cyberpunk Decorative Elements */}
      <CyberpunkEffects />

      {/* Main Container */}
      <div className="w-full max-w-md px-4 flex flex-col items-center z-10">
        {/* Header Section */}
        <ProfileHeader />
        
        {/* Main Content */}
        <main className="w-full space-y-6">
          {/* Registration Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
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

          {/* Instagram Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CategoryHeader 
              title="Instagram" 
              icon="instagram" 
              iconType="brand"
              gradientFrom="from-neon-pink" 
              gradientTo="to-neon-purple" 
            />
            {linktreeData.instagram.map((link, index) => (
              <LinkCard 
                key={`instagram-${index}`}
                title={link.title}
                url={link.url}
                description={link.description}
                icon={link.icon}
                iconType="brand"
                iconBgFrom="from-neon-pink"
                iconBgTo="to-neon-purple"
                hoverShadow="hover:shadow-neon-pink"
                iconColor="text-neon-pink"
              />
            ))}
          </motion.section>

          {/* Facebook Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CategoryHeader 
              title="Facebook" 
              icon="facebook-f" 
              iconType="brand"
              gradientFrom="from-neon-blue" 
              gradientTo="to-cyber-blue" 
            />
            {linktreeData.facebook.map((link, index) => (
              <LinkCard 
                key={`facebook-${index}`}
                title={link.title}
                url={link.url}
                description={link.description}
                icon={link.icon}
                iconType="brand"
                iconBgFrom="from-neon-blue"
                iconBgTo="to-cyber-blue"
                hoverShadow="hover:shadow-neon-blue"
                iconColor="text-neon-blue"
              />
            ))}
          </motion.section>

          {/* YouTube Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CategoryHeader 
              title="YouTube" 
              icon="youtube" 
              iconType="brand"
              gradientFrom="from-neon-pink" 
              gradientTo="to-red-600" 
            />
            {linktreeData.youtube.map((link, index) => (
              <LinkCard 
                key={`youtube-${index}`}
                title={link.title}
                url={link.url}
                description={link.description}
                icon={link.icon}
                iconType="brand"
                iconBgFrom="from-neon-pink"
                iconBgTo="to-red-600"
                hoverShadow="hover:shadow-neon-pink"
                iconColor="text-neon-pink"
              />
            ))}
          </motion.section>

          {/* TikTok Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <CategoryHeader 
              title="TikTok" 
              icon="tiktok" 
              iconType="brand"
              gradientFrom="from-gray-200" 
              gradientTo="to-gray-800" 
            />
            {linktreeData.tiktok.map((link, index) => (
              <LinkCard 
                key={`tiktok-${index}`}
                title={link.title}
                url={link.url}
                description={link.description}
                icon={link.icon}
                iconType="brand"
                iconBgFrom="from-black"
                iconBgTo="to-gray-700"
                hoverShadow="hover:shadow-neon-purple"
                iconColor="text-white"
              />
            ))}
          </motion.section>

          {/* WhatsApp Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <CategoryHeader 
              title="WhatsApp" 
              icon="whatsapp" 
              iconType="brand"
              gradientFrom="from-neon-green" 
              gradientTo="to-green-700" 
            />
            {linktreeData.whatsapp.map((link, index) => (
              <LinkCard 
                key={`whatsapp-${index}`}
                title={link.title}
                url={link.url}
                description={link.description}
                icon={link.icon}
                iconType="brand"
                iconBgFrom="from-neon-green"
                iconBgTo="to-green-700"
                hoverShadow="hover:shadow-neon-green"
                iconColor="text-neon-green"
              />
            ))}
          </motion.section>

          {/* Location Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <CategoryHeader 
              title="Lokasi" 
              icon="map-marker-alt" 
              gradientFrom="from-neon-yellow" 
              gradientTo="to-yellow-600" 
            />
            <a 
              href="https://maps.app.goo.gl/vqVNtX7fB5uKFFpL9"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card cyber-border bg-cyber-navy bg-opacity-80 rounded-md p-4 mb-3 transition-all duration-300 hover:shadow-neon-yellow block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-neon-yellow to-yellow-600 flex items-center justify-center group-hover:from-yellow-600 group-hover:to-neon-yellow transition-all duration-300">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div className="flex-grow">
                  <h4 className="font-orbitron font-semibold">MA Almanshuriyah</h4>
                  <p className="text-sm text-gray-300">Jalan raya Pagelaran km 61, Cipari, Pagelaran, Cianjur</p>
                </div>
              </div>
              <div className="rounded-md overflow-hidden cyber-border grid-bg h-36 relative">
                <div className="absolute inset-0 bg-cyber-blue opacity-60"></div>
                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-30">
                  {Array.from({ length: 400 }).map((_, i) => (
                    <div key={i} className="border border-neon-blue opacity-20"></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-4xl text-neon-yellow mb-2 animate-pulse"></i>
                    <p className="font-orbitron text-sm neon-text-yellow">Buka di Maps</p>
                  </div>
                </div>
              </div>
            </a>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="w-full px-4 mt-12 text-center text-sm text-gray-400">
          <p className="font-rajdhani">&copy; 2024 MA Almanshuriyah | <span className="neon-text">Cyberfunk Link Tree</span></p>
          <div className="my-2 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
          <a href="#" className="inline-block font-orbitron text-xs uppercase tracking-wider hover:text-neon-blue transition-colors">
            #MA_Almanshuriyah2025
          </a>
        </footer>
      </div>
    </div>
  );
}
