import React from "react";
import "./Features.css";
const Features = () => {
  const feature = [
    {
      id: 1,
      title: "Get Rid From Standing In Line",
      image: "./images/line.jpg",
      des: "Now you dont have to stand in line for casting your valueable vote.This is system have been designed just for the ease of people.",
    },
    {
      id: 2,
      title: "Benefit for the national finance",
      image: "./images/finance.jpeg",
      des: "Now you dont have to stand in line for casting your valueable vote.This is system have been designed just for the ease of people.",
    },
    {
      id: 3,
      title: "Security issue",
      image: "./images/security.jpg",
      des: "Now you dont have to stand in line for casting your valueable vote.This is system have been designed just for the ease of people.",
    },
  ];
  return (
    <div>
      <div className="feature">
        <div className="feature_heading">
          <h2>Features</h2>
          <p>
            Some of the features and advantages that we provide for people of{" "}
            <br /> pakistan and oversea pakistani who have age above 18.
          </p>
        </div>
        <div className="feature_card">
          {feature.map((currElem, ind) => (
            <div className="card_box" key={ind}>
              <div className="card_image">
                <img
                  src={currElem.image}
                  alt="error"
                  style={{ borderRadius: 20 }}
                />
              </div>
              <div className="card_title">
                <h3>{currElem.title}</h3>
              </div>
              <div className="card_para">
                <p>{currElem.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
