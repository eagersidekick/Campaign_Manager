import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/player">Player Page</Link>
        <Link to="/tabletalk">Table Talk</Link>
      </nav>
    </header>
  );
}

export default Header;
