import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    localStorage.setItem('search', e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">CarBuyKaro</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
          <input
            className="form-control ms-auto"
            type="search"
            placeholder="Search posts"
            value={search}
            onChange={handleSearch}
            style={{ maxWidth: '200px' }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;