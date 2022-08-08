import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Candidate.css";
import candidateList from "../../constants/candidateList";

const Candidate = () => {
  const [catagory, setCatagory] = useState(candidateList);

  //filter method
  const filterItem = (currElem) => {
    const currCatagory = candidateList.filter((curparty) => {
      return curparty.party === currElem;
    });
    setCatagory(currCatagory);
  };
  return (
    <div>
      <div className="head-text">
        <h2>
          Candidates for Election <span style={{ fontSize: 60 }}>2023</span>
        </h2>
      </div>
      <div className="btns-portfolio">
        <button
          onClick={() => {
            setCatagory(candidateList);
          }}
          className="btn-hire btn-portfolio"
        >
          All
        </button>
        <button
          onClick={() => {
            filterItem("pti");
          }}
          className="btn-hire btn-portfolio"
        >
          PTI
        </button>
        <button
          onClick={() => {
            filterItem("plmn");
          }}
          className="btn-hire btn-portfolio"
        >
          PLMN
        </button>
        <button
          onClick={() => {
            filterItem("tlp");
          }}
          className="btn-hire btn-portfolio"
        >
          TLP
        </button>
        <button
          onClick={() => {
            filterItem("independent");
          }}
          className="btn-hire btn-portfolio"
        >
          PPP
        </button>
      </div>
      <div className="card">
        {catagory.map((currElem, ind) => (
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
            <div className="p-text" style={{ marginTop: 10 }}>
              {currElem.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Candidate;
