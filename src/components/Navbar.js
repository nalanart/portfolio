import './styles/Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = (params) => {
  const [burgerActive, setBurgerActive] = useState(false)

  useEffect(() => {
    if(burgerActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [burgerActive])

  const getLinkClass = path => {
    if(window.location.pathname === path) {
      return "site-menu__item link-active"
    }
    return "site-menu__item"
  }

  return (
    <div className="site-navbar__inner">
      <div className="site-navbar__section">
        <a className="site-logo" href="/">ALAN TRAN</a>
      </div>
      <div id="nav-links" className="site-navbar__section">
        <nav className={burgerActive ? "site-menu burger-active" : "site-menu"}>
          <a className={getLinkClass('/projects')} href="/projects">Projects</a>
          <a className={getLinkClass('/about')} href="/about">About</a>
          <a className={getLinkClass('/contact')} href="/contact">Contact</a>
        </nav>
      </div>
      <div className="burger" onClick={() => setBurgerActive(!burgerActive)}>
        <div className={burgerActive ? "toggle line1" : "line1"}></div>
        <div className={burgerActive ? "toggle line2" : "line2"}></div>
        <div className={burgerActive ? "toggle line3" : "line3"}></div>
      </div>
    </div>
  )
}

export default Navbar