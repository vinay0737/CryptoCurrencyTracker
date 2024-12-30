// src/components/Loader.jsx

import React from "react";
import { Spin } from "antd";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
