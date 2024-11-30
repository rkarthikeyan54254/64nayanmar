import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import ImageCard from '../components/ImageCard';

// This is sample data - replace with actual images from your collection
const photos = [
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/mama11.jpg",
    width: 1600,
    height: 900,
    alt: "Temple ceremony",
    date: "2023-12-15",
    description: "பிரதோஷ சிவநாயன்மார் அருளாசி வழங்குகிறார்"
  },
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/mama14.jpg",
    width: 1600,
    height: 1067,
    alt: "Temple visit",
    date: "2023-11-30",
    description: "காஞ்சி காமகோடி பீடம்"
  },
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/mama15a.jpg",
    width: 1600,
    height: 1067,
    alt: "Prayer ceremony",
    date: "2023-10-20",
    description: "பூஜை நிகழ்ச்சி"
  },
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/mama2.jpg",
    width: 1600,
    height: 1067,
    alt: "Prayer ceremony",
    date: "2023-10-20",
    description: "பூஜை நிகழ்ச்சி"
  },
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/Paati+Pradhosha%20Periyava.jpg",
    width: 1600,
    height: 1067,
    alt: "Prayer ceremony",
    date: "2023-10-20",
    description: "பூஜை நிகழ்ச்சி"
  },
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/Periyava+Pradhosha%20Periyava.jpg",
    width: 1600,
    height: 1067,
    alt: "Prayer ceremony",
    date: "2023-10-20",
    description: "பூஜை நிகழ்ச்சி"
  },
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/Pradosha%20Mama-Mami.jpeg",
    width: 1600,
    height: 1067,
    alt: "Prayer ceremony",
    date: "2023-10-20",
    description: "பூஜை நிகழ்ச்சி"
  },
  {
    src: "https://jqlvlnayjkdyyojxdajn.supabase.co/storage/v1/object/public/images/Pradhosha%20Periyava1.jpg",
    width: 1600,
    height: 1067,
    alt: "Prayer ceremony",
    date: "2023-10-20",
    description: "பூஜை நிகழ்ச்சி"
  }


];

function Gallery() {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  // const years = ['all', '2023', '2022', '2021'];
  const years = ['all'];
  const filteredPhotos = selectedYear === 'all' 
    ? photos 
    : photos.filter(photo => photo.date?.startsWith(selectedYear));

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold font-tamil text-orange-700">
          புகைப்பட தொகுப்பு
        </h1>
        
        {/* Year Filter */}
        <div className="flex space-x-4">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedYear === year
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
              }`}
            >
              {year === 'all' ? 'அனைத்தும்' : year}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="rounded-xl overflow-hidden">
        <PhotoAlbum
          layout="masonry"
          photos={filteredPhotos.map(photo => ({
            src: photo.src,
            width: photo.width,
            height: photo.height,
            alt: photo.alt,
          }))}
          renderPhoto={({ photo, wrapperStyle, imageProps }) => (
            <div style={wrapperStyle}>
              <ImageCard
                src={imageProps.src}
                alt={imageProps.alt || ''}
                date={photos.find(p => p.src === photo.src)?.date}
                description={photos.find(p => p.src === photo.src)?.description}
              />
            </div>
          )}
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 1024) return 2;
            return 3;
          }}
        />
      </div>
    </div>
  );
}

export default Gallery;