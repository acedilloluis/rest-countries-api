import React from 'react';

function Filter() {
  return (
    <>
      <label htmlFor="region" className="sr-only">
        Filter by region
      </label>
      <select id="region">
        <option selected disabled hidden>
          Filter by Region
        </option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </>
  );
}

export default Filter;
