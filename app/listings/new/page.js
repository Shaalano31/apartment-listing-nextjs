"use client";
import React, { useState } from "react";
import Link from "next/link";
import { createApartment } from "./api";
import { useRouter } from "next/navigation";

const AddApartment = () => {
  const router = useRouter();
  const [apartment, setApartment] = useState({
    title: "",
    description: "",
    img: "",
    price: "",
    size: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApartment((prevApartment) => ({ ...prevApartment, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to API)

    createApartment(apartment);
    console.log("Apartment data submitted:", apartment);
    router.back();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add a New Apartment</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Title:
          <input
            type="text"
            name="title"
            value={apartment.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Description:
          <textarea
            name="description"
            value={apartment.description}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Image URL:
          <input
            type="text"
            name="img"
            value={apartment.img}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Price:
          <input
            type="number"
            name="price"
            value={apartment.price}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Size:
          <input
            type="number"
            name="size"
            value={apartment.size}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Address:
          <input
            type="text"
            name="address"
            value={apartment.address}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.submitButton}>
          Add Apartment
        </button>
      </form>
      {/* Link back to the home page */}
      <Link href="/listings">Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  submitButton: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "12px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    fontSize: "18px",
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

export default AddApartment;
