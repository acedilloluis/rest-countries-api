import React, { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  function handleChange() {
    if (theme === 'dark') {
      setTheme('light');
      document.querySelector('body').classList.remove('dark');
    } else {
      setTheme('dark');
      document.querySelector('body').classList.add('dark');
    }
  }

  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <label className="flex flex-nowrap items-center bg-[url('./images/213-sun-filled.svg')] bg-left bg-no-repeat pl-4 font-[600] dark:bg-[url('./images/213-sun.svg')]">
      <input
        type="checkbox"
        onChange={handleChange}
        className="h-0 w-0 opacity-0"
      />
      Dark Mode
    </label>
  );
}

export default ThemeToggle;
