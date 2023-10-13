// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";

import "./assets/main.css";
import AllProducts from "./pages/AllProducts";
import PageNotFound from "./pages/PageNotFound";
import CategoryPage from "./pages/CategoryPage";
import Product from "./pages/Product";
import PaymnetCard from "./pages/PaymentCard";
import SearchedProducts from "./pages/SearchedProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route
              path="/categories/:categoryName"
              element={<CategoryPage />}
            />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/card" element={<PaymnetCard />} />
            <Route path="/search" element={<SearchedProducts />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
