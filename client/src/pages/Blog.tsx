import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Article } from "@shared/schema";

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function BlogCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-effect rounded-xl p-6 hover:modern-glow-blue transition-all duration-300 group"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{formatDate(article.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={14} />
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
              {article.category}
            </span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white group-hover:text-gradient-blue-purple transition-all duration-300">
          {article.title}
        </h2>

        <p className="text-slate-300 leading-relaxed">
          {article.excerpt}
        </p>

        <Link href={`/blog/${article.slug}`}>
          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300">
            Baca Selengkapnya
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const { data: articles, isLoading, error } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const categories = articles ? Array.from(new Set(articles.map(article => article.category))) : [];

  if (isLoading) {
    return (
      <div className="min-h-screen portfolio-gradient-bg flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen portfolio-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Error</h2>
          <p className="text-slate-300">Gagal memuat artikel</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen portfolio-gradient-bg">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-effect border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="text-2xl font-bold text-gradient-blue-purple hover:scale-105 transition-transform">
                MA ALMANSHURIYAH
              </button>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/">
                <button className="text-slate-300 hover:text-white transition-colors">
                  Home
                </button>
              </Link>
              <Link href="/blog">
                <button className="text-blue-400 font-medium">
                  Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue-purple mb-4">
            Blog & Dokumentasi
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Berbagi pemikiran, pengalaman, dan dokumentasi kegiatan terbaru
          </p>
        </motion.div>

        {/* Categories */}
        {categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 glass-effect rounded-full text-sm text-slate-300 hover:text-white hover:modern-glow-purple transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {!articles?.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              Belum Ada Artikel
            </h3>
            <p className="text-slate-500">
              Artikel akan segera ditambahkan
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}