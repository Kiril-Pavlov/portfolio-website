import React from 'react'
import "./Navbar.css"
import {FiMenu, FiX} from "react-icons/fi"

const Navbar = ({navbarLinks}) => {
  return (
    <nav className='navbar'>
      <span className='navbar-logo'>LOGO</span>
      <ul className='navbar-list'>
        {navbarLinks.map((item)=>{
          return (
            <li className='navbar-list-item' key={item.title}>
              <a href="item.url" className='navbar-link'>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar