import React from "react";
import { Link } from "react-router-dom";
import image from "../surrealestate.png";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="surrealEstateLogo" src={image} alt="surrealEstateLogo" />
      <ul className="navbar-links">
        <Link classsName="navbar-links-item" to="/">
          View Properties
        </Link>
        <Link classsName="navbar-links-item" to="/add-property">
          Add Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
