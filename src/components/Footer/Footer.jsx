import React from 'react'
import './Footer.css'
import { images } from '../../constants'

const Footer = () => {
  const getyear = new Date().getFullYear()
  return (
    <div className="app__footer grid section__padding">
      <div className="app__footer-logo">
        <img src={images.logo} />
      </div>
      <div className="app__footer-links">
        <a href="#">Shipping</a>
        <a href="#">Returns</a>
        <a href="#">Refund policy</a>
      </div>
      <div className="app__footer-links">
        <a href="#">Contact</a>
        <a href="#">Terms of service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="app__footer-copyright">
        <p>Copyright &copy; {getyear} by Crust & Crumb</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
