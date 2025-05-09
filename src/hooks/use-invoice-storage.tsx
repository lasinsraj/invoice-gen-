
import { useState, useEffect } from 'react';
import { InvoiceData, defaultInvoice } from '@/types/invoice';

const STORAGE_KEY = 'invoiceBuilderData';

export function useInvoiceStorage() {
  // Store invoice in state that persists across tab changes and page refreshes
  const [invoice, setInvoice] = useState<InvoiceData>(() => {
    try {
      // Try to restore from localStorage if available
      const savedInvoice = localStorage.getItem(STORAGE_KEY);
      return savedInvoice ? JSON.parse(savedInvoice) : defaultInvoice;
    } catch (error) {
      console.error('Error loading saved invoice data:', error);
      return defaultInvoice;
    }
  });

  // Save to localStorage whenever invoice changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(invoice));
    } catch (error) {
      console.error('Error saving invoice data:', error);
    }
  }, [invoice]);

  return {
    invoice,
    setInvoice
  };
}
