import React, { useState, useEffect } from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';

interface Book {
  id: string;
  title: { ta: string; en: string };
  description: { ta: string; en: string };
  coverPath: string;
  pdfPath: string;
}

// Sample books data with placeholder PDF
const books: Book[] = [
  {
    id: '1',
    title: {
      ta: 'அன்பே அருமருந்தே',
      en: 'Anbe Arumarundhe'
    },
    description: {
      ta: 'ஆன்மீக வழிகாட்டி நூல்',
      en: 'Spiritual Guide Book'
    },
    coverPath: 'covers/anbe-arumarundhe.jpg',
    pdfPath: 'pdfs/ithanai-yamatrai-book.pdf'
  },
  {
    id: '2',
    title: {
      ta: 'அவர் அருளாலே அலையங்கள்',
      en: 'Avar Arulale Alayangal'
    },
    description: {
      ta: 'கோயில் வழிபாடு பற்றிய நூல்',
      en: 'Book about Temple Worship'
    },
    coverPath: 'covers/avar-arulale-alayangal.jpg',
    pdfPath: 'pdfs/ithanai-yamatrai-book.pdf'
  },
  {
    id: '3',
    title: {
      ta: 'ராம ஈஸ்வர பெரியவா',
      en: 'Rama Eswara Periyava'
    },
    description: {
      ta: 'பெரியவா பற்றிய நூல்',
      en: 'Book about Periyava'
    },
    coverPath: 'covers/rama-eswara-periyava.jpg',
    pdfPath: 'pdfs/ithanai-yamatrai-book.pdf'
  },
  {
    id: '4',
    title: {
      ta: 'தமிழ் தெய்வம் பெரியவா',
      en: 'Tamil Deivam Periyava'
    },
    description: {
      ta: 'பெரியவா வாழ்க்கை வரலாறு',
      en: 'Biography of Periyava'
    },
    coverPath: 'covers/tamil-deivam-periyava.jpg',
    pdfPath: 'pdfs/ithanai-yamatrai-book.pdf'
  }
];

function Books() {
  const { t } = useLanguage();
  const [processedBooks, setProcessedBooks] = useState<(Book & { coverUrl?: string; pdfUrl?: string })[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSignedUrls() {
      setLoading(true);
      setError(null);
      try {
        const booksWithUrls = await Promise.all(
          books.map(async (book) => {
            try {
              // Get cover image URL
              const { data: coverData } = await supabase
                .storage
                .from('books')
                .createSignedUrl(book.coverPath, 3600);

              // Get PDF URL - using the same placeholder PDF for all books
              const { data: pdfData } = await supabase
                .storage
                .from('books')
                .createSignedUrl(book.pdfPath, 3600);

              return {
                ...book,
                coverUrl: coverData?.signedUrl,
                pdfUrl: pdfData?.signedUrl
              };
            } catch (err) {
              console.error(`Error processing book ${book.id}:`, err);
              return {
                ...book,
                coverUrl: undefined,
                pdfUrl: undefined
              };
            }
          })
        );

        setProcessedBooks(booksWithUrls);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError(t(
          'நூல்களை ஏற்றுவதில் பிழை ஏற்பட்டது',
          'Error loading books'
        ));
      } finally {
        setLoading(false);
      }
    }

    getSignedUrls();
  }, [t]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-gray-100 rounded-lg h-96"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center justify-center space-x-2 text-red-700">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-tamil text-orange-700 mb-4">
          {t('நூல்கள்', 'Books')}
        </h1>
        <p className="text-gray-600 font-tamil">
          {t(
            'பிரதோஷ சிவநாயன்மார் அவர்களின் நூல்கள்',
            'Books by Pradosha Sivanayanmaar'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processedBooks.map(book => (
          <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="aspect-w-3 aspect-h-4 relative">
              {book.coverUrl ? (
                <img
                  src={book.coverUrl}
                  alt={t(book.title.ta, book.title.en)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400';
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <BookOpen size={48} className="text-gray-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {book.pdfUrl && (
                  <a
                    href={book.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-orange-600 px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-orange-50 transition-colors"
                  >
                    <BookOpen size={20} />
                    <span className="font-tamil">{t('படிக்க', 'Read')}</span>
                  </a>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-tamil text-gray-800 mb-2">
                {t(book.title.ta, book.title.en)}
              </h3>
              <p className="text-gray-600 font-tamil">
                {t(book.description.ta, book.description.en)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;