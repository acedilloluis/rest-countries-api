import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, pop, capital, region, flag }) {
  const formattedPop = pop.toLocaleString();

  return (
    <div className="rounded bg-white shadow dark:bg-dark-blue">
      <img
        src={flag}
        alt={`${name}'s flag`}
        className="h-[175px] w-full rounded object-cover object-center"
      />
      <div className="p-5">
        <h2 className="mb-3 font-[800]">{name}</h2>
        <ul className="font-[600]">
          <li>
            Population: <span className="font-[300]">{formattedPop}</span>
          </li>
          <li>
            Region: <span className="font-[300]">{region}</span>
          </li>
          <li>
            Capital: <span className="font-[300]">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  pop: PropTypes.number,
  capital: PropTypes.array,
  region: PropTypes.string,
  flag: PropTypes.string,
};

export default Card;
