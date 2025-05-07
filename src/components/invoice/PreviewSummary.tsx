
import React from 'react';
import { formatCurrency } from '@/utils/invoice-utils';

interface PreviewSummaryProps {
  subtotal: number;
  taxRate: number;
  tax: number;
  discountRate: number;
  discount: number;
  total: number;
  currency: string;
}

const PreviewSummary: React.FC<PreviewSummaryProps> = ({
  subtotal,
  taxRate,
  tax,
  discountRate,
  discount,
  total,
  currency
}) => {
  return (
    <div className="w-full md:w-1/3">
      <div className="bg-gray-50 p-4 rounded shadow-sm">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span className="text-right break-words max-w-[150px]">{formatCurrency(subtotal, currency)}</span>
        </div>
        
        {taxRate > 0 && (
          <div className="flex justify-between mb-2">
            <span>Tax ({taxRate}%)</span>
            <span className="text-right break-words max-w-[150px]">{formatCurrency(tax, currency)}</span>
          </div>
        )}
        
        {discountRate > 0 && (
          <div className="flex justify-between mb-2">
            <span>Discount ({discountRate}%)</span>
            <span className="text-right break-words max-w-[150px]">-{formatCurrency(discount, currency)}</span>
          </div>
        )}
        
        <div className="flex justify-between font-bold mt-3 pt-3 border-t border-gray-300">
          <span>Total</span>
          <span className="text-invoice-primary text-right break-words max-w-[150px]">{formatCurrency(total, currency)}</span>
        </div>
      </div>
    </div>
  );
};

export default PreviewSummary;
