import React from 'react';
import PropTypes from 'prop-types';

function Filter({ setFilter }) {
  function toggleDropdown() {
    const dropdown = document.querySelector('#dropdown');
    dropdown.classList.contains('hidden')
      ? dropdown.classList.remove('hidden')
      : dropdown.classList.add('hidden');
  }

  function handleClick(filterName) {
    setFilter(filterName);
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          className="inline-flex w-full justify-center rounded-md bg-white bg-[url('./images/324-circle-down.svg')] bg-right bg-no-repeat bg-origin-padding py-2 pl-4 pr-6 text-sm font-[300] shadow dark:bg-dark-blue dark:bg-[url('./images/324-circle-down-dark.svg')] dark:text-white"
        >
          Filter by Region
        </button>
      </div>

      <div
        role="menu"
        id="dropdown"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
        className="absolute right-0 z-10 mt-2 hidden w-full origin-top-right rounded-md bg-white font-[300] shadow-lg focus:outline-none dark:bg-dark-blue dark:text-white"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            role="menuitem"
            tabIndex="-1"
            onClick={() => handleClick('All')}
            className="block px-4 py-2"
          >
            All
          </a>
          <a
            href="#"
            role="menuitem"
            tabIndex="-1"
            onClick={() => handleClick('Africa')}
            className="block px-4 py-2"
          >
            Africa
          </a>
          <a
            href="#"
            role="menuitem"
            tabIndex="-1"
            onClick={() => handleClick('Americas')}
            className="block px-4 py-2"
          >
            Americas
          </a>
          <a
            href="#"
            role="menuitem"
            tabIndex="-1"
            onClick={() => handleClick('Asia')}
            className="block px-4 py-2"
          >
            Asia
          </a>
          <a
            href="#"
            role="menuitem"
            tabIndex="-1"
            onClick={() => handleClick('Europe')}
            className="block px-4 py-2"
          >
            Europe
          </a>
          <a
            href="#"
            role="menuitem"
            tabIndex="-1"
            onClick={() => handleClick('Oceania')}
            className="block px-4 py-2"
          >
            Oceania
          </a>
        </div>
      </div>
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func,
};

export default Filter;
