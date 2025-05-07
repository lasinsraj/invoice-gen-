
import React from 'react';
import { formatDate } from '@/utils/invoice-utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface PreviewHeaderProps {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
}

const PreviewHeader: React.FC<PreviewHeaderProps> = ({ 
  invoiceNumber, 
  issueDate, 
  dueDate 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'justify-between items-start'} mb-8 md:mb-12`}>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-invoice-primary">INVOICE</h1>
        <p className="text-gray-500 mt-1">{formatDate(issueDate)}</p>
      </div>
      <div className={isMobile ? '' : 'text-right'}>
        <p className="font-bold">{invoiceNumber || "#INV-0001"}</p>
        <p className="text-gray-500 mt-1">Due: {formatDate(dueDate)}</p>
      </div>
    </div>
  );
};

export default PreviewHeader;
