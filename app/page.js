import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <Link href="/listings">View All Listings</Link>
        <br className="max-md:hidden" />
      </h1>
    </section>
  );
};

export default HomePage;
