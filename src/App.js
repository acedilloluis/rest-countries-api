import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
const FILTER_MAP = {
  All: () => true,
  Africa: (country) => country.region === 'Africa',
  America: (country) => country.region === 'America',
  Asia: (country) => country.region === 'Asia',
  Europe: (country) => country.region === 'Europe',
  Oceania: (country) => country.region === 'Oceania',
};

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

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
    ) // locale compare to compare strings with non-ascii chars
    .filter(FILTER_MAP[filter]) // filter by region
    .filter((country) =>
      country.name.common.toUpperCase().includes(searchTerm.toUpperCase())
    ) // filter by search term
    .map((country) => (
      <Card
        key={country.name.common}
        name={country.name.common}
        pop={country.population}
        capital={country.capital}
        region={country.region}
        flag={country.flags.svg}
      />
    ));

  return (
    <>
      <Header />

      <div className="flex flex-nowrap items-center justify-between">
        <SearchBar setSearchTerm={setSearchTerm} />
        <Filter setFilter={setFilter} />
      </div>

      <div className="grid auto-rows-[minmax(350px,auto)] grid-cols-[repeat(auto-fill,minmax(305px,1fr))] gap-3">
        {cards}
      </div>
    </>
  );
}
