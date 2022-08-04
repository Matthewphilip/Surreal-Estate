import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed } from "@fortawesome/free-solid-svg-icons";
import Alert from "./Alert";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Cottage",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:3000/api/v1/PropertyListing/`, { ...fields })
      .then((res) => {
        console.log(res);
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h3 className="heading">Add Property</h3>
      <form onSubmit={handleAddProperty} className="add-property__form">
        <Alert message={alert.message} success={alert.isSuccess} />

        <label htmlFor="title">
          <input
            className="add-property__item property-input"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="Property title"
          />
        </label>

        <label htmlFor="city">
          <select
            className="add-property__item"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            placeholder="City"
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          <select
            className="add-property__item"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            placeholder="Detached"
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          <span>
            <FontAwesomeIcon className="icon" icon={faBed} />
          </span>
          <select
            className="add-property__item property-input"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <label htmlFor="bathrooms">
          <span>
            <FontAwesomeIcon className="icon" icon={faBath} />
          </span>
          <select
            className="add-property__item property-input"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <label htmlFor="price">
          <span>£</span>
          <select
            className="add-property__item property-input"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          >
            <option value="5000">50,000</option>
            <option value="10000">100,000</option>
            <option value="15000">150,000</option>
            <option value="20000">200,000</option>
            <option value="25000">250,000</option>
          </select>
        </label>

        <label htmlFor="email">
          <input
            className="add-property__item property-input"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="john.doe@gmail.com"
          />
        </label>

        <button className="add-property__item property-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
