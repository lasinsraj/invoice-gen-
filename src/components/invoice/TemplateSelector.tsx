
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type TemplateType = 'classic' | 'modern' | 'minimal' | 'professional';

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateChange
}) => {
  return (
    <Select 
      value={selectedTemplate} 
      onValueChange={(value) => onTemplateChange(value as TemplateType)}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a template" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="classic">Classic Template</SelectItem>
        <SelectItem value="modern">Modern Template</SelectItem>
        <SelectItem value="minimal">Minimal Template</SelectItem>
        <SelectItem value="professional">Professional Template</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TemplateSelector;
