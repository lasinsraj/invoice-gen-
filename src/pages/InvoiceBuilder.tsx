
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
        <title>Create Invoice | Free Invoice Generator</title>
        <meta name="description" content="Create professional invoices for free with our easy-to-use invoice generator tool." />
      </Helmet>
      
      <div className="no-print">
        <Header />
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="no-print mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Create Your Invoice</h1>
            
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
      </main>
      
      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
};

export default InvoiceBuilder;
