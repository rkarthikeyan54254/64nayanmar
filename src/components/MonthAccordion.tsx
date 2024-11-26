import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Month, MonthlyDocument } from '../types/monthly-menu';
import { useLanguage } from '../contexts/LanguageContext';
import MonthlyDocumentList from './MonthlyDocumentList';

interface MonthAccordionProps {
  month: Month;
  documents: MonthlyDocument[];
  isExpanded: boolean;
  onToggle: () => void;
}

export default function MonthAccordion({ 
  month, 
  documents, 
  isExpanded, 
  onToggle 
}: MonthAccordionProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between"
      >
        <span className="font-tamil text-lg">
          {t(month.ta, month.en)}
        </span>
        {isExpanded ? (
          <ChevronUp className="text-orange-600" />
        ) : (
          <ChevronDown className="text-orange-600" />
        )}
      </button>

      {isExpanded && <MonthlyDocumentList documents={documents} />}
    </div>
  );
}