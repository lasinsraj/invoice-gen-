
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import { formatDate, formatCurrency } from '@/utils/invoice-utils';
import { useIsMobile } from '@/hooks/use-mobile';
import PreviewLineItems from '@/components/invoice/PreviewLineItems';

interface MinimalTemplateProps {
  invoice: InvoiceData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ invoice }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-white shadow-lg p-4 md:p-8 rounded print-only font-light">
      {/* Simple header */}
      <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'justify-between items-start'} mb-8 border-b pb-6`}>
        <div>
          <h1 className="text-xl md:text-2xl font-normal tracking-wider">INVOICE</h1>
          <p className="text-gray-500 mt-1">{formatDate(invoice.issueDate)}</p>
        </div>
        <div className={isMobile ? '' : 'text-right'}>
          <p className="text-lg">{invoice.invoiceNumber || "#INV-0001"}</p>
          <p className="text-gray-500 mt-1">Due: {formatDate(invoice.dueDate)}</p>
        </div>
      </div>
      
      {/* Address section - clean and minimal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        <div className="overflow-hidden">
          <h2 className="text-sm uppercase text-gray-400 mb-2">From</h2>
          <p className="font-medium">{invoice.billFrom.name || "Your Business Name"}</p>
          <p className="text-gray-600 whitespace-pre-line break-words">{invoice.billFrom.address}</p>
          {invoice.billFrom.email && <p className="text-gray-600 break-all">{invoice.billFrom.email}</p>}
          {invoice.billFrom.phone && <p className="text-gray-600">{invoice.billFrom.phone}</p>}
        </div>
        
        <div className="mt-6 md:mt-0 overflow-hidden">
          <h2 className="text-sm uppercase text-gray-400 mb-2">Bill To</h2>
          <p className="font-medium">{invoice.billTo.name || "Client Name"}</p>
          <p className="text-gray-600 whitespace-pre-line break-words">{invoice.billTo.address}</p>
          {invoice.billTo.email && <p className="text-gray-600 break-all">{invoice.billTo.email}</p>}
          {invoice.billTo.phone && <p className="text-gray-600">{invoice.billTo.phone}</p>}
        </div>
      </div>
      
      {/* Minimalist items table */}
      <div className="mb-8">
        <PreviewLineItems items={invoice.items} currency={invoice.currency} />
      </div>
      
      {/* Footer section */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          {invoice.notes && (
            <div className="mb-4">
              <h3 className="text-sm uppercase text-gray-400 mb-2">Notes</h3>
              <p className="text-gray-600 break-words">{invoice.notes}</p>
            </div>
          )}
          
          {invoice.terms && (
            <div>
              <h3 className="text-sm uppercase text-gray-400 mb-2">Terms</h3>
              <p className="text-gray-600 break-words">{invoice.terms}</p>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="break-words">{formatCurrency(invoice.subtotal, invoice.currency)}</span>
            </div>
            
            {invoice.taxRate > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Tax ({invoice.taxRate}%)</span>
                <span className="break-words">{formatCurrency(invoice.tax, invoice.currency)}</span>
              </div>
            )}
            
            {invoice.discountRate > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>Discount ({invoice.discountRate}%)</span>
                <span className="break-words">-{formatCurrency(invoice.discount, invoice.currency)}</span>
              </div>
            )}
            
            <div className="flex justify-between pt-2 border-t font-medium">
              <span>Total</span>
              <span className="break-words">{formatCurrency(invoice.total, invoice.currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalTemplate;
