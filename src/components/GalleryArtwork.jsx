import React from 'react';
import Gallery from 'react-grid-gallery';
import './gallery.css';

const GalleryArtwork = ({images}) => (
    <div className="gallery">
      <h2>Original Artwork</h2>
      <Gallery images={images} backdropClosesModal={true} enableImageSelection={false} rowHeight={200}/>
    </div>
  );

export default GalleryArtwork;