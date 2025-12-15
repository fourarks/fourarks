// Plain JavaScript serverless relay for contact form submissions.
// This file is a fallback to ensure Vercel deploys the function even when
// TypeScript build output doesn't include api/*.ts sources.

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const webhook = process.env.CONTACT_WEBHOOK || '';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ enabled: !!webhook }));
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET, POST');
    res.end('Method Not Allowed');
    return;
  }

  let payload = req.body;
  if (!payload) {
    try {
      const chunks = [];
      for await (const chunk of req) chunks.push(Buffer.from(chunk));
      const raw = Buffer.concat(chunks).toString('utf8') || '{}';
      payload = JSON.parse(raw);
    } catch (err) {
      payload = {};
    }
  }

  const webhook = process.env.CONTACT_WEBHOOK || '';
  if (!webhook) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'CONTACT_WEBHOOK not configured on the server.' }));
    return;
  }

  try {
    let forwardRes;
    if (webhook.includes('script.google.com')) {
      const body = new URLSearchParams(payload).toString();
      forwardRes = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });
    } else {
      forwardRes = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    const text = await forwardRes.text();
    if (!forwardRes.ok) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Upstream webhook error', status: forwardRes.status, body: text }));
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true, body: text }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: String(err && err.message ? err.message : err) }));
  }
}
