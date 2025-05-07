
import React from 'react';

interface PreviewNotesProps {
  notes?: string;
  terms?: string;
}

const PreviewNotes: React.FC<PreviewNotesProps> = ({ notes, terms }) => {
  if (!notes && !terms) return null;

  return (
    <div className="mb-6 md:mb-0 w-full">
      {notes && (
        <div className="mb-4">
          <h3 className="font-semibold text-gray-500 mb-1">Notes</h3>
          <p className="text-gray-700 break-words">{notes}</p>
        </div>
      )}
      
      {terms && (
        <div>
          <h3 className="font-semibold text-gray-500 mb-1">Terms</h3>
          <p className="text-gray-700 break-words">{terms}</p>
        </div>
      )}
    </div>
  );
};

export default PreviewNotes;
