import React from 'react';
import Gallery from 'react-grid-gallery';
import './galleryArtwork.css';

const GalleryArtwork = ({images}) => (
    <div id="originalArtwork" className="galleryArtwork">
      <h2>Original Artwork</h2>
      <Gallery images={images} backdropClosesModal={true} enableImageSelection={false} rowHeight={200}/>
    </div>
  );

export default GalleryArtwork;