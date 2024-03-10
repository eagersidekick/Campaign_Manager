import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import Auth from '../utils/auth'


function Header() {
  var login;
  if(Auth.getToken() != null)
  {
    login = <a className='navbar-item silver-text' href="/" onClick={() => Auth.logout()}>Logout</a>
  }
  else
  {
    login = <Link className='navbar-item silver-text' to='/login'>Login</Link>
  }

  return (
    <header>
      <nav id="header" className='navbar'>
        <div className='navbar-brand'>

        <Link className='navbar-item silver-text' to="/">Home</Link>
        <Link className='navbar-item silver-text' to="/player">Player Page</Link>
        <Link className='navbar-item silver-text' to="/tabletalk">Table Talk</Link>
       <Link className='navbar-item silver-text' to="/campaign">Campaign</Link>
       <Link className='navbar-item red-text' to="/test">testing character api</Link>
        </div>
        <div className='navbar-end'>
          {login}
          <Link className='navbar-item silver-text' to='/signup'>Sign-Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;