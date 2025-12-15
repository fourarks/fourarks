import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { COMPANY_INFO, CONTACT_WEBHOOK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatusMessage(null);

    const payload = { ...formData, submittedAt: new Date().toISOString() };

    try {
      console.info('Submitting contact payload to webhook:', CONTACT_WEBHOOK, payload);
      if (CONTACT_WEBHOOK) {
        // For Google Apps Script Web Apps, sending JSON triggers a CORS preflight (OPTIONS)
        // which Apps Script doesn't handle. Send URL-encoded form data when target is Apps Script.
        const isAppsScript = CONTACT_WEBHOOK.includes('script.google.com');
        let res: Response;
        if (isAppsScript) {
          const body = new URLSearchParams(payload as any).toString();
          res = await fetch(CONTACT_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body,
          });
        } else {
          res = await fetch(CONTACT_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        }

        const text = await res.text();
        console.info('Webhook response', res.status, text);
        if (!res.ok) throw new Error(`Webhook error: ${res.status} ${text}`);

        setStatusMessage('Thank you — we received your request.');
      } else {
        // Fallback: open mail client with prefilled content so user can still send an email
        const subject = encodeURIComponent(`New contact from ${payload.name || 'website'}`);
        const body = encodeURIComponent(
          `Name: ${payload.name}\nBusiness: ${payload.business}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nBudget: ${payload.budget}\nMessage:\n${payload.message}`
        );
        window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
        setStatusMessage('Opened mail client as a fallback.');
      }

      setFormData({ name: '', email: '', phone: '', business: '', budget: '', message: '' });
    } catch (err: any) {
      console.error('Contact submit error', err);
      setStatusMessage('There was an error submitting the form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-surface/50 border border-white/10 rounded-lg p-4 text-white placeholder-textSecondary/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all";

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/5 to-transparent blur-3xl pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Get Started" title="Let's Build Something Extraordinary" />

        <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl">
          {!CONTACT_WEBHOOK && (
            <div className="mb-4 text-xs text-yellow-300 bg-yellow-900/10 p-2 rounded">Contact webhook not configured. Submissions will open the user's mail client as a fallback.</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-textSecondary">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-textSecondary">Business Name</label>
                <input 
                  type="text" 
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Company Ltd."
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-textSecondary">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-textSecondary">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91..."
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-textSecondary">Estimated Budget</label>
              <select 
                name="budget" 
                value={formData.budget}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="" className="bg-surface">Select a range</option>
                <option value="<50k" className="bg-surface">Less than ₹50,000</option>
                <option value="50k-1L" className="bg-surface">₹50,000 - ₹1,00,000</option>
                <option value="1L-3L" className="bg-surface">₹1,00,000 - ₹3,00,000</option>
                <option value="3L+" className="bg-surface">₹3,00,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-textSecondary">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project goals..."
                className={inputClasses}
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <Button type="submit" disabled={submitting} className="w-full md:w-auto min-w-[200px]">
                {submitting ? 'Sending...' : 'Send Request'}
              </Button>
            </div>
          </form>

          {statusMessage && (
            <div className="mt-6 p-4 rounded-lg text-sm text-center border border-white/10 bg-white/3">
              {statusMessage}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-white/10 text-center space-y-2">
            <p className="text-textSecondary text-sm">Or reach us directly at:</p>
            <p className="text-white font-heading font-bold text-lg hover:text-accent transition-colors cursor-pointer">{COMPANY_INFO.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;