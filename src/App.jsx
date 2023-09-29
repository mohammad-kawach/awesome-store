// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";

import "./assets/main.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;