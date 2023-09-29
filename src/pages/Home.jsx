// import React from "react";
import SectionHeader from "../components/SectionHeader";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <div className="store-caption d-flex align-items-center justify-content-center w-100 vh-50">
        <div className="text-center">
          <div className=" mx-auto">
            <h1 className="mb-4 uppercase">Awesome Store</h1>
            <p>Where you can find anything you need!</p>
          </div>
        </div>
      </div>
      <div className="container">
        <SectionHeader headerText="All Categories" />
        <Categories />
      </div>
    </>
  );
};

export default Home;
