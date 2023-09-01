// ListingsCard.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListingsCard = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/listings")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });
  }, []);

  return (
    <div>
      <Row>
        {listings.map((listing) => (
          <Col lg={3}>
            <Link
              to={`/property/${listing.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                key={listing.id}
                style={{ height: "500px", marginBottom: "10px" }}
              >
                <Card.Img
                  variant="top"
                  src={listing.imageUrl}
                  alt={listing.title}
                  height={300}
                />
                <Card.Body>
                  <Card.Title>{listing.title}</Card.Title>
                  <Card.Text>{listing.address}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListingsCard;
