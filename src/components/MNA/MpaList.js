import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
// import Rows from "../../constants/Row";
import Mpa from "../../constants/Mpa";
import MpaCard from "./MpaCard";
import "./Mna.css";
const MpaList = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="mna_heading">
        <h2>MPA Candidates</h2>
        {"  "}
        <div className="searchBar ">
          <div className="search">
            <BiSearch />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search Area As NA-1"
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {Mpa.filter((area) => {
        if (search === "") {
          return area;
        } else if (area.area.toLowerCase().includes(search.toLowerCase())) {
          return area;
        }
      }).map((currElem, ind) => (
        <div key={ind}>
          <MpaCard
            name={currElem.name}
            party={currElem.party}
            area={currElem.area}
            logo={currElem.logo}
            image={currElem.image}
            city={currElem.city}
            link={`${currElem.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MpaList;
