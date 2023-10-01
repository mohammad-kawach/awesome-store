// import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link to="/" className="back-home">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
