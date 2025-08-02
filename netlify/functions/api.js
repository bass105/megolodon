const serverless = require('serverless-http');
const express = require('express');

// Create Express app for Netlify
const app = express();

app.use(express.json());

// Add CORS headers manually
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Simple API routes for Netlify
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'MA Almanshuriyah API is running' });
});

app.get('/api/blog', (req, res) => {
  res.json({
    posts: [
      {
        id: 1,
        title: "Kegiatan Pembelajaran Online",
        excerpt: "Adaptasi pembelajaran di era digital untuk meningkatkan kualitas pendidikan.",
        date: "2025-01-15",
        image: "/images/blog-1.jpg"
      },
      {
        id: 2,
        title: "Prestasi Siswa MA Almanshuriyah",
        excerpt: "Siswa-siswi MA Almanshuriyah meraih berbagai prestasi di tingkat regional.",
        date: "2025-01-10",
        image: "/images/blog-2.jpg"
      }
    ]
  });
});

app.get('/api/articles', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Selamat Datang di Portfolio MA Almanshuriyah",
      content: "Madrasah Aliyah Almanshuriyah adalah institusi pendidikan Islam yang berkomitmen untuk menghasilkan lulusan berkualitas dengan akhlak mulia.",
      slug: "selamat-datang-di-portfolio-ma-almanshuriyah",
      published_at: new Date().toISOString(),
      excerpt: "Mengenal lebih dekat MA Almanshuriyah"
    },
    {
      id: 2,
      title: "Program Pendidikan Unggulan",
      content: "MA Almanshuriyah menawarkan berbagai program pendidikan unggulan yang menggabungkan kurikulum nasional dengan nilai-nilai Islam.",
      slug: "program-pendidikan-unggulan",
      published_at: new Date().toISOString(),
      excerpt: "Explore program pendidikan terbaik kami"
    }
  ]);
});

const handler = serverless(app);
module.exports = { handler };