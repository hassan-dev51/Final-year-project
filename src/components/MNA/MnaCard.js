import React from "react";
import { Link } from "react-router-dom";
const MnaCard = ({ image, name, party, area, logo, city, link }) => {
  return (
    <div>
      <div className="mna_list">
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
            <span style={{ marginRight: "2rem" }}>{area}</span>

            <Link to={link} style={{ borderBottomRightRadius: 5 }}>
              Vote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MnaCard;
