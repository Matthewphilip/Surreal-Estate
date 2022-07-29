import React from "react";
import PropTypes from "prop-types";
// import {
//   BsHouse,
//   FaBath,
//   FaBed,
//   RiMoneyPoundCircleLine,
//   GoLocation,
//   MdOutlineMail,
// } from "react-icons/fa";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  city,
  type,
  bedrooms,
  bathrooms,
  price,
  email,
}) => {
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <ul className="property-card__list">
        <li className="type">{type}</li>
        <li>{bedrooms}</li>
        <li>{bathrooms}</li>
        <li>{city}</li>
        <li>{price}</li>
        <li>
          <a href={`mailto:${email}`} className="email">
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  /* fix price prop */
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
