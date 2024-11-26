import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  date?: string;
  description?: string;
}

function ImageCard({ src, alt, date, description }: ImageCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          {date && <p className="text-sm mb-1">{date}</p>}
          {description && <p className="text-base font-tamil">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;