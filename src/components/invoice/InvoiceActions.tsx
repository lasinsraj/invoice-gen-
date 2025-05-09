
import React from 'react';
import { Button } from '@/components/ui/button';
import DownloadCountdown from './DownloadCountdown';

interface InvoiceActionsProps {
  onPrint: () => void;
  onDownload: () => void;
  isDownloading: boolean;
  countdown: number | null;
}

const InvoiceActions: React.FC<InvoiceActionsProps> = ({
  onPrint,
  onDownload,
  isDownloading,
  countdown
}) => {
  return (
    <div className="flex space-x-2">
      <Button onClick={onPrint} variant="outline">
        Print
      </Button>
      <DownloadCountdown 
        isDownloading={isDownloading} 
        countdown={countdown} 
        onDownload={onDownload} 
      />
    </div>
  );
};

export default InvoiceActions;
