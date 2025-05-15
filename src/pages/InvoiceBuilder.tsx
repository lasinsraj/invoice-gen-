
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InvoicePreview from '@/components/InvoicePreview';
import InvoiceActions from '@/components/invoice/InvoiceActions';
import InvoiceTabs from '@/components/invoice/InvoiceTabs';
import { useInvoiceStorage } from '@/hooks/use-invoice-storage';
import { useTemplateSelection } from '@/hooks/use-template-selection';
import { useDownloadCountdown } from '@/hooks/use-download-countdown';

const InvoiceBuilder: React.FC = () => {
  const { invoice, setInvoice } = useInvoiceStorage();
  const { selectedTemplate, setSelectedTemplate } = useTemplateSelection();
  const { countdown, isDownloading, handleDownload } = useDownloadCountdown(invoice);
  const [activeTab, setActiveTab] = useState<string>('edit');
  
  // Function to handle invoice updates from the form
  const handleInvoiceUpdate = (updatedInvoice: typeof invoice) => {
    setInvoice(updatedInvoice);
  };
  
  // Print invoice
  const handlePrint = () => {
    // Change to preview tab first
    setActiveTab('preview');
    
    // Set a small timeout to ensure the UI updates before printing
    setTimeout(() => {
      window.print();
    }, 100);
  };
  
  // Handle tab change while preserving data
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free Invoice Generator | Invoice Software for Small Business | Create Invoice Without Registration</title>
        <meta name="description" content="Create professional invoices for free with our easy-to-use invoice generator tool. Best online invoicing software for small businesses, freelancers and entrepreneurs. No registration required!" />
        <meta name="keywords" content="invoice generator, invoice software for small business, free invoice generator PDF, invoice template for freelancers, create invoice without registration, invoice maker online, online billing software, small business accounting software, invoice management system" />
        <link rel="canonical" href="https://invoicegeneratorr.netlify.app/invoice" />

        {/* Add structured data for rich search results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Free Invoice Generator for Small Businesses",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Free online invoice generator tool for small businesses and freelancers. Create and download professional invoices without registration required."
            }
          `}
        </script>
      </Helmet>
      
      <div className="no-print">
        <Header />
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="no-print mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Free Invoice Generator for Small Businesses</h1>
              <p className="text-gray-600 mt-2">Create professional invoices in seconds - no registration required</p>
            </div>
            
            <InvoiceActions 
              onPrint={handlePrint}
              onDownload={handleDownload}
              isDownloading={isDownloading}
              countdown={countdown}
            />
          </div>
          
          <InvoiceTabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
            invoice={invoice}
            onInvoiceUpdate={handleInvoiceUpdate}
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
          />
        </div>
        
        {/* This will only show when printing */}
        <div className="hidden print:block">
          <InvoicePreview invoice={invoice} template={selectedTemplate} />
        </div>

        {/* SEO-focused content that's hidden during printing */}
        <div className="no-print mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Best Online Invoicing Tool for Small Businesses</h2>
          <p className="mb-4">
            Our free invoice generator is designed specifically for small business owners, freelancers, and entrepreneurs who need professional invoicing software without the hefty price tag. Create unlimited invoices, download them as PDF, and send them to clients in seconds.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose Our Invoice Management System?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No Registration Required</strong> - Create invoices without signing up or sharing personal information</li>
            <li><strong>Professional Templates</strong> - Choose from multiple invoice templates designed for freelancers and small businesses</li>
            <li><strong>Free PDF Download</strong> - Download your invoices as PDF files instantly</li>
            <li><strong>Comprehensive Invoice Maker</strong> - Add tax rates, discounts, multiple line items, and custom notes</li>
            <li><strong>Online Billing Software Features</strong> - Save time with automatic calculations and professional formatting</li>
          </ul>
        </div>
      </main>
      
      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
};

export default InvoiceBuilder;
