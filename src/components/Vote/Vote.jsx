import React from "react";
import "./Vote.css";
import image2 from "../../assets/img/image2.png";
import Features from "../Features/Features";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
const Vote = () => {
  return (
    <div className="vote padding">
      <div className="parent_div">
        <div className="child_div">
          <div className="vote_image">
            <img src={image2} alt="error" />
          </div>
          <div className="heading">
            <div className="vote_heading">
              <h2>Cast your vote at home easily</h2>
            </div>
            <div className="vote_para">
              <p>
                We have introduced this digital system so that people at home
                can easily cast their vote.This system will guarantee
                transparency in elections.With the help of this system the
                people will get rid of the difficulties of voting.-{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Vote;
