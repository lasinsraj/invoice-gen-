
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { InvoiceData } from '@/types/invoice';
import { generatePDF } from '@/utils/invoice-utils';

export function useDownloadCountdown(invoice: InvoiceData) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Countdown effect
  useEffect(() => {
    if (countdown === null) return;
    
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // When countdown reaches 0, trigger download
      setIsDownloading(false);
      setCountdown(null);
      
      // Generate and download PDF
      generatePDF(invoice);
      
      toast.success('Invoice downloaded successfully!', {
        description: 'Your invoice has been downloaded as PDF.',
      });
    }
  }, [countdown, invoice]);

  // Download as PDF with countdown
  const handleDownload = () => {
    if (countdown !== null) return; // Prevent multiple clicks during countdown
    
    toast.info('Preparing your invoice...', {
      description: 'Download will start in 5 seconds.',
    });
    
    setIsDownloading(true);
    setCountdown(5);
  };

  return {
    countdown,
    isDownloading,
    handleDownload
  };
}
