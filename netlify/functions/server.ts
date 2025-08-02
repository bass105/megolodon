import serverless from 'serverless-http';
import express from 'express';

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

const handler = serverless(app);
export { handler };