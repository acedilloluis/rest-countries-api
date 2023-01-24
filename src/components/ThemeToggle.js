import React, { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  function handleChange() {
    if (theme === 'dark') {
      setTheme('light');
      document.querySelector('html').classList.remove('dark');
    } else {
      setTheme('dark');
      document.querySelector('html').classList.add('dark');
    }
  }

  return (
    <label
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleChange();
      }}
      // eslint-disable-next-line tailwindcss/no-contradicting-classname
      className="flex cursor-pointer flex-nowrap items-center bg-[url('./images/213-sun-filled.svg')] bg-left bg-no-repeat py-4 pl-4 font-[600] dark:bg-[url('./images/213-sun.svg')]"
    >
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
