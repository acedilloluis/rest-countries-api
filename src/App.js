import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Modal from './components/Modal';
const FILTER_MAP = {
  All: () => true,
  Africa: (country) => country.region === 'Africa',
  Americas: (country) => country.region === 'Americas',
  Asia: (country) => country.region === 'Asia',
  Europe: (country) => country.region === 'Europe',
  Oceania: (country) => country.region === 'Oceania',
};

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('');

  function openModal(cca3) {
    const country = countries.find((country) => country.cca3 == cca3);
    setSelectedCountry(country);
    document.querySelector('body').setAttribute('style', 'overflow-y: hidden');
  }

  function findBorders(borders) {
    return borders.map((border) =>
      countries.find((country) => country.cca3 === border)
    );
  }

  useEffect(() => {
    try {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((json) => setCountries(json));
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const cards = countries
    .sort((a, b) =>
      a.name.common.toUpperCase().localeCompare(b.name.common.toUpperCase())
    ) // locale compare to compare strings with non-ascii chars to order cards alphabetically
    .filter(FILTER_MAP[filter]) // filter by region
    .filter((country) =>
      country.name.common.toUpperCase().includes(searchTerm.toUpperCase())
    ) // filter by search term
    .map((country) => (
      <Card
        key={country.name.common}
        name={country.name.common}
        cca3={country.cca3}
        pop={country.population}
        capital={country.capital}
        region={country.region}
        flag={country.flags.svg}
        openModal={openModal}
      />
    ));

  return (
    <>
      <Header />

      <div className="mb-6 flex flex-wrap items-center justify-between space-y-4 px-5">
        <SearchBar setSearchTerm={setSearchTerm} />
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      <div
        id="card-container"
        className="grid auto-rows-[minmax(350px,auto)] grid-cols-[repeat(auto-fill,minmax(305px,1fr))] gap-4 p-4"
      >
        {cards}
      </div>

      {selectedCountry !== '' && (
        <Modal
          country={selectedCountry}
          findBorders={findBorders}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </>
  );
}
