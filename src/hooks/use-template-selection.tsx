
import { useState, useEffect } from 'react';

type TemplateType = 'classic' | 'modern' | 'minimal' | 'professional';

export function useTemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(() => {
    try {
      return (localStorage.getItem('selectedTemplate') as TemplateType) || 'classic';
    } catch (error) {
      return 'classic';
    }
  });

  // Save template preference
  useEffect(() => {
    try {
      localStorage.setItem('selectedTemplate', selectedTemplate);
    } catch (error) {
      console.error('Error saving template preference:', error);
    }
  }, [selectedTemplate]);

  return {
    selectedTemplate,
    setSelectedTemplate
  };
}
