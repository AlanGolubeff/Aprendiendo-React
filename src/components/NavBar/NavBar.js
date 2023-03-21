import React from "react";
import "./NavBar.css";

import Shop from "../Shop/Shop";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <li>
          <h1 style={{ color: "white" }}>Bienvenido!</h1>
        </li>
        <li>
          <a href="www.google.com">Inicio</a>
        </li>
        <li>
          <a href="www.google.com">Terrenos</a>
        </li>
        <li>
          <a href="www.google.com">Servicios</a>
        </li>
        <li>
          <Shop />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
