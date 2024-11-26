import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Image, Video, Calendar, User, Flower } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { path: '/gallery', name: t('புகைப்படங்கள்', 'Gallery'), icon: Image },
    { path: '/monthly-menu', name: t('மாத அட்டவணை', 'Monthly'), icon: Calendar },
    { path: '/videos', name: t('காணொளிகள்', 'Videos'), icon: Video },
    { path: '/books', name: t('நூல்கள்', 'Books'), icon: BookOpen },
    { path: '/admin', name: t('நிர்வாகி', 'Admin'), icon: User },
  ];

  return (
    <nav className="bg-orange-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3 min-w-0">
            <Flower className="h-8 w-8 flex-shrink-0" />
            <div className="text-lg md:text-xl font-tamil font-bold truncate">
              {t('தந்தது உன் தன்னை', 'Thantathu Un Thannai')}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-1 hover:text-orange-200 transition-colors px-2 py-1 rounded-md hover:bg-orange-600"
                >
                  <Icon size={18} />
                  <span className="text-sm whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
            <div className="pl-2 border-l border-orange-600">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-orange-600 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-3 py-3 px-4 hover:bg-orange-600 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span className="font-tamil">{item.name}</span>
                </Link>
              );
            })}
            <div className="px-4 py-3 border-t border-orange-600 mt-2">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;