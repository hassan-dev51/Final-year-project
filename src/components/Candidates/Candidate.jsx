import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Candidate.css";
import candidateList from "../../constants/candidateList";
import { Link } from "react-router-dom";

const Candidate = () => {
  const [catagory, setCatagory] = useState(candidateList);
  const [noOfElement, setNoOfElement] = useState(6);

  //filter method
  const filterItem = (currElem) => {
    const currCatagory = candidateList.filter((curparty) => {
      return curparty.party === currElem;
    });
    setCatagory(currCatagory);
  };

  //load more

  const slice = catagory.slice(0, noOfElement);
  const load = () => {
    setNoOfElement(noOfElement + 6);
  };
  return (
    <div>
      {" "}
      <header className="head-text">
        <div className="backbutton">
          <Link to="/">Home</Link>
        </div>
        <h2>Candidates for Election 2023</h2>
        <div className="nextbutton">
          <Link to="/result">Result</Link>
        </div>
      </header>
      <div className="btns-portfolio">
        <button
          onClick={() => {
            setCatagory(candidateList);
          }}
          className={`btn-hire btn-portfolio `}
        >
          All
        </button>

        <button
          onClick={() => {
            filterItem("pti");
          }}
          className={`btn-hire btn-portfolio `}
        >
          PTI
        </button>
        <button
          onClick={() => {
            filterItem("plmn");
          }}
          className={`btn-hire btn-portfolio `}
        >
          PLMN
        </button>
        <button
          onClick={() => {
            filterItem("tlp");
          }}
          className={`btn-hire btn-portfolio `}
        >
          TLP
        </button>
        <button
          onClick={() => {
            filterItem("ppp");
          }}
          className={`btn-hire btn-portfolio `}
        >
          PPP
        </button>
      </div>
      <div className="card">
        {slice.map((currElem, ind) => (
          <motion.div
            key={ind}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={currElem.image} alt="about" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {currElem.name}
            </h2>
            <span>{currElem.seat}</span>
            <div className="p-text" style={{ marginTop: 10 }}>
              {currElem.desc}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="load">
        <button onClick={() => load()}>Load More</button>
      </div>
    </div>
  );
};

export default Candidate;
