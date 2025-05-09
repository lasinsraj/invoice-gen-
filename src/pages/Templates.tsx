
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';

const Templates = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Invoice Templates | Invoice Generator</title>
        <meta name="description" content="Choose from various professional invoice templates for your business needs." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-invoice-light py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-invoice-dark mb-6">Invoice Templates</h1>
            <p className="text-xl text-gray-700">
              Choose from our selection of professional invoice templates to create the perfect invoice for your business.
            </p>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" />
        </div>
        
        {/* Templates Gallery */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Classic Template */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-100 flex items-center justify-center border-b">
                  <img 
                    src="/placeholder.svg" 
                    alt="Classic Invoice Template" 
                    className="h-auto max-h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Classic Template</h3>
                  <p className="text-gray-600 mb-4">
                    A clean, traditional invoice layout perfect for any business. Features a professional design with clear sections for all invoice details.
                  </p>
                  <Button onClick={() => navigate('/invoice')}>Use Template</Button>
                </div>
              </div>
              
              {/* Modern Template */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-100 flex items-center justify-center border-b">
                  <img 
                    src="/placeholder.svg" 
                    alt="Modern Invoice Template" 
                    className="h-auto max-h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Modern Template</h3>
                  <p className="text-gray-600 mb-4">
                    A contemporary design with bold accents and modern typography. Perfect for creative professionals and modern businesses.
                  </p>
                  <Button onClick={() => navigate('/invoice')}>Use Template</Button>
                </div>
              </div>
              
              {/* Minimal Template */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-100 flex items-center justify-center border-b">
                  <img 
                    src="/placeholder.svg" 
                    alt="Minimal Invoice Template" 
                    className="h-auto max-h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Minimal Template</h3>
                  <p className="text-gray-600 mb-4">
                    A clean, minimalist design focusing on essential information. Elegant simplicity for businesses that prefer a streamlined look.
                  </p>
                  <Button onClick={() => navigate('/invoice')}>Use Template</Button>
                </div>
              </div>
              
              {/* Professional Template */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-100 flex items-center justify-center border-b">
                  <img 
                    src="/placeholder.svg" 
                    alt="Professional Invoice Template" 
                    className="h-auto max-h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Professional Template</h3>
                  <p className="text-gray-600 mb-4">
                    A sophisticated template with premium styling. Ideal for consultants, agencies, and businesses seeking a distinguished look.
                  </p>
                  <Button onClick={() => navigate('/invoice')}>Use Template</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
