import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import { GiNetworkBars } from "react-icons/gi"
import { BiMessageSquareDetail } from "react-icons/bi"
import { useState } from 'react'
 
const Nav = () => {
  const [activeNav, setActiveNav] = useState(localStorage.getItem('activeNav') ? localStorage.getItem("activeNav") : "#");
  return (
    <nav>
      <a href="#" onClick={() => {
        setActiveNav("#")
        localStorage.setItem("activeNav","#")
      }} className={activeNav === "#" ? "active" : ""}><AiOutlineHome />
      </a>
      <a href="#about" onClick={() => {
        setActiveNav("#about")
        localStorage.setItem("activeNav" ,"#about")
      }} className={activeNav === "#about" && "active"}><AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => {
        setActiveNav("#experience")
        localStorage.setItem("activeNav" ,"#experience")
      }} className={activeNav === "#experience" && "active"}><BiBook />
      </a>
      <a href="#portfolio" onClick={() => {
        setActiveNav("#portfolio")
        localStorage.setItem("activeNav" ,"#portfolio")
      }} className={activeNav === "#portfolio" && "active"}><GiNetworkBars />
      </a>
      <a href="#contact" onClick={() => {
        setActiveNav("#contact")
        localStorage.setItem("activeNav" ,"#contact")
      }} className={activeNav === "#contact" && "active"}><BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav
