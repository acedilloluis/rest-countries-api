import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
/* const FILTER_MAP = {
  All: () => true,
  Africa: (country) => country[0].region === 'Africa',
  America: (country) => country[0].region === 'America',
  Asia: (country) => country[0].region === 'Asia',
  Europe: (country) => country[0].region === 'Europe',
  Oceania: (country) => country[0].region === 'Oceania',
};
*/

export default function App() {
  const [countries, setCountries] = useState([]);
  // const [filter, setFilter] = useState('All');

  useEffect(() => {
    try {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((json) => setCountries(json));
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const cards = countries.map((country) => (
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

      <form className="flex flex-nowrap items-center justify-between">
        <SearchBar />
        <Filter />
      </form>

      <div className="grid auto-rows-[minmax(350px,auto)] grid-cols-[repeat(auto-fill,minmax(305px,1fr))] gap-3">
        {cards}
      </div>
    </>
  );
}
