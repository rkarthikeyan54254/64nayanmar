import React from 'react';
import { FileText } from 'lucide-react';
import { MonthlyDocument } from '../types/monthly-menu';
import { useLanguage } from '../contexts/LanguageContext';

interface MonthlyDocumentListProps {
  documents: MonthlyDocument[];
}

export default function MonthlyDocumentList({ documents }: MonthlyDocumentListProps) {
  const { t } = useLanguage();

  if (documents.length === 0) {
    return (
      <div className="p-4 text-gray-500 text-center font-tamil">
        {t(
          'இந்த மாதத்திற்கான ஆவணங்கள் எதுவும் இல்லை',
          'No documents available for this month'
        )}
      </div>
    );
  }

  return (
    <div className="border-t border-gray-100">
      {documents.map(doc => (
        <a
          key={doc.id}
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-4 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-b-0"
        >
          <FileText className="text-orange-600" size={20} />
          <span className="font-tamil">
            {t(doc.title.ta, doc.title.en)}
          </span>
        </a>
      ))}
    </div>
  );
}