import React from "react";
import "./Footer.css";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer_div">
      <div className="footer">
        <span>All Rights Reserved {year}</span>
      </div>
    </div>
  );
};

export default Footer;
