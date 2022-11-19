import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
// import Rows from "../../constants/Row";
import { useNavigate } from "react-router-dom";
import Mpa from "../../constants/Mpa";
import MpaCard from "./MpaCard";
import "./Mna.css";
const MpaList = () => {
  const [search, setSearch] = useState("");
  const [address, setAddress] = useState({});
  const navigate = useNavigate();
  const cityname = address.address;
  console.log(cityname);
  const callOnBordingPage = async () => {
    try {
      const res = await fetch("/onbording", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();

      setAddress(data);

      console.log(address);
      if (res.status === 401) {
        alert("data is not found");
      }
    } catch (eror) {
      alert("Error on sending request to the database");
      navigate("/");
    }
  };
  useEffect(() => {
    callOnBordingPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

      {Mpa.filter((curElem) => {
        return curElem.city === cityname;
        {
          /* if (search === "") {
          return area;
        } else if (area.area.toLowerCase().includes(search.toLowerCase())) {
          return area;
        } */
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
