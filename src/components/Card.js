import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { name, pop, capital, region, flag } = props;

  return (
    <div>
      <div>
        <img src={flag} alt={`${name}'s flag`} />
      </div>
      <h2>{name}</h2>
      <ul>
        <li>Population: {pop}</li>
        <li>Region: {region}</li>
        <li>Capital: {capital}</li>
      </ul>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  pop: PropTypes.number,
  capital: PropTypes.string,
  region: PropTypes.string,
  flag: PropTypes.string,
};

export default Card;
