import React, { useEffect, useRef } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const originalTitle = useRef(document.title);
  const originalDescription = useRef(document.querySelector('meta[name="description"]')?.getAttribute('content') || '');

  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper to update or create a meta tag
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Description
    updateMetaTag('description', description);

    // Update Keywords
    if (keywords && keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }

    // Update Open Graph Tags
    const updateOGTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);

    // Cleanup function to restore original tags when component unmounts
    return () => {
      document.title = originalTitle.current;
      updateMetaTag('description', originalDescription.current);
      
      const keywordMeta = document.querySelector('meta[name="keywords"]');
      if (keywordMeta) keywordMeta.remove();
    };
  }, [title, description, keywords]);

  return null;
};

export default SEO;