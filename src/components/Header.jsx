function Header() {
    return (
      <div className="header-container">
        <div className="header-inner">
          <div className="header-left">
            <h3 className="logo">Cozy House</h3>
            <p className="logo-text">Shelter for pets in Boston</p>
          </div>
          <ul className="header-right">
            <li><a href="#">About the shelter</a></li>
            <li><a href="#">Our pets</a></li>
            <li><a href="#">To help the shelter</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;