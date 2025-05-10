
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-invoice-light py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-invoice-dark mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700">
              Find answers to common questions about our invoice generator.
            </p>
          </div>
        </section>
        
        {/* Ad Banner */}
        <div className="container mx-auto py-4">
          <AdBanner width="100%" height="90px" />
        </div>
        
        {/* FAQs Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">How do I create an invoice?</AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600">
                  To create an invoice, click on "Create Invoice" button on the home page. Fill in your business details, 
                  customer information, and add items to your invoice. You can preview and download your invoice as a PDF.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">Is the invoice generator free to use?</AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600">
                  Yes, our basic invoice generator is completely free to use. You can create and download unlimited invoices 
                  without any cost. We also offer premium features for business users that require advanced functionality.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">Can I customize my invoice template?</AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600">
                  Yes, we offer several professional invoice templates to choose from. You can customize colors, add your logo, 
                  and adjust the layout to match your brand identity.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">How do I save my invoices?</AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600">
                  Your invoices are automatically saved in your browser's local storage. For more permanent storage, 
                  we recommend downloading your invoices as PDFs. Premium users can access cloud storage for all their invoices.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">Can I send invoices directly to my clients?</AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600">
                  Our free version allows you to download invoices as PDFs which you can then email to your clients. 
                  Premium users can send invoices directly through our platform with email tracking and payment reminders.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">What payment methods can I include on my invoice?</AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-600">
                  You can include any payment method in your invoice notes section. Common options include bank transfer, 
                  PayPal, credit card, or check. Premium users can enable direct online payments through various payment gateways.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer you were looking for, please contact us and we'll be happy to help.
              </p>
              <Button onClick={() => window.location.href = '/contact'}>Contact Us</Button>
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

export default FAQsPage;
