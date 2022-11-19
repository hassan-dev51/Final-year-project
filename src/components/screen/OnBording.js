import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OnBording.css";
import dva from "../../assets/img/dva.jpeg";
const OnBording = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
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

      setUserData(data);

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
      <div className="welcome">
        <div className="img">
          <img src={dva} alt="error" loading="lazy" />
        </div>

        <div className="welcome_heading">
          <form method="GET">
            <h2>Welcome</h2>
            {"  "}
            <span className="capital" style={{ textAlign: "center" }}>
              {userData.name}
            </span>
          </form>
        </div>
        <Link to="/logout">
          <button className="btn">Log Out</button>
        </Link>
      </div>
      <div className="para">
        <p>Voting Available</p>
      </div>
      <div className="vote_available">
        <div className="vote_img">{/* <img src={ali} alt="error" /> */}</div>
        <div className="vote_name">
          <Link to="mna">
            <h3>
              <span style={{ fontSize: 20, letterSpacing: 1 }}>MNA</span>{" "}
              Candidates{" "}
            </h3>
          </Link>
        </div>
      </div>
      <div className="vote_available">
        <div className="vote_img">{/* <img src={ali} alt="error" /> */}</div>
        <div className="vote_name">
          <Link to="mpa">
            <h3>
              <span style={{ fontSize: 20, letterSpacing: 1 }}>MPA</span>{" "}
              Candidates{" "}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnBording;
