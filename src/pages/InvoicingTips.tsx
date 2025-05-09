
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';

const InvoicingTips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Invoicing Tips | Invoice Generator</title>
        <meta name="description" content="Helpful tips and best practices for creating professional invoices." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-invoice-light py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-invoice-dark mb-6">Invoicing Tips</h1>
            <p className="text-xl text-gray-700">
              Best practices and helpful tips to create professional invoices that get paid faster.
            </p>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" />
        </div>
        
        {/* Tips Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-invoice-primary">1. Clear Payment Terms</h2>
                <p className="text-gray-700">
                  Always include detailed payment terms on your invoice. Specify the due date, accepted payment methods, 
                  and any late payment fees or discounts for early payment. Clear terms help avoid misunderstandings and 
                  ensure you get paid on time.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-invoice-primary">2. Professional Presentation</h2>
                <p className="text-gray-700">
                  A well-designed invoice reflects your professionalism. Include your company logo, use consistent 
                  formatting, and ensure all text is clear and easy to read. Our templates are designed to help you 
                  create professional-looking invoices in seconds.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-invoice-primary">3. Detailed Descriptions</h2>
                <p className="text-gray-700">
                  Provide detailed descriptions of your products or services. Be specific about what you're charging for, 
                  including quantities, rates, and any applicable taxes. This transparency builds trust and reduces 
                  the likelihood of payment disputes.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-invoice-primary">4. Unique Invoice Numbers</h2>
                <p className="text-gray-700">
                  Always assign a unique invoice number to each invoice. This makes it easier to track payments, 
                  organize your records, and reference specific invoices in communications with clients.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-invoice-primary">5. Follow Up Professionally</h2>
                <p className="text-gray-700">
                  If payment is overdue, follow up with a professional reminder. Start with a friendly email or call 
                  referencing the invoice number and due date. Maintain professionalism even when dealing with late payments.
                </p>
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

export default InvoicingTips;
