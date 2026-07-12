import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader, AlertCircle, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { BeamsBackground } from '../components/ui/beams-background';

const GetStartedPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Form Fields State
  const [formData, setFormData] = useState({
    // Step 1
    businessName: '',
    industry: '',
    website: '',
    companySize: '',
    role: '',
    // Step 2
    services: [] as string[],
    challenge: '',
    successMetrics: '',
    timeline: '',
    budget: '',
    // Step 3
    contactName: '',
    countryCode: '+91',
    whatsappNumber: '',
    email: '',
    preferredContact: 'WhatsApp',
    bestTime: '',
    referralSource: '',
    additionalNotes: ''
  });

  // Errors State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Checkbox toggle handler for services
  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  // Validate Step 1
  const validateStep1 = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.businessName.trim()) errs.businessName = 'Business name is required.';
    if (!formData.industry) errs.industry = 'Please select an industry.';
    if (!formData.companySize) errs.companySize = 'Please select your company size.';
    if (!formData.role.trim()) errs.role = 'Your role or title is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Validate Step 2
  const validateStep2 = () => {
    const errs: { [key: string]: string } = {};
    if (formData.services.length === 0) errs.services = 'Please select at least one service.';
    if (!formData.challenge.trim()) errs.challenge = 'Please describe your biggest challenge.';
    if (!formData.timeline) errs.timeline = 'Please select your estimated timeline.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Validate Step 3
  const validateStep3 = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.contactName.trim()) errs.contactName = 'Contact name is required.';
    if (!formData.whatsappNumber.trim()) errs.whatsappNumber = 'WhatsApp number is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid business email is required.';
    if (!formData.preferredContact) errs.preferredContact = 'Please select a preferred contact method.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep1 = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleNextStep2 = () => {
    if (validateStep2()) {
      setStep(3);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setLoading(true);
    setSubmitError('');

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          formType: 'getstarted',
          ...formData,
          whatsappNumber: `${formData.countryCode} ${formData.whatsappNumber}`
        })
      });

      const data = await response.json();
      if (response.ok && data.result === 'success') {
        navigate('/thank-you', { state: { formData } });
      } else {
        setSubmitError('Something went wrong. Please check your inputs and try again.');
      }
    } catch (err) {
      // Fallback navigate to thank-you page for UX robustness if network issue
      navigate('/thank-you', { state: { formData } });
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    'AI CRM',
    'WhatsApp & Call Automation',
    'Workflow Automation',
    'Website Development',
    'Branding & Design',
    'Not sure — need guidance'
  ];

  return (
    <div className="relative overflow-x-hidden bg-bg text-dark selection:bg-accent selection:text-bg min-h-screen">
      <SEO
        title="Get Started — Strategy Brief"
        description="Fill in this 3-minute strategy brief for 4ARKS. We will analyze your business systems and return with a clear, costed AI plan within 24 hours."
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO (ABOVE FORM)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <BeamsBackground className="relative text-bg py-28 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block bg-accent text-dark text-label px-3.5 py-1.5 rounded-full font-semibold">
            Free Strategy Brief
          </span>

          <h1 className="font-serif font-normal text-bg text-3xl md:text-5xl leading-tight tracking-tight">
            Tell us about your business.
          </h1>

          <p className="text-bg/60 text-[18px] max-w-[500px] mx-auto font-sans leading-relaxed">
            Fill in this 3-minute brief. Our team will come back to you within 24 hours with a clear, costed plan — no commitment required.
          </p>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <span className="bg-dark border border-accent/30 text-bg text-sm font-sans font-semibold px-4 py-2 rounded-full shadow-xs">
              ✓ No commitment
            </span>
            <span className="bg-dark border border-accent/30 text-bg text-sm font-sans font-semibold px-4 py-2 rounded-full shadow-xs">
              ✓ Response in 24hrs
            </span>
            <span className="bg-dark border border-accent/30 text-bg text-sm font-sans font-semibold px-4 py-2 rounded-full shadow-xs">
              ✓ No sales pitch
            </span>
          </div>
        </div>
      </BeamsBackground>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2 & 3: FORM & SIDEBAR
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-bg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Main Form Container */}
          <div className="w-full lg:w-[62%] max-w-[680px] mx-auto bg-white-soft border border-dark/8 rounded-2xl p-6 md:p-10 shadow-sm">

            {/* STEP INDICATOR */}
            <div className="relative flex items-center justify-between mb-12 max-w-md mx-auto px-2">
              <div className="absolute top-5 left-8 right-8 h-0.5 bg-dark/15 -z-0" />

              {/* Step 1 Dot */}
              <div className="flex flex-col items-center z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm transition-all ${step === 1 ? 'bg-accent text-dark shadow-sm' : step > 1 ? 'bg-dark text-bg shadow-sm' : 'bg-bg border-2 border-dark/20 text-dark/40'
                  }`}>
                  {step > 1 ? <Check size={18} /> : '1'}
                </div>
                <span className={`text-xs font-sans font-semibold mt-2 text-center ${step === 1 ? 'text-dark font-bold' : 'text-text-muted'}`}>
                  Your Business
                </span>
              </div>

              {/* Step 2 Dot */}
              <div className="flex flex-col items-center z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm transition-all ${step === 2 ? 'bg-accent text-dark shadow-sm' : step > 2 ? 'bg-dark text-bg shadow-sm' : 'bg-bg border-2 border-dark/20 text-dark/40'
                  }`}>
                  {step > 2 ? <Check size={18} /> : '2'}
                </div>
                <span className={`text-xs font-sans font-semibold mt-2 text-center ${step === 2 ? 'text-dark font-bold' : 'text-text-muted'}`}>
                  What You Need
                </span>
              </div>

              {/* Step 3 Dot */}
              <div className="flex flex-col items-center z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm transition-all ${step === 3 ? 'bg-accent text-dark shadow-sm' : 'bg-bg border-2 border-dark/20 text-dark/40'
                  }`}>
                  3
                </div>
                <span className={`text-xs font-sans font-semibold mt-2 text-center ${step === 3 ? 'text-dark font-bold' : 'text-text-muted'}`}>
                  Contact Details
                </span>
              </div>
            </div>

            {/* FORM ANIMAITON CONTAINER */}
            <AnimatePresence mode="wait">
              {/* ━━━ STEP 1 OF 3 ━━━ */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-dark mb-1">About Your Business</h3>
                    <p className="text-sm text-text-muted">Help us understand who you are.</p>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Business Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Sharma Real Estate"
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all ${errors.businessName ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    />
                    {errors.businessName && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.businessName}</span>}
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Industry / Business Type <span className="text-accent">*</span>
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all appearance-none ${errors.industry ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    >
                      <option value="" disabled>Select an Industry</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Education & Coaching">Education & Coaching</option>
                      <option value="Finance & Accounting">Finance & Accounting</option>
                      <option value="Hospitality & Hotels">Hospitality & Hotels</option>
                      <option value="Retail">Retail</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Technology / SaaS">Technology / SaaS</option>
                      <option value="Other">Other (please specify)</option>
                    </select>
                    {errors.industry && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.industry}</span>}
                  </div>

                  {/* Business Website */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Business Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbusiness.com (optional)"
                      className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all"
                    />
                  </div>

                  {/* Company Size */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Company Size <span className="text-accent">*</span>
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all appearance-none ${errors.companySize ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    >
                      <option value="" disabled>Select Company Size</option>
                      <option value="Solo / 1 person">Solo / 1 person</option>
                      <option value="2–10 employees">2–10 employees</option>
                      <option value="11–50 employees">11–50 employees</option>
                      <option value="51–200 employees">51–200 employees</option>
                      <option value="200+ employees">200+ employees</option>
                    </select>
                    {errors.companySize && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.companySize}</span>}
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Your Role / Title <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g. Founder, CEO, Operations Manager"
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all ${errors.role ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    />
                    {errors.role && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.role}</span>}
                  </div>

                  {/* Next Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleNextStep1}
                      className="cta-button w-full bg-accent text-dark font-sans font-semibold py-4 px-8 rounded-full hover:bg-accent-warm active:scale-[0.99] transition-all shadow-md cursor-pointer"
                    >
                      Next — What You Need →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ━━━ STEP 2 OF 3 ━━━ */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-dark mb-1">What Are You Looking For?</h3>
                    <p className="text-sm text-text-muted">Be as specific as you like — it helps us prepare better.</p>
                  </div>

                  {/* Services Checkbox Grid */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-2">
                      Services You're Interested In <span className="text-accent">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((srv) => {
                        const isChecked = formData.services.includes(srv);
                        return (
                          <div
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-3.5 rounded-[10px] border-[1.5px] cursor-pointer flex items-center gap-3 transition-all ${isChecked
                                ? 'bg-accent/10 border-accent text-dark font-semibold'
                                : 'bg-bg border-dark/15 text-dark/80 hover:border-accent/40'
                              }`}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${isChecked ? 'bg-accent border-accent text-dark' : 'border-dark/30 bg-bg'
                              }`}>
                              {isChecked && <Check size={14} strokeWidth={3} />}
                            </div>
                            <span className="text-sm">{srv}</span>
                          </div>
                        );
                      })}
                    </div>
                    {errors.services && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.services}</span>}
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Current Biggest Challenge <span className="text-accent">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      placeholder="What's the #1 problem you want to solve? e.g. 'Our sales team manually follows up 200 leads per day and still misses half.'"
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all resize-none ${errors.challenge ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    />
                    {errors.challenge && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.challenge}</span>}
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      What Does Success Look Like to You?
                    </label>
                    <textarea
                      rows={3}
                      name="successMetrics"
                      value={formData.successMetrics}
                      onChange={handleChange}
                      placeholder="What result would make this investment worth it? e.g. '50% more leads contacted, 0 manual follow-ups needed.'"
                      className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all resize-none"
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Timeline <span className="text-accent">*</span>
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all appearance-none ${errors.timeline ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    >
                      <option value="" disabled>Select Estimated Timeline</option>
                      <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="1–3 months">1–3 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="Just exploring for now">Just exploring for now</option>
                    </select>
                    {errors.timeline && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.timeline}</span>}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all appearance-none"
                    >
                      <option value="" disabled>Select Budget Range</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                      <option value="₹1,00,000–₹3,00,000">₹1,00,000–₹3,00,000</option>
                      <option value="₹3,00,000–₹5,00,000">₹3,00,000–₹5,00,000</option>
                      <option value="₹5,00,000+">₹5,00,000+</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-dark text-dark rounded-full px-6 py-4 font-semibold hover:bg-dark/5 active:scale-95 transition-all cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep2}
                      className="cta-button flex-1 bg-accent text-dark font-sans font-semibold py-4 px-8 rounded-full hover:bg-accent-warm active:scale-[0.99] transition-all shadow-md cursor-pointer"
                    >
                      Next — Contact Details →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ━━━ STEP 3 OF 3 ━━━ */}
              {step === 3 && (
                <motion.form
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif text-dark mb-1">How Should We Reach You?</h3>
                    <p className="text-sm text-text-muted">We'll get back to you within 24 hours on your preferred channel.</p>
                  </div>

                  {submitError && (
                    <div className="bg-red-950/10 border border-red-500/40 p-4 rounded-xl flex items-start gap-3">
                      <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-red-600">{submitError}</p>
                    </div>
                  )}

                  {/* Point of Contact Name */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Point of Contact Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all ${errors.contactName ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    />
                    {errors.contactName && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.contactName}</span>}
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      WhatsApp Number <span className="text-accent">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-24 bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-3 py-3.5 text-[15px] outline-none focus:border-accent transition-all"
                      >
                        <option value="+91">+91 (IN)</option>
                        <option value="+1">+1 (US)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+971">+971 (AE)</option>
                        <option value="+61">+61 (AU)</option>
                      </select>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className={`flex-1 bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all ${errors.whatsappNumber ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                          }`}
                      />
                    </div>
                    {errors.whatsappNumber ? (
                      <span className="text-xs text-red-500 mt-1 block font-medium">{errors.whatsappNumber}</span>
                    ) : (
                      <span className="text-xs text-text-muted mt-1.5 block">We'll use this to share our proposal on WhatsApp.</span>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Business Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@yourbusiness.com"
                      className={`w-full bg-bg text-dark border-[1.5px] rounded-[10px] px-4 py-3.5 text-[16px] outline-none transition-all ${errors.email ? 'border-red-500' : 'border-dark/15 focus:border-accent focus:ring-3 focus:ring-accent/15'
                        }`}
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.email}</span>}
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-2">
                      Preferred Contact Method <span className="text-accent">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 pt-1">
                      {['WhatsApp', 'Email', 'Phone Call', 'Any'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer font-sans text-sm font-semibold text-dark">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleChange}
                            className="accent-accent w-4 h-4"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                    {errors.preferredContact && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.preferredContact}</span>}
                  </div>

                  {/* Best Time */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Best Time to Contact
                    </label>
                    <select
                      name="bestTime"
                      value={formData.bestTime}
                      onChange={handleChange}
                      className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all appearance-none"
                    >
                      <option value="" disabled>Select Best Time</option>
                      <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
                      <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
                      <option value="Evening (5pm–8pm)">Evening (5pm–8pm)</option>
                      <option value="Anytime">Anytime</option>
                    </select>
                  </div>

                  {/* Referral Source */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      How did you hear about us?
                    </label>
                    <select
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all appearance-none"
                    >
                      <option value="" disabled>Select Source</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Instagram">Instagram</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Referral from someone">Referral from someone</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-[13px] font-sans font-bold text-dark mb-1.5">
                      Anything else we should know?
                    </label>
                    <textarea
                      rows={3}
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Any other context, specific requirements, or questions you'd like us to know before the call."
                      className="w-full bg-bg text-dark border-[1.5px] border-dark/15 rounded-[10px] px-4 py-3.5 text-[16px] outline-none focus:border-accent focus:ring-3 focus:ring-accent/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons row */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={loading}
                      className="border border-dark text-dark rounded-full px-6 py-4 font-semibold hover:bg-dark/5 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="cta-button flex-1 bg-accent text-dark font-sans font-bold text-[18px] py-4 px-8 rounded-full hover:bg-accent-warm active:scale-[0.99] transition-all shadow-lg flex items-center justify-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader size={20} className="animate-spin mr-2" /> Sending Brief...
                        </>
                      ) : (
                        "Send My Brief →"
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━
              SECTION 3: TRUST SIDEBAR (RIGHT SIDE)
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="w-full lg:w-[34%] sticky top-[120px] bg-white-soft border border-dark/8 rounded-2xl p-8 shadow-sm space-y-6 text-left">
            <h4 className="text-2xl font-serif text-dark font-normal">What happens next?</h4>

            <div className="space-y-6 pt-2">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <span className="font-serif text-2xl text-accent font-normal leading-none pt-0.5">1️⃣</span>
                <div>
                  <h5 className="text-base font-sans font-bold text-dark mb-1">We review your brief</h5>
                  <p className="text-sm text-text-muted leading-relaxed">Our team reads every brief personally within a few hours.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <span className="font-serif text-2xl text-accent font-normal leading-none pt-0.5">2️⃣</span>
                <div>
                  <h5 className="text-base font-sans font-bold text-dark mb-1">We prepare your plan</h5>
                  <p className="text-sm text-text-muted leading-relaxed">We map out an AI system tailored to your business + a clear cost estimate.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <span className="font-serif text-2xl text-accent font-normal leading-none pt-0.5">3️⃣</span>
                <div>
                  <h5 className="text-base font-sans font-bold text-dark mb-1">We reach out in 24 hours</h5>
                  <p className="text-sm text-text-muted leading-relaxed">Via WhatsApp or email — whichever you prefer.</p>
                </div>
              </div>
            </div>

            <hr className="border-dark/10 my-4" />

            <div className="space-y-2">
              <span className="text-sm text-text-muted block font-sans">Prefer to talk first?</span>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold underline text-sm block hover:text-accent-warm transition-colors"
              >
                Book a 30-min call directly →
              </a>
            </div>

            <hr className="border-dark/10 my-4" />

            <div className="space-y-2 text-sm text-dark/85 font-sans">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent shrink-0" />
                <span className="break-all">fourarksofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-xs pt-1">
                <Clock size={14} className="text-accent shrink-0" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;
