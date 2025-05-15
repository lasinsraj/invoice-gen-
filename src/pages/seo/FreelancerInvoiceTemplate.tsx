
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Button } from '@/components/ui/button';

const FreelancerInvoiceTemplate = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free Freelancer Invoice Template | Professional Invoice Templates for Independent Contractors</title>
        <meta name="description" content="Download free professional invoice templates designed specifically for freelancers and independent contractors. Customizable, easy-to-use invoice templates." />
        <meta name="keywords" content="freelancer invoice template, invoice template for freelancers, free invoice template, independent contractor invoice, professional invoice template" />
        <link rel="canonical" href="https://invoicegenerator.com/freelancer-invoice-template" />
        
        {/* Structured data for rich results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Freelancer Invoice Template Generator",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Professional invoice templates designed specifically for freelancers and independent contractors."
            }
          `}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-invoice-light py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-invoice-dark mb-4">
                  Freelancer Invoice Templates
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Professional invoice templates designed specifically for freelancers and independent contractors. Get paid faster with our customizable templates.
                </p>
                <Button 
                  size="lg"
                  onClick={() => navigate('/invoice')}
                >
                  Create Freelance Invoice
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Freelancer Invoice Template Example" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" adSlot={1} />
        </div>
        
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Templates for Every Freelancer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Professionally Designed</h3>
                <p className="text-gray-600">Templates created specifically for freelancers across different industries including design, writing, development, and consulting.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-gray-600">Easily customize colors, fonts, and layouts to match your personal brand and stand out from the competition.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Payment Options</h3>
                <p className="text-gray-600">Include multiple payment methods and clear payment terms to make it easier for clients to pay you promptly.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Templates Preview */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Perfect Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Minimalist Template Preview</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Minimalist Template</h3>
                  <p className="text-gray-600 mb-4">Clean, simple design perfect for creatives who want a professional look without distraction.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/invoice')}
                  >
                    Use This Template
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Professional Template Preview</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Professional Template</h3>
                  <p className="text-gray-600 mb-4">Traditional business design with all the details clients expect from established professionals.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/invoice')}
                  >
                    Use This Template
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" adSlot={2} />
        </div>
        
        {/* Call to Action */}
        <section className="bg-invoice-primary text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your freelance invoice?</h2>
            <p className="text-xl mb-8">Join thousands of freelancers who create professional invoices in seconds!</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-invoice-primary hover:bg-gray-100"
              onClick={() => navigate('/invoice')}
            >
              Create Freelance Invoice Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FreelancerInvoiceTemplate;
