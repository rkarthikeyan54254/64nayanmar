import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Book, FileText, Image, Video } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useLanguage } from '../../contexts/LanguageContext';

function Dashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/admin');
      } else {
        setUser(session.user);
      }
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const menuItems = [
    { icon: Book, title: t('நூல்கள் மேலாண்மை', 'Manage Books'), path: '/admin/books' },
    { icon: FileText, title: t('மாத அட்டவணை மேலாண்மை', 'Manage Monthly Schedule'), path: '/admin/monthly' },
    { icon: Image, title: t('புகைப்படங்கள் மேலாண்மை', 'Manage Gallery'), path: '/admin/gallery' },
    { icon: Video, title: t('காணொளிகள் மேலாண்மை', 'Manage Videos'), path: '/admin/videos' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold font-tamil text-orange-700">
          {t('நிர்வாக பலகை', 'Admin Dashboard')}
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <LogOut size={20} />
          <span>{t('வெளியேறு', 'Logout')}</span>
        </button>
      </div>

      {/* Admin Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Icon size={24} className="text-orange-600" />
              <span className="text-lg font-tamil">{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;