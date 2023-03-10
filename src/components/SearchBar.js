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
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        className="rounded-md bg-white bg-[url('./images/135-search.svg')] bg-left bg-no-repeat bg-origin-content p-6 indent-6 font-sans text-dark-gray shadow dark:bg-dark-blue dark:bg-[url('./images/135-search-dark.svg')] dark:text-white"
      />
    </>
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default SearchBar;
