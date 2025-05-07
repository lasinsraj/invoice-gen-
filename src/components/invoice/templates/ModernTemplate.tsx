
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import { formatDate, formatCurrency } from '@/utils/invoice-utils';
import { useIsMobile } from '@/hooks/use-mobile';
import PreviewLineItems from '@/components/invoice/PreviewLineItems';

interface ModernTemplateProps {
  invoice: InvoiceData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ invoice }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg p-4 md:p-8 rounded print-only">
      {/* Header with colored accent */}
      <div className="border-l-4 border-blue-500 pl-4 mb-8">
        <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'justify-between items-start'}`}>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">INVOICE</h1>
            <p className="text-gray-500">{formatDate(invoice.issueDate)}</p>
          </div>
          <div className={isMobile ? '' : 'text-right'}>
            <p className="font-bold text-blue-600">{invoice.invoiceNumber || "#INV-0001"}</p>
            <p className="text-gray-500">Due: {formatDate(invoice.dueDate)}</p>
          </div>
        </div>
      </div>
      
      {/* Address Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-12">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-sm font-semibold uppercase text-blue-600 mb-3">From</h2>
          <p className="font-medium">{invoice.billFrom.name || "Your Business Name"}</p>
          <p className="text-gray-700 whitespace-pre-line break-words">{invoice.billFrom.address}</p>
          {invoice.billFrom.email && <p className="text-gray-700 break-words">{invoice.billFrom.email}</p>}
          {invoice.billFrom.phone && <p className="text-gray-700">{invoice.billFrom.phone}</p>}
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-sm font-semibold uppercase text-blue-600 mb-3">Bill To</h2>
          <p className="font-medium">{invoice.billTo.name || "Client Name"}</p>
          <p className="text-gray-700 whitespace-pre-line break-words">{invoice.billTo.address}</p>
          {invoice.billTo.email && <p className="text-gray-700 break-words">{invoice.billTo.email}</p>}
          {invoice.billTo.phone && <p className="text-gray-700">{invoice.billTo.phone}</p>}
        </div>
      </div>
      
      {/* Items Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <PreviewLineItems items={invoice.items} currency={invoice.currency} />
      </div>
      
      {/* Footer - Notes and Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {(invoice.notes || invoice.terms) && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              {invoice.notes && (
                <div className="mb-4">
                  <h3 className="font-semibold text-blue-600 mb-2">Notes</h3>
                  <p className="text-gray-700 break-words">{invoice.notes}</p>
                </div>
              )}
              {invoice.terms && (
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Terms</h3>
                  <p className="text-gray-700 break-words">{invoice.terms}</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div>
          <div className="bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2 text-blue-100">
              <span>Subtotal</span>
              <span className="break-words">{formatCurrency(invoice.subtotal, invoice.currency)}</span>
            </div>
            
            {invoice.taxRate > 0 && (
              <div className="flex justify-between mb-2 text-blue-100">
                <span>Tax ({invoice.taxRate}%)</span>
                <span className="break-words">{formatCurrency(invoice.tax, invoice.currency)}</span>
              </div>
            )}
            
            {invoice.discountRate > 0 && (
              <div className="flex justify-between mb-2 text-blue-100">
                <span>Discount ({invoice.discountRate}%)</span>
                <span className="break-words">-{formatCurrency(invoice.discount, invoice.currency)}</span>
              </div>
            )}
            
            <div className="flex justify-between font-bold mt-4 pt-4 border-t border-blue-400">
              <span>Total</span>
              <span className="break-words">{formatCurrency(invoice.total, invoice.currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
