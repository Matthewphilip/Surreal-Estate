import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const SideBar = () => {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <ul>
        <li>Filter by city</li>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>

        <li>Sort by</li>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("sort", { price: +1 })}
        >
          Price Ascending
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("sort", { price: -1 })}
        >
          Price descending
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
