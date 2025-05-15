
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Button } from '@/components/ui/button';

const OnlineBillingSoftware = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free Online Billing Software | Easy Invoice Generator for Small Businesses</title>
        <meta name="description" content="Streamline your billing process with our free online billing software. Create, send and manage invoices online with our easy-to-use platform." />
        <meta name="keywords" content="online billing software, free billing software, invoice generator online, billing system, online invoicing tool" />
        <link rel="canonical" href="https://invoicegenerator.com/online-billing-software" />
        
        {/* Structured data for rich results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Free Online Billing Software",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Free online billing software for creating and managing invoices. No installation required."
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
                  Online Billing Software
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Streamline your billing process with our free online invoicing solution. No downloads, no installations - just create and send professional invoices instantly.
                </p>
                <Button 
                  size="lg"
                  onClick={() => navigate('/invoice')}
                >
                  Try Our Billing Software
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Online Billing Software Dashboard" 
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
            <h2 className="text-3xl font-bold text-center mb-12">Everything You Need in Online Billing Software</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Invoices Instantly</h3>
                <p className="text-gray-600">Create professional invoices in seconds with our intuitive, user-friendly online interface.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Manage Payments</h3>
                <p className="text-gray-600">Track payment status and send reminders to clients with outstanding invoices.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-invoice-light rounded-full flex items-center justify-center text-invoice-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Financial Reports</h3>
                <p className="text-gray-600">Generate detailed reports to analyze your revenue, outstanding payments, and business growth.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Online Billing Software Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Account</h3>
                <p className="text-gray-600">Sign up for free and set up your business profile in minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Add Clients</h3>
                <p className="text-gray-600">Save your client information for quick invoice generation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Invoices</h3>
                <p className="text-gray-600">Generate professional invoices with your branding and details</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-invoice-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
                <p className="text-gray-600">Send invoices directly to clients and track payments</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="250px" adSlot={2} />
        </div>
        
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Online Billing System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p className="text-gray-600">Automate your billing process and spend less time on administrative tasks. Create recurring invoices and set payment reminders.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Improve Cash Flow</h3>
                <p className="text-gray-600">Get paid faster with professional invoices and clear payment terms. Send automatic reminders for overdue payments.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Look Professional</h3>
                <p className="text-gray-600">Create consistent, branded invoices that enhance your company's image and build trust with clients.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Work From Anywhere</h3>
                <p className="text-gray-600">Access your billing system from any device with internet connection. Perfect for businesses with remote teams.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-invoice-primary text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your billing process?</h2>
            <p className="text-xl mb-8">Join thousands of businesses using our free online billing software!</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-invoice-primary hover:bg-gray-100"
              onClick={() => navigate('/invoice')}
            >
              Start Free Billing Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OnlineBillingSoftware;
