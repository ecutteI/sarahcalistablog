import React from 'react';
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12 } from '../assets';

const GalleryContent = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
      {/* First Row */}
      <div className="grid gap-4 w-full h-full">
        <div>
          <img
            className="w-full h-full rounded-lg "
            src={gallery1}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery2}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery3}
            alt=""
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid gap-4">
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery4}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery5}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery6}
            alt=""
          />
        </div>
      </div>

      {/* Third Row */}
      <div className="grid gap-4">
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery7}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery8}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery9}
            alt=""
          />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="grid gap-4">
        <div>
          <img
            className="w-full h-fullrounded-lg"
            src={gallery10}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery11}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full rounded-lg"
            src={gallery12}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryContent;