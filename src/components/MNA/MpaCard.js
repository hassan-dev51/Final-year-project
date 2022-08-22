import React from "react";
import { Link } from "react-router-dom";
import "./MpaCard.css";
const MpaCard = ({ image, name, party, area, logo, city, link }) => {
  return (
    <div>
      {" "}
      <div className="border">
        <div className="main_list_div">
          <div className="mna_list_image">
            <img src={image} alt="error" />
          </div>
          <div className="mna_list_titles">
            <h3 style={{ marginLeft: 32 }}>{name}</h3>
            <div className="mna_list_titles_img">
              <img src={logo} alt="error" />
              <span>{party}</span>
              <div className="city">
                <span>{city}</span>
              </div>
            </div>
          </div>
          <div className="mna_list_button">
            <span> {area}</span>

            <Link to={link} style={{ marginLeft: "2rem" }}>
              Vote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MpaCard;
