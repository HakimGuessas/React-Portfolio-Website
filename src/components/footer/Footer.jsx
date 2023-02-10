import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abd El Hakim Guessas</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100004342039105"  target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/geussase/" target="_blank"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/abd-el-hakim-guessas-2173361a5/" target="_blank"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hakim Guessas. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
