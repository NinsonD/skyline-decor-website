// This file is required for cPanel Node.js deployment
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Get port from environment variable or default to 3000
const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || '127.0.0.1';

app.prepare().then(() => {
  createServer((req, res) => {
    // Disable client-side router cache to ensure fresh data
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, hostname, (err) => {
    if (err) {
      console.error('Server error:', err);
      process.exit(1);
    }
    console.log(`✓ Server running at http://${hostname}:${port}`);
    console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
  });
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});
