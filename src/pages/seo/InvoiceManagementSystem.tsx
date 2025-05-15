
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Button } from '@/components/ui/button';

const InvoiceManagementSystem = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Invoice Management System | Free Online Tool for Businesses</title>
        <meta name="description" content="Streamline your invoice processes with our free invoice management system. Create, track, and organize all your invoices in one place." />
        <meta name="keywords" content="invoice management system, invoice tracking, invoice organization, online invoicing system, free invoice management" />
        <link rel="canonical" href="https://invoicegenerator.com/invoice-management-system" />
        
        {/* Structured data for rich results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Invoice Management System",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Free online invoice management system for tracking and organizing all your business invoices."
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
                  Invoice Management System
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Keep all your invoices organized in one place. Create, track, and manage your business invoices with our free online system.
                </p>
                <Button 
                  size="lg"
                  onClick={() => navigate('/invoice')}
                >
                  Try Our Invoice System
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Invoice Management System Dashboard" 
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
        
        {/* Key Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Invoice Management Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Invoice Generation</h3>
                <p className="text-gray-600">Create professional invoices with customizable templates, automatic calculations, and your business branding.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Invoice Tracking</h3>
                <p className="text-gray-600">Monitor the status of all your invoices - from drafts to sent, paid, and overdue - in a centralized dashboard.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Payment Processing</h3>
                <p className="text-gray-600">Accept various payment methods and automatically record payments in the system when they're received.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Automatic Reminders</h3>
                <p className="text-gray-600">Set up payment reminders that automatically notify clients about upcoming or overdue invoices.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Database</h3>
                <p className="text-gray-600">Maintain a comprehensive database of all your clients and their contact information.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reporting Tools</h3>
                <p className="text-gray-600">Generate detailed financial reports to analyze revenue, outstanding payments, and business performance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dashboard Preview */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Dashboard for Complete Overview</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Dashboard Preview Image</p>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Everything at Your Fingertips</h3>
                <p className="text-gray-700 mb-6">
                  Our intuitive dashboard gives you a complete overview of your business's financial health. Track outstanding invoices, 
                  monitor payment statuses, and identify top clients all from a single screen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-1">Total Outstanding</h4>
                    <p className="text-invoice-primary text-2xl font-bold">$24,500</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-1">Invoices This Month</h4>
                    <p className="text-invoice-primary text-2xl font-bold">32</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-1">Overdue Payments</h4>
                    <p className="text-red-500 text-2xl font-bold">5</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to organize your invoice management?</h2>
            <p className="text-xl mb-8">Get started with our free invoice management system today!</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-invoice-primary hover:bg-gray-100"
              onClick={() => navigate('/invoice')}
            >
              Start Managing Invoices
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InvoiceManagementSystem;
