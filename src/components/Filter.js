import React from 'react';
import PropTypes from 'prop-types';

function Filter({ setFilter }) {
  return (
    <>
      <label htmlFor="region" className="sr-only">
        Filter by region
      </label>
      <select id="region" onChange={(e) => setFilter(e.target.value)}>
        <option selected disabled hidden>
          Filter by Region
        </option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func,
};

export default Filter;
