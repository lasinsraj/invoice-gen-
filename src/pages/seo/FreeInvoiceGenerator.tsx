
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Button } from '@/components/ui/button';

const FreeInvoiceGenerator = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free Invoice Generator | Create Professional Invoices Online Without Registration</title>
        <meta name="description" content="Create and download professional invoices for free with our online invoice generator. No registration required. Perfect for freelancers and small businesses." />
        <meta name="keywords" content="free invoice generator, invoice generator tool, free invoice maker, create invoice free, invoice generator PDF, create invoice without registration" />
        <link rel="canonical" href="https://invoicegenerator.com/free-invoice-generator" />
        
        {/* Structured data for rich results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Free Invoice Generator",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Create and download professional invoices for free. No registration required."
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
                  Free Invoice Generator
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Create professional invoices in seconds - completely free. No account needed, no hidden fees.
                </p>
                <Button 
                  size="lg"
                  onClick={() => navigate('/invoice')}
                >
                  Create Free Invoice Now
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Free Invoice Generator Example" 
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything You Need in a Free Invoice Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Free PDF Download</h3>
                <p className="text-gray-600">Download your invoice as a professional PDF document with just one click.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Registration</h3>
                <p className="text-gray-600">Create invoices immediately without signing up or sharing any personal information.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Templates</h3>
                <p className="text-gray-600">Choose from various professional invoice templates to match your business style.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Free Invoice Generator Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Enter Details</h3>
                <p className="text-gray-600">Add your business and customer information to the invoice</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Add Items</h3>
                <p className="text-gray-600">Enter products or services with prices, quantities, and descriptions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Template</h3>
                <p className="text-gray-600">Choose a professional template that matches your brand identity</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Download PDF</h3>
                <p className="text-gray-600">Get your professionally formatted invoice as a PDF instantly</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg"
                onClick={() => navigate('/invoice')}
              >
                Try Our Free Invoice Generator
              </Button>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" adSlot={2} />
        </div>
        
        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Is this invoice generator really free?</h3>
                <p className="text-gray-600">Yes! Our invoice generator is completely free to use with no hidden fees or trial periods. You can create and download as many invoices as you need.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Do I need to create an account?</h3>
                <p className="text-gray-600">No, you can create invoices without registration. Just enter your information and download your invoice immediately.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Can I save my invoices for later?</h3>
                <p className="text-gray-600">While you don't need an account, your invoice data is saved in your browser's local storage, allowing you to come back and make changes if needed.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">What format are the invoices?</h3>
                <p className="text-gray-600">Invoices are generated as PDF documents, which are widely accepted and can be easily shared with clients via email or printed.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-invoice-primary text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your free invoice?</h2>
            <p className="text-xl mb-8">It's quick, easy, and completely free - no registration required!</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-invoice-primary hover:bg-gray-100"
              onClick={() => navigate('/invoice')}
            >
              Create Free Invoice Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FreeInvoiceGenerator;
