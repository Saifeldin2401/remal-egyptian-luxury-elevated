

import server from '../dist/server/server.js';

export default async function handler(request, event) {
  // Map Vercel Edge Function signature to the Cloudflare/Nitro fetch signature
  return server.fetch(request, process.env, event);
}
