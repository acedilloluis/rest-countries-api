import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ setSearchTerm }) {
  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search for a country
      </label>
      <input
        type="search"
        id="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default SearchBar;
