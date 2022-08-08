import React from "react";
import { Link } from "react-router-dom";
import "./OnBording.css";
import ali from "../../assets/img/ali.jpg";
const OnBording = () => {
  return (
    <div>
      <div className="welcome">
        <div className="welcome_heading">
          <h2>Welcome</h2>
          {"  "}
          <span>Hassan Ali</span>
        </div>
        <div className="img">
          <img src={ali} alt="error" />
        </div>
      </div>
      <div className="para">
        <p>Voting Available</p>
      </div>
      <div className="vote_available">
        <div className="vote_img">
          <img src={ali} alt="error" />
        </div>
        <div className="vote_name">
          <Link to="mna">
            <h3>
              <span style={{ fontSize: 20, letterSpacing: 1 }}>MNA</span>{" "}
              Candidates{" "}
            </h3>
          </Link>

          <Link to="parties">
            <h4>4 Parties Registered</h4>
          </Link>
        </div>
      </div>
      <div className="vote_available">
        <div className="vote_img">
          <img src={ali} alt="error" />
        </div>
        <div className="vote_name">
          <Link to="mpa">
            <h3>
              <span style={{ fontSize: 20, letterSpacing: 1 }}>MPA</span>{" "}
              Candidates{" "}
            </h3>
          </Link>
          <Link to="parties">
            <h4>4 Parties Registered</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnBording;
