// import React from "react";

import Products from "../components/Products";
import SectionHeader from "../components/SectionHeader";

const AllProducts = () => {
  return (
    <div className="container">
      <SectionHeader headerText="All Products" />
      <Products />
    </div>
  );
};

export default AllProducts;
