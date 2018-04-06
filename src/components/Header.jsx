import React from 'react';

const Header = ({ appName }) => (
  <nav className="navbar">
    <div className="navbar__container">
      <a className="navbar__app-name">{appName.toLowerCase()}</a>
    </div>
  </nav>
);

export default Header;
