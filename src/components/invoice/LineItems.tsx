
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InvoiceItem } from '@/types/invoice';
import { Trash, Plus } from 'lucide-react';

interface LineItemsProps {
  items: InvoiceItem[];
  onItemChange: (id: string, field: keyof InvoiceItem, value: string | number) => void;
  onItemAdd: () => void;
  onSampleItemAdd: () => void;
  onItemRemove: (id: string) => void;
}

const LineItems: React.FC<LineItemsProps> = ({ 
  items, 
  onItemChange, 
  onItemAdd, 
  onSampleItemAdd, 
  onItemRemove 
}) => {
  // Handle number changes with proper parsing
  const handleNumberChange = (id: string, field: keyof InvoiceItem, value: string) => {
    // Handle empty input
    if (value === '') {
      onItemChange(id, field, 0);
      return;
    }
    
    // Parse the number and validate - only accepts numbers with up to 2 decimal places
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        onItemChange(id, field, numValue);
      }
    }
  };

  // Handle text input with validation
  const handleTextChange = (id: string, field: keyof InvoiceItem, value: string) => {
    // Limit text length to prevent overflow
    const maxLength = 255;
    const sanitizedValue = value.slice(0, maxLength);
    onItemChange(id, field, sanitizedValue);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Items</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-2 w-full">Description</th>
                <th className="text-right py-2 px-2">Quantity</th>
                <th className="text-right py-2 px-2">Rate</th>
                <th className="text-right py-2 px-2">Amount</th>
                <th className="py-2 px-2 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="line-item border-b">
                  <td className="py-2 px-2">
                    <Input
                      value={item.description}
                      onChange={(e) => handleTextChange(item.id, 'description', e.target.value)}
                      placeholder="Item description"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <Input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={item.quantity || ''}
                      onChange={(e) => handleNumberChange(item.id, 'quantity', e.target.value)}
                      className="text-right"
                      placeholder="0"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <Input
                      type="text"
                      inputMode="decimal"
                      pattern="[0-9]*\.?[0-9]{0,2}"
                      value={item.rate || ''}
                      onChange={(e) => handleNumberChange(item.id, 'rate', e.target.value)}
                      className="text-right"
                      placeholder="0.00"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <Input
                      readOnly
                      value={typeof item.amount === 'number' ? item.amount.toFixed(2) : '0.00'}
                      className="text-right bg-gray-50"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onItemRemove(item.id)}
                      disabled={items.length <= 1}
                      type="button"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            onClick={onItemAdd}
            type="button"
            className="flex items-center gap-1"
          >
            <Plus className="h-4 w-4" /> Add Item
          </Button>
          
          <Button 
            variant="outline" 
            onClick={onSampleItemAdd}
            type="button"
            className="flex items-center gap-1"
          >
            Add Sample Item
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineItems;
