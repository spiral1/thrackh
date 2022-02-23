import React from 'react';
import Gallery from 'react-grid-gallery';
import './galleryCommissions.css';

const GalleryCommissions = ({images}) => (
      <div id="commissions" className="gallery">
        <h2>Commissions</h2>
        <Gallery images={images} backdropClosesModal={true} enableImageSelection={false} rowHeight={200}/>

      </div>
    );

export default GalleryCommissions;


