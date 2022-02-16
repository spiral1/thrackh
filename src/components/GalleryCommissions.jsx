import React from 'react';
import Gallery from 'react-grid-gallery';
import './gallery.css';

const GalleryCommissions = ({images}) => (
      <div className="gallery">
        <h2>Commissions</h2>
        <Gallery images={images} backdropClosesModal={true} enableImageSelection={false} rowHeight={200}/>
      </div>
    );

export default GalleryCommissions;


