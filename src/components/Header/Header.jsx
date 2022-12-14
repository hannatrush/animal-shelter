import { Link, useLocation } from 'react-router-dom';

import s from './header.module.scss';

function Header() {
  const {pathname} = useLocation();
    return (
      <div className={pathname === '/' ? s.dark : s.light} >
        <div className={pathname === '/' ? s.dark__inner : s.light__inner}>
          <Link className="header-logo" to='/'>
            <h3 >Cozy House</h3>
            <p >Shelter for pets in Boston</p>
          </Link>
          <ul className="header-menu">
            <li><Link className='menu' to='/about' >About the shelter</Link></li>
            <li><Link className='menu' to='/pets' >Our pets</Link></li>
            <li><Link className='menu' to='/help' >To help the shelter</Link></li>
            <li><Link className='menu' to='/contacts' >Contacts</Link></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;