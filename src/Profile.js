import React, { useState, useRef } from 'react';
import ImageCropper from './ImageCropper';

function Profile({ src, setSrc }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleProfilePicClick = () => {
    setIsModalOpen(true);
    setImageSrc(src); // Set current profile picture as imageSrc for cropping
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setIsModalOpen(true);
        setImageSrc(reader.result); // Set selected file as imageSrc for cropping
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = (croppedImageUrl) => {
    setSrc(croppedImageUrl); // Update profile picture with cropped image
    setIsModalOpen(false); // Close cropping modal
  };

  return (
    <div className='container'>
      <div className="profile">
        <h2>User Profile</h2>
        <div className="profile-info">
          <img 
            src={src} 
            alt="Profile" 
            className="rounded-circle" 
            style={{ width: "120px", height: "120px", marginBottom: "20px", cursor: "pointer" }}
            onClick={handleProfilePicClick} // Open cropping interface on click
          />
          <div>
            <p><strong>Name:</strong> Rahul Mittal</p>
            <p><strong>Email:</strong> rm73487</p>
            <p><strong>Location:</strong> India</p>
            {/* Add more profile information as needed */}
          </div>
          <div className="change-profile-pic" style={{ marginTop: "20px" }}>
            <button 
              onClick={() => fileInputRef.current.click()}
              style={{ cursor: "pointer", color: "white", backgroundColor:"purple" }}
            >
              Change Profile Picture
            </button>
            <input 
              ref={fileInputRef}
              id="profilePicInput"
              type="file" 
              accept="image/*" 
              onChange={handleFileInputChange} 
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageCropper
          imageSrc={imageSrc}
          onCropComplete={onCropComplete}
        />
      )}
    </div>
  );
}

export default Profile;
