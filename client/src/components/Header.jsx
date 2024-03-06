import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';


function Header() {
  return (
    <header>
      <nav id="header" className='navbar'>
        <div className='navbar-brand'>

        <Link className='navbar-item silver-text' to="/">Home</Link>
        <Link className='navbar-item silver-text' to="/player">Player Page</Link>
        <Link className='navbar-item silver-text' to="/tabletalk">Table Talk</Link>
       <Link className='navbar-item silver-text' to="/campaign">Campaign</Link>

        </div>
        <div className='navbar-end'>
          <Link className='navbar-item silver-text' to='/login'>Login</Link>
          <Link className='navbar-item silver-text' to='/signup'>Sign-Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;