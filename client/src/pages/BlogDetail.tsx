import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { Link, useParams } from "wouter";
import type { Article } from "@shared/schema";

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  
  const { data: article, isLoading, error } = useQuery<Article>({
    queryKey: ["/api/articles", slug],
    queryFn: () => fetch(`/api/articles/${slug}`).then(res => {
      if (!res.ok) throw new Error('Article not found');
      return res.json();
    })
  });

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

  if (error || !article) {
    return (
      <div className="min-h-screen portfolio-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Artikel Tidak Ditemukan</h2>
          <p className="text-slate-300 mb-6">Artikel yang Anda cari tidak tersedia</p>
          <Link href="/blog">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Kembali ke Blog
            </button>
          </Link>
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
        <div className="max-w-4xl mx-auto px-6 py-4">
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
                <button className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/blog">
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Kembali ke Blog
            </button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formatDate(article.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={16} />
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                {article.category}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-blue-purple mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            {article.excerpt}
          </p>
        </motion.header>

        {/* Article Image */}
        {article.imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl glass-effect"
            />
          </motion.div>
        )}

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="glass-effect rounded-xl p-8 text-slate-300 leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>

        {/* Article Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Terakhir diperbarui: {formatDate(article.updatedAt)}
            </div>
            <Link href="/blog">
              <button className="px-6 py-3 glass-effect text-blue-400 hover:text-white hover:modern-glow-blue rounded-lg transition-all duration-300">
                Artikel Lainnya
              </button>
            </Link>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}