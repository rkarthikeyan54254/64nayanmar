import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { months } from '../data/months';
import { useMonthlyDocuments } from '../hooks/useMonthlyDocuments';
import MonthAccordion from '../components/MonthAccordion';

function MonthlyMenu() {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);
  
  // In the future, this could be fetched from an API or Supabase
  const years = ['2024', '2023', '2022'];
  
  const { documents, loading, error } = useMonthlyDocuments(selectedYear);

  const toggleMonth = (month: string) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  const getDocumentsForMonth = (month: string) => {
    return documents.filter(doc => doc.month === month);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center justify-center space-x-2 text-red-700">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-tamil text-orange-700 mb-4">
          {t('மாத அட்டவணை', 'Monthly Schedule')}
        </h1>
        <p className="text-gray-600 font-tamil">
          {t(
            'ஒவ்வொரு மாதமும் நடைபெறும் நிகழ்வுகளின் விவரங்கள்',
            'Details of events happening each month'
          )}
        </p>
      </div>

      {/* Year Selector */}
      <div className="flex justify-center space-x-4">
        {years.map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2 rounded-lg transition-colors ${
              selectedYear === year
                ? 'bg-orange-600 text-white'
                : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {months.map(month => (
          <MonthAccordion
            key={month.value}
            month={month}
            documents={getDocumentsForMonth(month.value)}
            isExpanded={expandedMonth === month.value}
            onToggle={() => toggleMonth(month.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default MonthlyMenu;