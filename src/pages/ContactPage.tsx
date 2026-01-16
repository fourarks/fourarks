
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, Loader } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  organization: string;
  inquirySubject: string;
  projectDetails: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    organization: '',
    inquirySubject: 'Select a Category',
    projectDetails: '',
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      whatsappNumber: '',
      organization: '',
      inquirySubject: 'Select a Category',
      projectDetails: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK;

      if (!webhookUrl) {
        throw new Error('Webhook URL not configured');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors mode
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          whatsappNumber: formData.whatsappNumber,
          organization: formData.organization,
          inquirySubject: formData.inquirySubject,
          projectDetails: formData.projectDetails,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setStatus({
        type: 'success',
        message: 'Message transmitted successfully!',
      });

      // Reset form after successful submission
      resetForm();
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to transmit message. Please try again.',
      });
    }
  };

  const handleSendAnother = () => {
    setStatus({ type: 'idle' });
    resetForm();
  };

  return (
    <div className="animate-in fade-in duration-700 px-6 max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-ivory text-xs uppercase tracking-widest font-bold block mb-4">Engagement</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-12">Initiate <br />Dialogue.</h1>

          <div className="space-y-12 mt-20">
            <div className="flex items-start gap-6">
              <Mail className="text-ivory flex-shrink-0" size={24} />
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Correspondence</h4>
                <p className="text-xl font-light text-chocolate hover:text-ivory transition-colors cursor-pointer">4arks2025@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Phone className="text-ivory flex-shrink-0" size={24} />
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Direct Line</h4>
                <p className="text-xl font-light text-chocolate">+91 92023 82254</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <MapPin className="text-ivory flex-shrink-0" size={24} />
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Studio Presence</h4>
                <p className="text-xl font-light text-chocolate">Bhopal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-chocolate text-offwhite p-12 md:p-16">
          {status.type === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 border-2 border-ivory flex items-center justify-center rounded-full">
                <CheckCircle className="text-ivory" size={32} />
              </div>
              <h3 className="text-3xl font-serif">Message Transmitted.</h3>
              <p className="text-offwhite/60 font-light max-w-xs mx-auto">Our strategic team will review your inquiry and respond within 24 standard business hours.</p>
              <button
                onClick={handleSendAnother}
                className="text-xs uppercase tracking-widest text-ivory border-b border-ivory hover:text-offwhite transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {status.type === 'error' && (
                <div className="bg-red-900/20 border border-red-500/50 p-4 rounded flex items-start gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-red-200">{status.message}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-offwhite/40">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={status.type === 'loading'}
                    className="w-full bg-transparent border-b border-offwhite/20 py-3 focus:border-ivory outline-none transition-colors disabled:opacity-50"
                    placeholder="Arthur Arch"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-offwhite/40">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={status.type === 'loading'}
                    className="w-full bg-transparent border-b border-offwhite/20 py-3 focus:border-ivory outline-none transition-colors disabled:opacity-50"
                    placeholder="arthur@firm.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-offwhite/40">Whatsapp Number</label>
                <input
                  required
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  disabled={status.type === 'loading'}
                  className="w-full bg-transparent border-b border-offwhite/20 py-3 focus:border-ivory outline-none transition-colors disabled:opacity-50"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-offwhite/40">Organization</label>
                <input
                  required
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  disabled={status.type === 'loading'}
                  className="w-full bg-transparent border-b border-offwhite/20 py-3 focus:border-ivory outline-none transition-colors disabled:opacity-50"
                  placeholder="Company Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-offwhite/40">Inquiry Subject</label>
                <select
                  name="inquirySubject"
                  value={formData.inquirySubject}
                  onChange={handleInputChange}
                  disabled={status.type === 'loading'}
                  required
                  className="w-full bg-transparent border-b border-offwhite/20 py-3 focus:border-ivory outline-none transition-colors appearance-none text-offwhite disabled:opacity-50"
                >
                  <option className="bg-chocolate" value="Select a Category" disabled>Select a Category</option>
                  <option className="bg-chocolate" value="AR Visualization">AR Visualization</option>
                  <option className="bg-chocolate" value="Brand Architecture">Brand Architecture</option>
                  <option className="bg-chocolate" value="Digital Growth">Digital Growth</option>
                  <option className="bg-chocolate" value="Full Agency Consultation">Full Agency Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-offwhite/40">Project Details</label>
                <textarea
                  rows={4}
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  disabled={status.type === 'loading'}
                  className="w-full bg-transparent border-b border-offwhite/20 py-3 focus:border-ivory outline-none transition-colors resize-none disabled:opacity-50"
                  placeholder="Briefly describe your objectives..."
                />
              </div>
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-ivory text-offwhite py-6 text-xs uppercase tracking-widest hover:bg-offwhite hover:text-chocolate transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader size={14} className="mr-2 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    Transmit Message <Send size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
