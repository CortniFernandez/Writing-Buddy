import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
    <div className="d-flex flex-grow-1">
    <h6 className="navbar-brand d-none d-lg-flex">Logo</h6>
    </div>
    <div className="page-links">
      <Link to="/todays-target">
        <p className="nav-item">Word Count</p>
      </Link>
      <Link to="/prompt">
        <p className="nav-item">Prompt Generator</p>
      </Link>
    </div>
  </div>
  );
}

export default Nav;