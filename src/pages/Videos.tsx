import React from 'react';
import YouTube from 'react-youtube';

interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

// Sample data - replace with actual videos from Supabase
const videos: Video[] = [
  {
    id: '1',
    title: 'பிரதோஷ சிவநாயன்மார் உரை',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'சிறப்பு பூஜை',
    youtubeId: 'dQw4w9WgXcQ'
  }
];

function Videos() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-tamil text-orange-700 mb-4">
          காணொளிகள்
        </h1>
        <p className="text-gray-600 font-tamil">
          பிரதோஷ சிவநாயன்மார் அவர்களின் உரைகள் மற்றும் நிகழ்வுகள்
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map(video => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <YouTube
                videoId={video.youtubeId}
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    modestbranding: 1,
                    rel: 0
                  }
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-tamil text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;