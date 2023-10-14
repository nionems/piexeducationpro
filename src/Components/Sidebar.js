import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '/Users/lionelcoevoet/piexeducationpro/src/Assets/SideBarLogo.png';

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div>
        {/* Logo */}
        <div className="mb-4">
          <img src={logo} alt="Logo" width="400" height="280" />
        </div>
        {/* Sidebar Menu */}
        <ul className="list-unstyled">
          <li>
            <i className="bi bi-house-door"></i>
            <a href="/" className="menuItem">Home</a>
          </li>
          <li>
            <i className="bi bi-laptop"></i>
            <a href="/programs" className="menuItem">Programs</a>
          </li>
          <li>
            <i className="bi bi-card-checklist"></i>
            <a href="/assessments" className="menuItem">Assessment</a>
          </li>
          <li>
            <i className="bi bi-file-earmark-text"></i>
            <a href="/reports" className="menuItem">Reports</a>
          </li>
          <li>
            <i className="bi bi-book"></i>
            <a href="/booklets" className="menuItem">Booklets</a>
          </li>
          <li>
            <i className="bi bi-person"></i>
            <a href="/users" className="menuItem">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
