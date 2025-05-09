
import React from 'react';
import { Button } from '@/components/ui/button';
import { HourglassIcon, DownloadIcon } from 'lucide-react';

interface DownloadCountdownProps {
  isDownloading: boolean;
  countdown: number | null;
  onDownload: () => void;
}

const DownloadCountdown: React.FC<DownloadCountdownProps> = ({ 
  isDownloading, 
  countdown, 
  onDownload 
}) => {
  return (
    <Button 
      onClick={onDownload} 
      disabled={isDownloading}
      className="relative"
    >
      {isDownloading ? (
        <>
          <HourglassIcon className="mr-2 h-4 w-4 animate-pulse" />
          Downloading in {countdown}s
        </>
      ) : (
        <>
          <DownloadIcon className="mr-2 h-4 w-4" />
          Download PDF
        </>
      )}
    </Button>
  );
};

export default DownloadCountdown;
