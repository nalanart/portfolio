import './styles/Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = (params) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if(active) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [active])

  return (
    <div className="site-navbar__inner">
      <div className="site-navbar__section">
        <a className="site-logo" href="/">BLAH</a>
      </div>
      <div id="nav-links" className="site-navbar__section">
        <nav className={active ? "site-menu burger-active" : "site-menu"}>
          <a className="site-menu__item" href="/projects">Projects</a>
          <a className="site-menu__item" href="/about">About</a>
          <a className="site-menu__item" href="/contact">Contact</a>
        </nav>
      </div>
      <div className="burger" onClick={() => setActive(!active)}>
        <div className={active ? "toggle line1" : "line1"}></div>
        <div className={active ? "toggle line2" : "line2"}></div>
        <div className={active ? "toggle line3" : "line3"}></div>
      </div>
    </div>
  )
}

export default Navbar