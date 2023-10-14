import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '/Users/lionelcoevoet/piexeducationpro/src/Assets/SideBarLogo.png';

function ProgramsPage() {
  return (
    <div className="programs-page">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div>ProgramsPage</div>
      </div>
      {/* Buttons to other pages */}
      <div className="page-buttons">
        <Link to="/mathematics" className="page-button">
          Mathematics
        </Link>
        <Link to="/english" className="page-button">
          English
        </Link>
      </div>
      {/* Additional content goes here */}
    </div>
  );
}

export default ProgramsPage;
