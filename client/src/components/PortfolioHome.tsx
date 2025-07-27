import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  User, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  BookOpen, 
  Award,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Calendar,
  Clock,
  FileText
} from 'lucide-react';
import { Link } from 'wouter';

interface LightEffect {
  x: number;
  y: number;
  id: number;
}

export function PortfolioHome() {
  const [lightEffects, setLightEffects] = useState<LightEffect[]>([]);
  const lightIdRef = useRef(0);

  const createLightEffect = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newLight: LightEffect = {
      x,
      y,
      id: lightIdRef.current++
    };
    
    setLightEffects(prev => [...prev, newLight]);
    
    setTimeout(() => {
      setLightEffects(prev => prev.filter(light => light.id !== newLight.id));
    }, 1000);
  };

  const GlowButton = ({ 
    children, 
    className = "", 
    onClick,
    ...props 
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <motion.button
      className={`relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-900 hover:to-purple-800 text-white px-6 py-3 rounded-lg border border-slate-600 hover:border-blue-400 transition-all duration-300 group ${className}`}
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        createLightEffect(e);
        onClick?.(e);
      }}
    >
      {/* Light effects */}
      {lightEffects.map(light => (
        <motion.div
          key={light.id}
          className="absolute pointer-events-none"
          style={{ left: light.x, top: light.y }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-4 h-4 bg-blue-400 rounded-full blur-sm -translate-x-2 -translate-y-2" />
        </motion.div>
      ))}
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <GraduationCap size={48} className="text-blue-400" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
            >
              MA Almanshuriyah
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Madrasah Aliyah Modern & Unggul
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30">
                Pendidikan Berkualitas
              </span>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30">
                Teknologi Modern
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 border border-cyan-500/30">
                Prestasi Membanggakan
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <GlowButton>
              <User size={20} />
              Tentang Kami
            </GlowButton>
            <GlowButton>
              <BookOpen size={20} />
              Program Pendidikan
            </GlowButton>
            <GlowButton>
              <FileText size={20} />
              <Link href="/blog">Blog & Dokumentasi</Link>
            </GlowButton>
            <GlowButton>
              <Phone size={20} />
              Hubungi Kami
            </GlowButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Tentang MA Almanshuriyah
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-lg" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">Visi & Misi</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    MA Almanshuriyah berkomitmen menciptakan generasi muslim yang berakhlak mulia, 
                    berpengetahuan luas, dan siap menghadapi tantangan zaman dengan memadukan 
                    pendidikan agama dan sains modern.
                  </p>
                  <div className="flex items-center gap-4 text-slate-400">
                    <Calendar size={20} />
                    <span>Didirikan tahun 2010</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { icon: Users, title: "500+", subtitle: "Siswa Aktif", color: "blue" },
                { icon: Award, title: "50+", subtitle: "Prestasi", color: "purple" },
                { icon: BookOpen, title: "15+", subtitle: "Program", color: "cyan" },
                { icon: GraduationCap, title: "95%", subtitle: "Lulus PT", color: "green" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 text-center group hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon 
                    size={32} 
                    className={`mx-auto mb-3 text-${stat.color}-400 group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <h4 className="text-2xl font-bold text-white mb-1">{stat.title}</h4>
                  <p className="text-slate-400 text-sm">{stat.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact & Social Section */}
      <motion.section 
        className="py-20 px-8 bg-slate-900/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Hubungi Kami
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                { icon: MapPin, title: "Alamat", info: "Jalan raya Pagelaran km 61, Cipari, Pagelaran, Cianjur" },
                { icon: Phone, title: "Telepon", info: "+62 857-9898-9997" },
                { icon: Mail, title: "Email", info: "info@ma-almanshuriyah.ac.id" },
                { icon: Clock, title: "Jam Operasional", info: "Senin - Jumat: 07:00 - 16:00 WIB" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <contact.icon size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                    <p className="text-slate-300">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">Media Sosial</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Instagram, name: "Instagram", handle: "@besmatcha_", color: "pink" },
                  { icon: Facebook, name: "Facebook", handle: "MA Almanshuriyah", color: "blue" },
                  { icon: Youtube, name: "YouTube", handle: "@besmaalmanshuriyah", color: "red" },
                  { icon: MessageCircle, name: "WhatsApp", handle: "Chat Langsung", color: "green" }
                ].map((social, index) => (
                  <GlowButton
                    key={index}
                    className="flex-col h-32 justify-center text-center group"
                  >
                    <social.icon size={32} className="mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm font-medium">{social.name}</div>
                    <div className="text-xs text-slate-400">{social.handle}</div>
                  </GlowButton>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-12 px-8 border-t border-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-slate-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            © 2025 MA Almanshuriyah. All rights reserved.
          </motion.p>
          <motion.p 
            className="text-slate-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Crafted with ❤️ for modern education
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}