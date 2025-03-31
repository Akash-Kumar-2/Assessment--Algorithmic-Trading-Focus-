import React, { useState } from 'react';
// import logo from '../assets/logo.png'; // Replace with the actual path to your logo

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <nav className={`navbar ${theme}`}>

      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h1>Algorithmic Trading System</h1>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 ' : '☀️ '}
      </button>
    </nav>
  );
};

export default Header;