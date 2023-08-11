import React, { useState } from 'react';
import './media-upload.css';

const MediaUpload = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const dataURL = reader.result;
      if (type === 'image') {
        setUploadedImage(dataURL);
        setUploadedVideo(null);
      } else if (type === 'video') {
        setUploadedVideo(dataURL);
        setUploadedImage(null);
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
      <button onClick={toggleExpand}>{isExpanded ? 'Collapse' : 'Expand'}</button>
      {isExpanded && (
        <div>
          <div>
            <label htmlFor="photo-upload">Upload Photo:</label>
            <input type="file" id="photo-upload" accept="image/*" onChange={(e) => handleFileChange(e, 'image')} />
            {uploadedImage && (
              <img src={uploadedImage} alt="Uploaded Image" style={{ maxWidth: '100%', marginTop: '10px' }} />
            )}
          </div>
          <div>
            <label htmlFor="video-upload">Upload Video:</label>
            <input type="file" id="video-upload" accept="video/*" onChange={(e) => handleFileChange(e, 'video')} />
            {uploadedVideo && (
              <video controls style={{ maxWidth: '100%', marginTop: '10px' }}>
                <source src={uploadedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaUpload;