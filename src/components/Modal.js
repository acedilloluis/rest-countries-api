import React from 'react';
import PropTypes from 'prop-types';

function Modal({ country, findBorders }) {
  const countryKeys = Object.keys(country);
  const nativeNameKeys = Object.keys(country.name.nativeName);
  const currencyKeys = Object.keys(country.currencies);
  const languageKeys = Object.keys(country.languages);

  const nativeNames = nativeNameKeys
    .map((key) => country.name.nativeName[key].official)
    .join(', ');
  const tld = country.tld.join(', ');
  const currencies = currencyKeys
    .map((key) => country.currencies[key])
    .map((currency) => `${currency.name} ${currency.symbol}`)
    .join(', ');
  const languages = languageKeys
    .map((key) => country.languages[key])
    .join(', ');

  let borderList = '';
  if (countryKeys.includes('borders')) {
    const borderCountries = findBorders(country.borders);
    const borderNames = borderCountries.map((country) => {
      return (
        <li
          key={country.cca3}
          className="inline w-min bg-white px-6 py-4 shadow dark:bg-dark-blue"
        >
          {country.name.common}
        </li>
      );
    });
    borderList = <ul className="font-[300]">{borderNames}</ul>;
  }

  return (
    <aside>
      <img
        src={country.flags.svg}
        alt={`${country.name.common}'s flag`}
        className="h-auto max-w-full"
      />
      <div>
        <h2 className="text-xl font-[800]">{country.name.common}</h2>
        <ul className="font-[600]">
          <li>
            Native Name:{' '}
            <span className="font-[300]">
              {country.name.official}, {nativeNames}
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
            Sub Region: <span className="font-[300]">{country.subregion}</span>
          </li>
          <li>
            Capital: <span className="font-[300]">{country.capital}</span>
          </li>
        </ul>
        <ul>
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
        <h3 className="text-lg font-[600]">Border Countries:</h3>
        {borderList}
      </div>
    </aside>
  );
}

Modal.propTypes = {
  country: PropTypes.object,
  findBorders: PropTypes.func,
};

export default Modal;
