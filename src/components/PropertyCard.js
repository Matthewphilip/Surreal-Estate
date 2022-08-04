import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faStar,
  faBath,
  faBed,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
        <li className="type-city">
          {type} - {city}
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faBed} />
          {bedrooms}
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faBath} />
          {bathrooms}
        </li>
        <li>£{price}</li>
        <li>
          <a href={`mailto:${email}`} className="email-link">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
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
