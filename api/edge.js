

import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    // Create a Web standard Request from the Node req
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = new URL(req.url, `${protocol}://${host}`);
    
    const fetchRequest = new Request(url.href, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
      // @ts-ignore
      duplex: req.method !== 'GET' && req.method !== 'HEAD' ? 'half' : undefined,
    });

    // Call TanStack Start's server
    const webResponse = await server.fetch(fetchRequest, process.env, {
      waitUntil: () => {},
      passThroughOnException: () => {}
    });

    // Translate Web Response back to Node res
    res.status(webResponse.status);
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (webResponse.body) {
      // Stream the body
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
      res.end();
    } else {
      res.end();
    }
  } catch (err) {
    console.error('Serverless Handler Error:', err);
    res.status(500).send('Internal Server Error');
  }
}

