import React from 'react';

const SearchBar = ({ searchId, setSearchId, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Search by ID"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
