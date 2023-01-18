import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, cca3, pop, capital, region, flag, openModal }) {
  const formattedPop = pop.toLocaleString();

  return (
    <section
      onClick={() => openModal(cca3)}
      className="rounded bg-white shadow dark:bg-dark-blue"
    >
      <img
        src={flag}
        alt={`${name}'s flag`}
        className="h-[175px] w-full rounded object-cover object-center"
      />
      <div className="p-5">
        <h2 className="mb-3 text-lg font-[800]">{name}</h2>
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
    </section>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  cca3: PropTypes.string,
  pop: PropTypes.number,
  capital: PropTypes.array,
  region: PropTypes.string,
  flag: PropTypes.string,
  openModal: PropTypes.func,
};

export default Card;
