import React from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="flex flex-nowrap items-center justify-between">
      <h1>Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
