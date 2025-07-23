import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search posts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;