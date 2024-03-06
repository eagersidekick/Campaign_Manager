import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-brand'>
        <Link className='navbar-item' to="/">Home</Link>
        <Link className='navbar-item' to="/player">Player Page</Link>
        <Link className='navbar-item' to="/tabletalk">Table Talk</Link>
        <Link className='navbar-item' to="/campaign">Campaign</Link>
        </div>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/login'>Login</Link>
          <Link className='navbar-item' to='/signup'>Sign-Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
