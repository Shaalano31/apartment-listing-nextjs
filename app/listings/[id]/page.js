"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchSingleApartment } from "./api";

const ApartmentDetail = () => {
  const { id } = useParams();

  const [apartment, setApartments] = useState([]);

  useEffect(() => {
    fetchSingleApartment(id)
      .then((data) => {
        console.log(data);
        setApartments(data);
      })
      .catch((error) => {
        console.error("Error in useEffect:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{apartment.title}</h1>
        <p style={styles.address}>{apartment.address}</p>
      </div>
      <img src={apartment.img} alt={apartment.title} style={styles.image} />
      <div style={styles.content}>
        <p style={styles.description}>{apartment.description}</p>
        <div style={styles.details}>
          <p style={styles.price}>Price: ${apartment.price}</p>
          <p style={styles.size}>Size: {apartment.size} sq ft</p>
        </div>
      </div>
      <Link href="/listings">Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "32px",
    margin: "0",
  },
  address: {
    color: "#666",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  content: {
    fontSize: "16px",
  },
  description: {
    marginBottom: "20px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  price: {
    flex: "1",
    marginRight: "10px",
  },
  size: {
    flex: "1",
  },
  backLink: {
    display: "block",
    marginTop: "20px",
    color: "#0070f3",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default ApartmentDetail;
