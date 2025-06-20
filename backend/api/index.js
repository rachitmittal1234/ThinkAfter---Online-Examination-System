import app from '../server.js';
import { createServer } from 'http';
import { parse } from 'url';

// Export a handler that Vercel can invoke
export default async function handler(req, res) {
  const server = createServer(app);
  const parsedUrl = parse(req.url, true);

  // Forward the request to the Express app
  server.emit('request', req, res);
}

