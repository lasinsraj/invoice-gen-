
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  useEffect(() => {
    // This helps with SEO by setting the document title
    document.title = "Free Invoice Generator | Small Business Accounting Software | Create Invoices Online";
  }, []);

  // Create structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Invoice Generator",
    "url": "https://invoicegenerator.com",
    "description": "Create professional invoices online with our free invoice generator tool. Best online invoicing software for small businesses and freelancers.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "screenshot": "https://invoicegenerator.com/og-image.png",
    "featureList": "Free invoice generation, PDF download, custom templates, no registration required, invoice management system, online billing software",
    "softwareVersion": "1.0",
    "creator": {
      "@type": "Person",
      "name": "Lasitha Rajapaksha",
      "url": "https://lasitharajapaksha.netlify.app/",
      "jobTitle": "Software Developer",
      "description": "Professional software developer specializing in invoice software for small businesses and online billing solutions"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Invoice Generator",
    "url": "https://invoicegenerator.com",
    "logo": "https://invoicegenerator.com/logo.png",
    "description": "Free professional invoice generator and accounting software for small businesses and freelancers",
    "founder": {
      "@type": "Person",
      "name": "Lasitha Rajapaksha",
      "url": "https://lasitharajapaksha.netlify.app/",
      "sameAs": [
        "https://lasitharajapaksha.netlify.app/",
        "https://linkedin.com/in/lasitha-rajapaksha",
        "https://github.com/lasitharajapaksha"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Invoice Generator | Small Business Accounting Software | Create Invoices Online</title>
        <meta name="description" content="Create professional invoices in seconds with our free invoice generator tool. Best online invoicing solution and accounting software for small businesses and freelancers." />
        <meta name="keywords" content="invoice generator, free invoice generator, invoice generator tool, free invoice maker, invoice maker, create invoice online, create invoice free, invoice software for small business, best online invoicing tools, accounting software for freelancers, online billing software, invoice management system" />
        <link rel="canonical" href="https://invoicegenerator.com/" />
        
        {/* Structured data for rich results - using JSON stringify to ensure proper formatting */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Ad Banner 1 */}
          <div className="container mx-auto py-4">
            <AdBanner width="100%" height="90px" adSlot={1} />
          </div>
          
          {/* Features Section */}
          <Features />
          
          {/* Ad Banner 2 */}
          <div className="container mx-auto py-4">
            <AdBanner width="100%" height="250px" adSlot={2} />
          </div>
          
          {/* How It Works */}
          <HowItWorks />
          
          {/* SEO Section for Small Business Invoicing */}
          <section className="bg-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-8">Invoice Software for Small Business</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Free Accounting Software for Freelancers</h3>
                  <p className="text-gray-700 mb-6">
                    Our free invoice generator provides freelancers and small businesses with professional accounting tools without the cost. 
                    Create unlimited invoices, track payments, and manage your business finances all in one place. No registration required!
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Create unlimited professional invoices</li>
                    <li>Download invoices as PDF documents</li>
                    <li>Customize invoice templates to match your brand</li>
                    <li>Track payments and manage outstanding invoices</li>
                    <li>Add your own logo and business details</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Online Billing Software Benefits</h3>
                  <p className="text-gray-700 mb-6">
                    Our invoice management system streamlines your billing process, saving you time and ensuring you get paid faster. 
                    Perfect for small businesses and freelancers who need a simple but powerful solution.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Automatic tax calculations</li>
                    <li>Multiple currency support</li>
                    <li>Add discounts and shipping</li>
                    <li>Include payment terms and notes</li>
                    <li>Mobile-friendly interface for invoicing on the go</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <Testimonials />
          
          {/* CTA Section */}
          <CallToAction />
          
          {/* Ad Banner 3 */}
          <div className="container mx-auto py-8">
            <AdBanner width="100%" height="90px" adSlot={3} />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
