
import React from 'react';
import { InvoiceData } from '@/types/invoice';
import ClassicTemplate from '@/components/invoice/templates/ClassicTemplate';
import ModernTemplate from '@/components/invoice/templates/ModernTemplate';
import MinimalTemplate from '@/components/invoice/templates/MinimalTemplate';
import ProfessionalTemplate from '@/components/invoice/templates/ProfessionalTemplate';
import PreviewLineItems from '@/components/invoice/PreviewLineItems';

interface InvoicePreviewProps {
  invoice: InvoiceData;
  template?: 'classic' | 'modern' | 'minimal' | 'professional';
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ invoice, template = 'classic' }) => {
  // Render the selected template
  switch (template) {
    case 'modern':
      return <ModernTemplate invoice={invoice} />;
    case 'minimal':
      return <MinimalTemplate invoice={invoice} />;
    case 'professional':
      return <ProfessionalTemplate invoice={invoice} />;
    case 'classic':
    default:
      return <ClassicTemplate invoice={invoice} />;
  }
};

export default InvoicePreview;
