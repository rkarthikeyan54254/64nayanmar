export interface MonthlyDocument {
  id: string;
  title: {
    ta: string;
    en: string;
  };
  url: string;
  date: string; // Format: YYYY-MM
  year: string;
  month: string;
}

export interface Month {
  value: string;
  ta: string;
  en: string;
}