import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Placeholder for icon name/path
  category: 'Design' | 'Automation' | 'AR/3D';
  // New SEO and Detail fields
  keywords: string[];
  longDescription: string;
  features: string[];
}

export interface Offer {
  id: string;
  title: string;
  priceRange: string;
  deliverables: string[];
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  image: string;
  results: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}