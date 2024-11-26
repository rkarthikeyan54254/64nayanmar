import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useLanguage } from '../../contexts/LanguageContext';

interface Book {
  id: string;
  title: { ta: string; en: string };
  description: { ta: string; en: string };
  coverPath: string;
  pdfPath: string;
}

function ManageBooks() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBooks(data || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'pdf') => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${type}s/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('books')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Handle the uploaded file path
      setSelectedFile(file);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleAddBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add book implementation
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="flex items-center space-x-2 text-orange-600 hover:text-orange-700"
        >
          <ArrowLeft size={20} />
          <span>{t('திரும்பிச் செல்', 'Back')}</span>
        </button>
        <h1 className="text-2xl font-bold text-orange-700 font-tamil">
          {t('நூல்கள் மேலாண்மை', 'Manage Books')}
        </h1>
      </div>

      {/* Add New Book Form */}
      <form onSubmit={handleAddBook} className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-xl font-tamil text-orange-600 mb-4">
          {t('புதிய நூல் சேர்க்க', 'Add New Book')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('தலைப்பு (தமிழ்)', 'Title (Tamil)')}
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('தலைப்பு (ஆங்கிலம்)', 'Title (English)')}
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('அட்டைப்படம்', 'Cover Image')}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, 'cover')}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('PDF கோப்பு', 'PDF File')}
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileUpload(e, 'pdf')}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
        >
          {t('சேர்க்க', 'Add Book')}
        </button>
      </form>

      {/* Books List */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-tamil text-orange-600 mb-4">
            {t('நூல்கள் பட்டியல்', 'Books List')}
          </h2>
          {loading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600 mx-auto"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-tamil">{book.title.ta}</h3>
                    <p className="text-sm text-gray-600">{book.title.en}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                      <Edit size={20} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageBooks;