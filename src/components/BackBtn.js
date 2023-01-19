import React from 'react';
import PropTypes from 'prop-types';

function BackBtn({ setSelectedCountry }) {
  return (
    <button
      type="button"
      title="Go back"
      onClick={() => setSelectedCountry('')}
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className="mb-6 bg-white bg-[url('./images/313-arrow-left.svg')] bg-left bg-no-repeat bg-origin-padding py-4 pr-6 pl-8 dark:bg-dark-blue dark:bg-[url('./images/313-arrow-left-dark.svg')]"
    >
      Back
    </button>
  );
}

BackBtn.propTypes = {
  setSelectedCountry: PropTypes.func,
};

export default BackBtn;
