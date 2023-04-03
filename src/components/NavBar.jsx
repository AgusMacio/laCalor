import React from 'react'
import "../components/navBar.css"
import logo from "../components/logo2.png"
import Principal from '../components/Principal'

const NavBar = () => {
  return (
    <header>
      <div className="flex-container">
        <img className="logo" src={logo} alt="" />
        <h1>La Calor</h1>
      </div>
      <nav>
        <ul className="flex-list">
          <li>Proximos Eventos</li>
          <li>Booking</li>
          <li>Contacto</li>
          <li>Quienes Somos</li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar