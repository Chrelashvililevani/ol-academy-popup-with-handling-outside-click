import React, { useState, useEffect, useRef } from 'react';

const Popup = ({ onClose }) => {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.body.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="popup" >
      <div className="popup-content" ref={popupRef}>
        <p>This is the popup content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const MainPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="main-page">
      <h1>Welcome to the Main Page</h1>
      <button onClick={togglePopup}>Click Me</button>
      {showPopup && <Popup onClose={togglePopup} />}
    </div>
  );
};

export default MainPage;
