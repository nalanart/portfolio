import './styles/Navbar.css'

const Navbar = (params) => {
  return (
    <div className="site-navbar__inner">
      <div className="site-navbar__section">
        <a className="site-logo" href="/">ALAN TRAN</a>
      </div>
      <div className="site-navbar__section">
        <nav className="site-menu">
          <a className="site-menu__item" href="/projects">Projects</a>
          <a className="site-menu__item" href="/about">About</a>
          <a className="site-menu__item" href="/contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar