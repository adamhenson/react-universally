import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import theme from './theme.css';

function Header() {
  return (
    <div className={theme.header}>
      <Logo />
      <h1>React, Universally</h1>
      <strong>
        A starter kit giving you the minimum requirements for a modern universal react application.
      </strong>
      <Menu />
    </div>
  );
}

export default Header;
