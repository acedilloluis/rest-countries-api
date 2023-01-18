import React, { useState } from 'react';
import filledSun from '../images/213-sun-filled.svg';
import sun from '../images/213-sun.svg';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  let icon = filledSun;

  function handleChange() {
    if (theme === 'dark') {
      setTheme('light');
      document.querySelector('body').classList.remove('dark');
      icon = filledSun;
    } else {
      setTheme('dark');
      document.querySelector('body').classList.add('dark');
      icon = sun;
    }
  }

  return (
    <label className="flex flex-nowrap items-center font-[600]">
      <input
        type="checkbox"
        onChange={handleChange}
        className="h-0 w-0 opacity-0"
      />
      <img src={icon} alt="icon of the sun" />
      Dark Mode
    </label>
  );
}

export default ThemeToggle;
