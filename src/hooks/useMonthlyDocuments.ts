import { useState, useEffect } from 'react';
import { MonthlyDocument } from '../types/monthly-menu';
import { monthlyDocuments } from '../data/monthlyDocuments';

export function useMonthlyDocuments(year: string) {
  const [documents, setDocuments] = useState<MonthlyDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      // Filter documents for the selected year from our hardcoded data
      const yearDocuments = monthlyDocuments.filter(doc => doc.year === year);
      setDocuments(yearDocuments);
      setError(null);
    } catch (err) {
      console.error('Error loading documents:', err);
      setError('Error loading documents');
    } finally {
      setLoading(false);
    }
  }, [year]);

  return { documents, loading, error };
}