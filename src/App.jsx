// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";

import "./assets/main.css";
import AllProducts from "./pages/AllProducts";
import PageNotFound from "./pages/PageNotFound";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
