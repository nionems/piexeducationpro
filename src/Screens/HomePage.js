// HomePage.js
import React from 'react';
import logo from '/Users/lionelcoevoet/piexeducationpro/src/Assets/SideBarLogo.png';

function HomePage() {

  return (
    <div >
      <img src={logo} alt="Logo" className="logo" />
      <div>HomePage</div>
      {/* Additional content goes here */}
    </div>
  );
};

export default HomePage; // Make sure to export the component
