const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security headers (relaxed CSP for Google Fonts & inline styles)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
    },
  },
}));

// Compression
app.use(compression());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => res.render('index', { page: 'home' }));
app.get('/compare', (req, res) => res.render('compare', { page: 'compare' }));
app.get('/blog', (req, res) => res.render('blog', { page: 'blog' }));
app.get('/blog/how-clinician-led-weight-loss-works', (req, res) => res.render('blog-post-1', { page: 'blog' }));
app.get('/blog/how-to-choose-weight-management-clinic', (req, res) => res.render('blog-post-2', { page: 'blog' }));
app.get('/about', (req, res) => res.render('about', { page: 'about' }));
app.get('/privacy', (req, res) => res.render('privacy', { page: 'legal' }));
app.get('/terms', (req, res) => res.render('terms', { page: 'legal' }));
app.get('/cookies', (req, res) => res.render('cookies', { page: 'legal' }));
app.get('/affiliate-disclosure', (req, res) => res.render('affiliate-disclosure', { page: 'legal' }));

// 404
app.use((req, res) => res.status(404).render('404', { page: '404' }));

app.listen(PORT, () => {
  console.log(`LighterMe running on port ${PORT}`);
});
