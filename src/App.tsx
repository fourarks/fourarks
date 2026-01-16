
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import ServicesOverview from './pages/ServicesOverview';
import ServiceDetail from './pages/ServiceDetail';
import ProcessPage from './pages/ProcessPage';
import ARPage from './pages/ARPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

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
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/ar" element={<ARPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback Catch-all: Redirects any undefined paths back to the Home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
