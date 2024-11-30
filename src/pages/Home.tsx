import React from 'react';
import { BookOpen, Calendar, Image, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] rounded-xl overflow-hidden">
        <img
          src="https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/ANNA.jpg"
          alt="Spiritual Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-12 text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-tamil mb-4">
              {t('பிரதோஷ சிவநாயன்மார்', 'Pradosha Sivanayanmaar')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl font-tamil">
              {t(
                'காஞ்சி பரமாச்சார்ய சந்திரசேகரேந்திர சரஸ்வதியின் சீடர்',
                'Disciple of Kanchi Paramacharya Chandrasekharendra Saraswathi'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Image, title: t('புகைப்படங்கள்', 'Gallery'), path: '/gallery', color: 'bg-emerald-500' },
          { icon: Calendar, title: t('மாத அட்டவணை', 'Monthly Schedule'), path: '/monthly-menu', color: 'bg-blue-500' },
          { icon: Video, title: t('காணொளிகள்', 'Videos'), path: '/videos', color: 'bg-purple-500' },
          { icon: BookOpen, title: t('நூல்கள்', 'Books'), path: '/books', color: 'bg-red-500' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`${item.color} hover:opacity-90 transition-opacity rounded-xl p-6 text-white text-center group`}
            >
              <Icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-tamil">{item.title}</h3>
            </Link>
          );
        })}
      </section>

      {/* About Section */}
      <section className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold font-tamil mb-6 text-orange-700">
          {t('பற்றி', 'About')}
        </h2>
        <p className="text-lg text-gray-700 font-tamil leading-relaxed">
          {t(
            'காஞ்சி காமகோடி பீடத்தின் 68-வது பீடாதிபதி ஸ்ரீ சந்திரசேகரேந்திர சரஸ்வதி சுவாமிகளின் முக்கிய சீடர்களில் ஒருவரான பிரதோஷ சிவநாயன்மார் அவர்களின் வாழ்க்கை வரலாறு மற்றும் போதனைகளை பகிர்ந்து கொள்வதற்காக இந்த இணையதளம் உருவாக்கப்பட்டுள்ளது.',
            'This website is created to share the life history and teachings of Pradosha Sivanayanmaar, one of the prominent disciples of the 68th Peethadhipathi of Kanchi Kamakoti Peetham, Sri Chandrasekharendra Saraswathi Swamigal.'
          )}
        </p>
      </section>
    </div>
  );
}

export default Home;