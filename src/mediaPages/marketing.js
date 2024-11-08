import React, { useState, useEffect } from 'react';
import '../pages.css';

const images = require.context('./marketingGraphic', false, /\.(png|jpe?g|svg)$/);
const imageSrcs = images.keys().map(image => images(image));

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Assuming you've used dynamic imports:
    Promise.all(imageSrcs)
      .then(imageUrls => setImages(imageUrls))
      .catch(error => console.error('Error loading images:', error));
  }, [imageSrcs]);

  return (
    <div>
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} style={{
          width: "200px",
        }}/>
      ))}
    </div>
  );
}

function SocialMediaMarketingPage() {
    return (

      <div className='page'>
      <div className='headingContainer'>
        <div className="pageHeading">Social Media Marketing - Graphic Design</div>
      </div>
      <div className='descriptionContainer'>
        <p><strong>Description:</strong> Diverse social media/marketing/etc. posters for various clubs and organizations. Made in Canva.
        </p>
      </div>

      <br></br>

      <ImageGallery/>

    </div>
    );
}

export default SocialMediaMarketingPage;

