import {Link} from 'react-router-dom';

function Header() {
    return (
      <div className="header-container">
        <div className="header-inner">
          <Link className="header-logo" to='/'>
            <h3 className="logo">Cozy House</h3>
            <p className="logo-text">Shelter for pets in Boston</p>
          </Link>
          <ul className="header-menu">
            <li><Link className='menu' to='/about' >About the shelter</Link></li>
            <li><Link className='menu' to='/pets' >Our pets</Link></li>
            <li><Link className='menu' to='/help' >To help the shelter</Link></li>
            <li><Link className='menu' to='#' >Contacts</Link></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;