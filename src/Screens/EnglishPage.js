import React from 'react';
import logo from '/Users/lionelcoevoet/piexeducationpro/src/Assets/SideBarLogo.png';

function EnglishPage() {
  // Array of button names
  const buttonNames = [
    'english-es1-unit-01',
    'english-es1-unit-02',
    'english-es1-unit-03',
    'english-es1-unit-04',
    'english-es1-unit-05',
  ];

  return (
    <div className="english-page">
      <img src={logo} alt="Logo" className="logo" />
      <div>English</div>
      {/* Render buttons from the array */}
      <div className="button-container">
        {buttonNames.map((button, index) => (
          <button key={index} className="custom-button">
            {button}
          </button>
        ))}
      </div>
      {/* Additional content goes here */}
    </div>
  );
}

export default EnglishPage;
