import React from 'react';
import PropTypes from 'prop-types';
import BackBtn from './BackBtn';

function Modal({ country, findBorders, setSelectedCountry }) {
  const countryKeys = Object.keys(country);

  let nativeNames = '';
  if (countryKeys.includes('nativeName')) {
    nativeNames = Object.keys(country.name.nativeName)
      .map((key) => country.name.nativeName[key].official)
      .join(', ');
  }

  let tld = '';
  if (countryKeys.includes('tld')) tld = country.tld.join(', ');

  let currencies = '';
  if (countryKeys.includes('currencies')) {
    currencies = Object.keys(country.currencies)
      .map((key) => country.currencies[key])
      .map((currency) => `${currency.name} (${currency.symbol})`)
      .join(', ');
  }

  let languages = '';
  if (countryKeys.includes('languages')) {
    languages = Object.keys(country.languages)
      .map((key) => country.languages[key])
      .join(', ');
  }

  let borderList = '';
  if (countryKeys.includes('borders')) {
    const borderCountries = findBorders(country.borders);
    const borderNames = borderCountries.map((country) => {
      return (
        <li
          key={country.cca3}
          className="inline bg-white px-6 py-4 shadow dark:bg-dark-blue"
        >
          {country.name.common}
        </li>
      );
    });
    borderList = (
      <ul className="flex flex-wrap items-center gap-4 font-[300]">
        {borderNames}
      </ul>
    );
  }

  return (
    <aside className="fixed top-0 left-0 h-full w-full overflow-y-scroll bg-very-light-gray p-6 dark:bg-very-dark-blue">
      <BackBtn setSelectedCountry={setSelectedCountry} />
      <div className="lg:flex lg:flex-nowrap lg:items-center lg:justify-start lg:gap-6">
        <img
          src={country.flags.svg}
          alt={`${country.name.common}'s flag`}
          className="h-auto max-w-full lg:w-1/2"
        />
        <div className="lg:basis-1/2">
          <h2 className="my-6 text-xl font-[800]">{country.name.common}</h2>
          <div className="mb-6 flex flex-col justify-start gap-6 md:flex-row md:items-center md:gap-10">
            <ul className="font-[600] md:basis-1/2">
              <li>
                Native Name:{' '}
                <span className="font-[300]">
                  {country.name.official}{' '}
                  {nativeNames !== '' ? `, ${nativeNames}` : ''}
                </span>
              </li>
              <li>
                Population:{' '}
                <span className="font-[300]">
                  {country.population.toLocaleString()}
                </span>
              </li>
              <li>
                Region: <span className="font-[300]">{country.region}</span>
              </li>
              <li>
                Sub Region:{' '}
                <span className="font-[300]">{country.subregion}</span>
              </li>
              <li>
                Capital: <span className="font-[300]">{country.capital}</span>
              </li>
            </ul>
            <ul className="font-[600] md:basis-1/2">
              <li>
                Top Level Domain: <span className="font-[300]">{tld}</span>
              </li>
              <li>
                Currencies: <span className="font-[300]">{currencies}</span>
              </li>
              <li>
                Languages: <span className="font-[300]">{languages}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start gap-6 md:flex-row md:items-center">
            <h3 className="text-lg font-[600]">Border Countries:</h3>
            {borderList}
          </div>
        </div>
      </div>
    </aside>
  );
}

Modal.propTypes = {
  country: PropTypes.object,
  findBorders: PropTypes.func,
  setSelectedCountry: PropTypes.func,
};

export default Modal;
