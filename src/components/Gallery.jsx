import React, { useState } from 'react';
import { nature1, nature2, nature3, nature4 } from '../assets';

const images = [nature1, nature2, nature3, nature4];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
          key={index}
          style={{ backgroundColor: 'transparent' }} // Ensure no background color
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {image && (
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          )}
        </div>
        
        
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white/30 dark:bg-gray-800/30' : 'bg-transparent'
            }`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        style={{ backgroundColor: 'transparent' }}  // Makes the button background transparent
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none focus:ring-transparent"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/30 group-hover:bg-gray-700/50 group-focus:ring-4 group-focus:ring-gray-700/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>


      <button
        type="button"
        style={{ backgroundColor: 'transparent' }}  // Makes the button background transparent
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none focus:ring-transparent"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/30 group-hover:bg-gray-700/50 group-focus:ring-4 group-focus:ring-gray-700/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4-4 4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>



    </div>
  );
};

export default Gallery;
