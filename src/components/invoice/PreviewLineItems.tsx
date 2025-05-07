
import React from 'react';
import { InvoiceItem } from '@/types/invoice';
import { formatCurrency } from '@/utils/invoice-utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface PreviewLineItemsProps {
  items: InvoiceItem[];
  currency: string;
}

const PreviewLineItems: React.FC<PreviewLineItemsProps> = ({ items, currency }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div className="mb-8 overflow-x-auto">
        <div className="min-w-[300px]">
          {items.map((item) => (
            <div key={item.id} className="border-b py-3">
              <div className="font-medium">{item.description}</div>
              <div className="grid grid-cols-3 text-sm mt-1 text-gray-600">
                <div>Qty: {item.quantity}</div>
                <div>Rate: {formatCurrency(item.rate, currency)}</div>
                <div className="text-right font-semibold text-gray-800">
                  {formatCurrency(item.amount, currency)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12 overflow-x-auto">
      <table className="w-full text-left min-w-[500px]">
        <thead>
          <tr className="border-b border-t">
            <th className="py-3 px-0 text-gray-500 text-left">Description</th>
            <th className="py-3 px-4 text-gray-500 text-right">Qty</th>
            <th className="py-3 px-4 text-gray-500 text-right">Rate</th>
            <th className="py-3 px-0 text-gray-500 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-4 px-0">{item.description}</td>
              <td className="py-4 px-4 text-right">{item.quantity}</td>
              <td className="py-4 px-4 text-right">{formatCurrency(item.rate, currency)}</td>
              <td className="py-4 px-0 text-right break-words max-w-[150px]">{formatCurrency(item.amount, currency)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviewLineItems;
