import React from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="mb-2 flex flex-nowrap items-center justify-between bg-white px-5 py-8 shadow dark:bg-dark-blue">
      <h1 className="text-lg font-[800]">Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
