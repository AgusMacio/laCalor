import React from "react";
import "./NavBar.css";
import logo2 from "../../assets/img/logo2.png";

const NavBar = () => {
  return (
    <header>
      <div className="flex-container">
        <img className="logo" src={logo2} alt="" />
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
  );
};

export default NavBar;
