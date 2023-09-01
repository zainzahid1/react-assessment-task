// PropertyDetail.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetail = ({ match }) => {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/listings/${id}`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.error("Error fetching listing details:", error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-detail-container">
      <div className="property-detail">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="property-image"
        />
        <h2 className="property-title">{property.title}</h2>
        <p>{property.address}</p>
        <p>Beds: {property.beds}</p>
        <p>Bath: {property.bath}</p>
        <p>Covered Area: {property.coveredAreaSQFT} sqft</p>
        <p>Property Type: {property.propertyType}</p>
        <p>Commercial: {property.isCommercial ? "Yes" : "No"}</p>
        <p>Price: {property.price}</p>
        <p className="property-description">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
