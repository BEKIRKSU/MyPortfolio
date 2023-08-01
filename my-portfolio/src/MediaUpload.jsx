import React from 'react';

const MediaUpload = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // You can handle the uploaded file here, e.g., display it, upload to server, etc.
    console.log('Uploaded file:', file);
  };

  return (
    <div>
      <h2>Media</h2>
      <div>
        <label htmlFor="photo-upload">Upload Photo:</label>
        <input type="file" id="photo-upload" accept="image/*" onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="video-upload">Upload Video:</label>
        <input type="file" id="video-upload" accept="video/*" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default MediaUpload;