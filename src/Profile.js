import React, { useRef,useState } from 'react';
//import "./App.css";

function Profile({ src, setSrc }) {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleProfilePicClick = () => {
    setIsModalOpen(true);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
            style={{ width: "120px", height: "120px", marginBottom: "20px" }}
            onClick={handleProfilePicClick} 
          />
          <div>
            <p><strong>Name:</strong> Rahul Mittal</p>
            <p><strong>Email:</strong> rm73487</p>
            <p><strong>Location:</strong> India</p>
            {/* Add more profile information as needed */}
          </div>
          <div className="change-profile-pic" style={{ marginTop: "20px" }}>
            <button 
              onClick={handleButtonClick}
              style={{ cursor: "pointer", color: "white", backgroundColor:"purple" }}
            >
              Change Profile Picture
            </button>
            <input 
              ref={fileInputRef}
              id="profilePicInput"
              type="file" 
              accept="image/*" 
              onChange={handleProfilePicChange} 
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={toggleModal}>&times;</span>
          <img className="modal-content" src={src} alt="Profile Large" />
          <div className="caption">Profile Picture</div>
        </div>
      )}
    </div>
  );
}

export default Profile;
