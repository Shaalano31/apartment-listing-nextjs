// pages/HomeScreen.js
"use client";
import React, { useState, useEffect } from "react";
import { fetchAllApartments } from "./api";
import ApartmentCard from "../components/Card";
import Link from "next/link";

const HomeScreen = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchAllApartments()
      .then((data) => {
        console.log(data);
        setApartments(data);
      })
      .catch((error) => {
        console.error("Error in useEffect:", error);
      });
  }, []);

  const renderCard = (item) => (
    <Link href={`/listings/${item._id}`}>
      <ApartmentCard
        title={item.title}
        description={item.description}
        img={item.img}
        price={item.price}
        size={item.size}
        address={item.address}
      />
    </Link>
  );

  return (
    <>
      <Link href="/listings/new">
        <button>Add Apartment</button>
      </Link>
      <ul>{apartments.map((apartment) => renderCard(apartment))}</ul>
    </>
  );
};

export default HomeScreen;
