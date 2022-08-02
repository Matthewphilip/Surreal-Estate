import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/`)
      .then((response) => setProperties(response.data))
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties">
      <SideBar />
      <div className="properties-alert">
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
      <h2>Properties</h2>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
