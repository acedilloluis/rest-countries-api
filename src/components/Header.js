import React from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="flex flex-nowrap items-center justify-between bg-white px-3 py-8 dark:bg-very-dark-blue">
      <h1 className="text-lg font-[800]">Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
