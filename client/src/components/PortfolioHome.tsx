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
  FileText,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'wouter';
import schoolCover from '@assets/school-cover.svg';
import maLogo from '@assets/ma-logo.svg';
import besLogo from '@assets/bes-logo.svg';
import educationPrograms from '@assets/education-programs.svg';
import blogDocumentation from '@assets/blog-documentation.svg';

interface LightEffect {
  x: number;
  y: number;
  id: number;
}

export function PortfolioHome() {
  const [lightEffects, setLightEffects] = useState<LightEffect[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      className={`relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-900 hover:to-purple-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg border border-slate-600 hover:border-blue-400 transition-all duration-300 group text-sm md:text-base ${className}`}
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
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={maLogo} alt="MA Logo" className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                MA Almanshuriyah
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">Tentang</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Kontak</a>
              <Link href="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">Blog</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-800 border-t border-slate-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors">Kontak</a>
              <Link href="/blog" className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors">Blog</Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Cover Image Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={schoolCover} 
            alt="School Cover" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-indigo-950/80" />
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Profile Images Section */}
            <motion.div
              className="flex items-center justify-center gap-4 sm:gap-8 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={maLogo} alt="MA Logo" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              <motion.div
                className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <GraduationCap size={32} className="text-blue-400 sm:w-12 sm:h-12" />
                </div>
              </motion.div>

              <motion.div
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-red-500 to-orange-600 p-1 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={besLogo} alt="BES Logo" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent px-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
            >
              MA Almanshuriyah
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 font-light px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Madrasah Aliyah Modern & Unggul
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30 text-xs sm:text-sm">
                Pendidikan Berkualitas
              </span>
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30 text-xs sm:text-sm">
                Teknologi Modern
              </span>
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-cyan-500/20 rounded-full text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm">
                Prestasi Membanggakan
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <GlowButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <User size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Tentang Kami</span>
              <span className="sm:hidden">Tentang</span>
            </GlowButton>
            <GlowButton>
              <BookOpen size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Program Pendidikan</span>
              <span className="sm:hidden">Program</span>
            </GlowButton>
            <GlowButton>
              <FileText size={16} className="sm:w-5 sm:h-5" />
              <Link href="/blog">
                <span className="hidden sm:inline">Blog & Dokumentasi</span>
                <span className="sm:hidden">Blog</span>
              </Link>
            </GlowButton>
            <GlowButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Phone size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Hubungi Kami</span>
              <span className="sm:hidden">Kontak</span>
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

      {/* Education Programs Section */}
      <motion.section 
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Program Pendidikan
            </motion.h2>
            <motion.div
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src={educationPrograms} 
                  alt="Program Pendidikan" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-lg" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                Pendidikan Berkualitas Tinggi
              </h3>
              <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                MA Almanshuriyah menyediakan program pendidikan yang komprehensif dengan menggabungkan 
                kurikulum nasional dan nilai-nilai Islam. Kami berkomitmen untuk menghasilkan lulusan 
                yang tidak hanya cerdas secara akademik, tetapi juga berakhlak mulia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: BookOpen, title: "Kurikulum Terintegrasi", desc: "Nasional + Islam" },
                  { icon: Users, title: "Kelas Kecil", desc: "Perhatian Personal" },
                  { icon: Award, title: "Prestasi Gemilang", desc: "Akademik & Non-Akademik" },
                  { icon: GraduationCap, title: "Lulusan Berkualitas", desc: "Siap Perguruan Tinggi" }
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <program.icon size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{program.title}</h4>
                      <p className="text-slate-400 text-xs">{program.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <GlowButton className="w-full sm:w-auto">
                <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                Lihat Program Lengkap
              </GlowButton>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Blog & Documentation Section */}
      <motion.section 
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Blog & Dokumentasi
            </motion.h2>
            <motion.div
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                Informasi & Berita Terkini
              </h3>
              <p className="text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                Ikuti perkembangan terbaru MA Almanshuriyah melalui blog dan dokumentasi digital kami. 
                Temukan berita kegiatan sekolah, prestasi siswa, artikel pendidikan, dan panduan 
                untuk orang tua dan siswa.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { icon: Calendar, title: "Kegiatan Sekolah", desc: "Update acara dan kegiatan terbaru" },
                  { icon: Award, title: "Prestasi Siswa", desc: "Pencapaian dan penghargaan" },
                  { icon: FileText, title: "Artikel Pendidikan", desc: "Tips dan panduan belajar" },
                  { icon: Clock, title: "Pengumuman", desc: "Informasi penting terkini" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/blog">
                <GlowButton className="w-full sm:w-auto">
                  <FileText size={16} className="sm:w-5 sm:h-5" />
                  Kunjungi Blog
                </GlowButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src={blogDocumentation} 
                  alt="Blog & Dokumentasi" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Tentang MA Almanshuriyah
            </motion.h2>
            <motion.div
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              className="grid grid-cols-2 gap-4 sm:gap-6"
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
                  className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700 text-center group hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon 
                    size={24} 
                    className={`mx-auto mb-2 sm:mb-3 text-${stat.color}-400 group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8`} 
                  />
                  <h4 className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm">{stat.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact & Social Section */}
      <motion.section 
        id="contact"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Hubungi Kami
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Media Sosial</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Instagram, name: "Instagram", handle: "@besmatcha_", color: "pink" },
                  { icon: Facebook, name: "Facebook", handle: "MA Almanshuriyah", color: "blue" },
                  { icon: Youtube, name: "YouTube", handle: "@besmaalmanshuriyah", color: "red" },
                  { icon: MessageCircle, name: "WhatsApp", handle: "Chat Langsung", color: "green" }
                ].map((social, index) => (
                  <GlowButton
                    key={index}
                    className="flex-col h-24 sm:h-32 justify-center text-center group"
                  >
                    <social.icon size={24} className="mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8" />
                    <div className="text-xs sm:text-sm font-medium">{social.name}</div>
                    <div className="text-xs text-slate-400 hidden sm:block">{social.handle}</div>
                  </GlowButton>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800"
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