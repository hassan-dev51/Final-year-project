import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Rows from "../../constants/Row";
import "./Mna.css";
const MpaList = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="mna_heading">
        <h2>MPA Candidates</h2>
        {"  "}
        <div className="searchBar">
          <div className="search">
            <BiSearch />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Enter City Name"
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {Rows.filter((city) => {
        if (search === "") {
          return city;
        } else if (city.city.toLowerCase().includes(search.toLowerCase())) {
          return city;
        }
      }).map((currElem, ind) => (
        <div className="mna_list" key={ind}>
          <div className="main_list_div">
            <div className="mna_list_image">
              <img src={currElem.image} alt="error" />
            </div>
            <div className="mna_list_titles">
              <h3 style={{ marginLeft: 32 }}>{currElem.name}</h3>
              <div className="mna_list_titles_img">
                <img src={currElem.logo} alt="error" />
                <span>{currElem.party}</span>
                <div className="city">
                  <span>{currElem.city}</span>
                </div>
              </div>
            </div>
            <div className="mna_list_button">
              <span>{currElem.area}</span>
              <button type="submit">Vote</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MpaList;
