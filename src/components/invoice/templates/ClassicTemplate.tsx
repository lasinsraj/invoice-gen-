
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import PreviewHeader from '@/components/invoice/PreviewHeader';
import PreviewAddress from '@/components/invoice/PreviewAddress';
import PreviewLineItems from '@/components/invoice/PreviewLineItems';
import PreviewNotes from '@/components/invoice/PreviewNotes';
import PreviewSummary from '@/components/invoice/PreviewSummary';
import { useIsMobile } from '@/hooks/use-mobile';

interface ClassicTemplateProps {
  invoice: InvoiceData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ invoice }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="invoice-preview max-w-4xl mx-auto bg-white shadow-lg p-4 md:p-8 rounded print-only">
      <PreviewHeader
        invoiceNumber={invoice.invoiceNumber}
        issueDate={invoice.issueDate}
        dueDate={invoice.dueDate}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="overflow-hidden">
          <PreviewAddress
            title="From"
            addressData={invoice.billFrom}
          />
        </div>
        
        <div className="overflow-hidden">
          <PreviewAddress
            title="Bill To"
            addressData={invoice.billTo}
          />
        </div>
      </div>
      
      <PreviewLineItems
        items={invoice.items}
        currency={invoice.currency}
      />
      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className={isMobile ? "w-full" : "md:w-1/2"}>
          <PreviewNotes
            notes={invoice.notes}
            terms={invoice.terms}
          />
        </div>
        
        <PreviewSummary
          subtotal={invoice.subtotal}
          taxRate={invoice.taxRate}
          tax={invoice.tax}
          discountRate={invoice.discountRate}
          discount={invoice.discount}
          total={invoice.total}
          currency={invoice.currency}
        />
      </div>
    </div>
  );
};

export default ClassicTemplate;
