import React from 'react'
import kenny from '../header/kenny_img.jpeg'
import './header.css'
import { Link } from 'react-router-dom'

const header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <div className='header'>
      <div className="nav-logo">
        <img src={kenny} alt="nav-logo" className="nav-logo-img"/>
        <p>Zhully</p>
      </div>
      <ul className="nav-menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/shop'>Shop</Link> </li>
      </ul>
      <button><Link to='/login'>Login</Link></button>
    </div>
    
  )
}

export default header