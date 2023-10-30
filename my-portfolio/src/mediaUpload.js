import React, { useState } from 'react';
import './Media-upload.css';

const MediaUpload = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mediaItems, setMediaItems] = useState([]);
  const MAX_MEDIA_ITEMS = 10; // Maximum number of media items allowed

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const dataURL = reader.result;
      if (mediaItems.length < MAX_MEDIA_ITEMS) {
        setMediaItems((prevMediaItems) => [...prevMediaItems, { type, dataURL }]);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="media-container">
      <h2>Media</h2>
      <button className='button-view-collapse' onClick={toggleExpand}>{isExpanded ? 'Collapse' : 'View'}</button>
      {isExpanded && (
        <div>
          <div className='buttons-photo'>
            <label htmlFor="photo-upload"></label>
            <input type="file" id="photo-upload" accept="image/*" onChange={(e) => handleFileChange(e, 'image')} />
          </div>
          <div className='buttons-video'>
            <label htmlFor="video-upload"></label>
            <input type="file" id="video-upload" accept="video/*" onChange={(e) => handleFileChange(e, 'video')} />
          </div>
          <div className="media-items">
            {mediaItems.map((mediaItem, index) => (
              <div key={index} className="media-item">
                {mediaItem.type === 'image' ? (
                  <img src={mediaItem.dataURL} alt={`Uploaded Image ${index}`} style={{ maxWidth: '100%', marginTop: '10px' }} />
                ) : (
                  <video controls style={{ maxWidth: '100%', marginTop: '10px' }}>
                    <source src={mediaItem.dataURL} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaUpload;