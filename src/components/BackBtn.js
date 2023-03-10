import React from 'react';
import PropTypes from 'prop-types';

function BackBtn({ setSelectedCountry }) {
  return (
    <button
      type="button"
      title="Go back"
      onClick={() => {
        setSelectedCountry('');
        document
          .querySelector('body')
          .setAttribute('style', 'overflow-y: scroll');
      }}
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className="mb-6 rounded bg-white bg-[url('./images/313-arrow-left.svg')] bg-left bg-no-repeat bg-origin-content px-6 py-4 indent-6 dark:bg-dark-blue dark:bg-[url('./images/313-arrow-left-dark.svg')]"
    >
      Back
    </button>
  );
}

BackBtn.propTypes = {
  setSelectedCountry: PropTypes.func,
};

export default BackBtn;
