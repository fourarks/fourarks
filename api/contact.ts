// Serverless relay for contact form submissions.
// On Vercel set the server environment variable `CONTACT_WEBHOOK` to the
// real webhook (Google Apps Script URL or other endpoint). This keeps the
// webhook secret off the client.

import { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  let payload: any = (req as any).body;
  // Some platforms provide parsed body, if not, try to read raw JSON
  if (!payload) {
    try {
      const chunks: Buffer[] = [];
      for await (const chunk of req as any) chunks.push(Buffer.from(chunk));
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
    let forwardRes: Response;
    if (webhook.includes('script.google.com')) {
      const body = new URLSearchParams(payload as any).toString();
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
  } catch (err: any) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: String(err?.message || err) }));
  }
}
