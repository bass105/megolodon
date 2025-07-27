import { users, articles, type User, type InsertUser, type Article, type InsertArticle } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Article methods
  getArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getArticlesByCategory(category: string): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | undefined>;
  deleteArticle(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private articles: Map<number, Article>;
  currentUserId: number;
  currentArticleId: number;

  constructor() {
    this.users = new Map();
    this.articles = new Map();
    this.currentUserId = 1;
    this.currentArticleId = 1;
    
    // Add some sample articles
    this.seedArticles();
  }

  private seedArticles() {
    const sampleArticles: Article[] = [
      {
        id: 1,
        title: "Selamat Datang di Portfolio MA Almanshuriyah",
        slug: "selamat-datang",
        excerpt: "Pengenalan singkat tentang portfolio dan kegiatan terbaru dari MA Almanshuriyah.",
        content: "Selamat datang di website portfolio MA Almanshuriyah. Di sini Anda akan menemukan berbagai informasi tentang kegiatan, proyek, dan dokumentasi perjalanan saya dalam dunia teknologi dan pendidikan.",
        category: "Pengumuman",
        imageUrl: null,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Perkembangan Teknologi Web Modern",
        slug: "teknologi-web-modern",
        excerpt: "Membahas tren dan perkembangan teknologi web terkini yang perlu diketahui.",
        content: "Teknologi web terus berkembang pesat. Dari React hingga Next.js, dari JavaScript vanilla hingga TypeScript, mari kita jelajahi bagaimana perkembangan ini mempengaruhi cara kita membangun aplikasi web.",
        category: "Teknologi",
        imageUrl: null,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Dokumentasi Proyek Terbaru",
        slug: "dokumentasi-proyek-terbaru",
        excerpt: "Rangkuman proyek-proyek yang telah dikerjakan dan lessons learned dari setiap pengalaman.",
        content: "Dalam artikel ini, saya akan membagikan dokumentasi dari proyek-proyek terbaru yang telah diselesaikan, termasuk tantangan yang dihadapi dan solusi yang ditemukan.",
        category: "Proyek",
        imageUrl: null,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    sampleArticles.forEach(article => {
      this.articles.set(article.id, article);
      this.currentArticleId = Math.max(this.currentArticleId, article.id + 1);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getArticles(): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(
      (article) => article.slug === slug && article.published,
    );
  }

  async getArticlesByCategory(category: string): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.category === category && article.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const now = new Date();
    const article: Article = { 
      ...insertArticle,
      imageUrl: insertArticle.imageUrl ?? null,
      published: insertArticle.published ?? false,
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.articles.set(id, article);
    return article;
  }

  async updateArticle(id: number, updateData: Partial<InsertArticle>): Promise<Article | undefined> {
    const article = this.articles.get(id);
    if (!article) return undefined;

    const updatedArticle: Article = {
      ...article,
      ...updateData,
      updatedAt: new Date(),
    };
    this.articles.set(id, updatedArticle);
    return updatedArticle;
  }

  async deleteArticle(id: number): Promise<boolean> {
    return this.articles.delete(id);
  }
}

export const storage = new MemStorage();
