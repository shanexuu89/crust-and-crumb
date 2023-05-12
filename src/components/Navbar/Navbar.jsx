import React, { useState, useEffect } from 'react'
import './Navbar.css'
import images from '../../constants/images'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => (
  <>
    <p>
      <a href="#about">About Us,</a>
    </p>
    <p>
      <a href="#menu">Our Menu,</a>
    </p>
    <p>
      <a href="#gallery">Gallery,</a>
    </p>
    <p>
      <a href="#find">Find Us</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    function stickyNavbar() {
      if (window.scrollY > 205) setIsSticky(true)
      else setIsSticky(false)
    }

    window.addEventListener('scroll', stickyNavbar)

    return () => {
      window.removeEventListener('scroll', stickyNavbar)
    }
  }, [])

  return (
    <div
      className={
        isSticky ? 'app__navbar sticky slide-bottom ' : 'app__navbar slide-top'
      }
      id="app__navbar"
    >
      <div
        className={
          isSticky ? 'app__navbar-logo slide-bottom' : 'app__navbar-logo'
        }
      >
        <img src={images.logo} />
      </div>
      <h1 className="app__nvbar-logotext">Crust & Crumb</h1>
      <div
        className={
          isSticky
            ? 'app__navbar-links_contaniner slide-bottom'
            : 'app__navbar-links_contaniner '
        }
      >
        <Menu />
      </div>
      <div className="app__navbar-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            className="app__navbar-mobile_icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            className="app__navbar-mobile_icon"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className="app__navbar-links_mobile slide-bottom"
            onClick={() => setToggleMenu(false)}
          >
            <Menu />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
