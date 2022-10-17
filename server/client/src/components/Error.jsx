import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="App">
      <h2>Error</h2>
      <Link to="/">
        <p>Back</p>
      </Link>
    </div>
  );
};

export default Error;
