import React from 'react';
import Gallery from 'react-photo-gallery';

export const GalleryCommissions = ({photos, title, direction}) => (
      <div>
        <h2>{title}</h2>
        <Gallery photos={photos} direction={direction}/>
      </div>
    );



