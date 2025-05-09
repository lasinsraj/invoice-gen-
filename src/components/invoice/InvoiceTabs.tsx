
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InvoiceForm from '@/components/invoice/InvoiceForm';
import InvoicePreview from '@/components/InvoicePreview';
import AdBanner from '@/components/AdBanner';
import { InvoiceData } from '@/types/invoice';
import TemplateSelector from './TemplateSelector';

type TemplateType = 'classic' | 'modern' | 'minimal' | 'professional';

interface InvoiceTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  invoice: InvoiceData;
  onInvoiceUpdate: (invoice: InvoiceData) => void;
  selectedTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

const InvoiceTabs: React.FC<InvoiceTabsProps> = ({
  activeTab,
  onTabChange,
  invoice,
  onInvoiceUpdate,
  selectedTemplate,
  onTemplateChange
}) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="w-full mb-6">
        <TabsTrigger value="edit" className="flex-1">Edit Invoice</TabsTrigger>
        <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
      </TabsList>
      
      <TabsContent value="edit">
        <div className="mb-6">
          <AdBanner width="100%" height="90px" adSlot={1} />
        </div>
        
        <InvoiceForm onInvoiceUpdate={onInvoiceUpdate} initialInvoice={invoice} />
        
        <div className="mt-6">
          <AdBanner width="100%" height="250px" adSlot={2} />
        </div>
      </TabsContent>
      
      <TabsContent value="preview">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Invoice Preview</h2>
          <TemplateSelector 
            selectedTemplate={selectedTemplate}
            onTemplateChange={onTemplateChange}
          />
        </div>
        <InvoicePreview invoice={invoice} template={selectedTemplate} />
      </TabsContent>
    </Tabs>
  );
};

export default InvoiceTabs;
