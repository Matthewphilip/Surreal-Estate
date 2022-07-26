import React from "react";
import image from "../surrealestate.png";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="surrealEstateLogo" src={image} alt="surrealEstateLogo" />
      <ul className="navbar-links">
        <li classsName="navbar-links-item">View Properties</li>
        <li classsName="navbar-links-item">Add Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
