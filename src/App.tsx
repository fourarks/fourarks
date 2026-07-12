
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import ServicesOverview from './pages/ServicesOverview';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import GetStartedPage from './pages/GetStartedPage';
import ThankYouPage from './pages/ThankYouPage';
import AICRM from './pages/services/AICRM';
import WhatsAppCall from './pages/services/WhatsAppCall';
import WorkflowAutomation from './pages/services/WorkflowAutomation';
import WebsiteDev from './pages/services/WebsiteDev';
import BrandingDesign from './pages/services/BrandingDesign';
import CareersPage from './pages/Careers';
import NotFound from './pages/NotFound';


function App() {
  const location = useLocation();

  // Reset scroll to top on every navigation event
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        {/* 
          The 'index' route is the default child route for the parent. 
          This ensures the Home page is rendered when the path is exactly '/' 
          or when the app first initializes.
        */}
        <Route index element={<Home />} />


        {/* Application Navigation Routes */}
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/ai-crm" element={<AICRM />} />
        <Route path="/services/whatsapp-call-automation" element={<WhatsAppCall />} />
        <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
        <Route path="/services/website-development" element={<WebsiteDev />} />
        <Route path="/services/branding-design" element={<BrandingDesign />} />
        <Route path="/process" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />

        {/* Fallback Catch-all: Renders the custom NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
