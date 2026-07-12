
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterHandle?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = '/logo.png', // Fallback OG image
    twitterHandle = '@fourarks',
}) => {
    const siteName = 'FourArks';
    const fullTitle = title ? `${title} | ${siteName}` : 'FourArks | Creative. Technology. Growth.';
    const defaultDescription = '4arks (FourArks) - A premium digital agency specializing in brand architecture, AR visualization, and performance engineering.';
    const metaDescription = description || defaultDescription;
    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content="4arks, fourarks, digital agency, branding, ar visualization, web engineering, bhopal agency" />
            <link rel="canonical" href={canonical || url} />

            {/* Open Graph Tags */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content={twitterHandle} />
        </Helmet>
    );
};

export default SEO;
