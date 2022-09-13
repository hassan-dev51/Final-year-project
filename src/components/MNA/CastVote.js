import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./castvote.css";
import Rows from "../../constants/Row";

const CastVote = () => {
  const [cnic, setCnic] = useState({ cnic: "" });
  const [name, setName] = useState();
  const [party, setParty] = useState();
  const [cityname, setCityName] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const found = Rows.filter((obj) => {
    return obj.id == id;
  });

  const partyName = found.map((item) => item.party);
  let party_name = partyName.toString();

  const candidateName = found.map((item) => item.name);
  let candidate = candidateName.toString();

  const city = found.map((item) => item.city);
  let city_name = city.toString();

  const submitData = async (e) => {
    e.preventDefault();
    const res = await fetch("/castvote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ party, name, cnic, cityname }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422) {
      alert(
        "Please Fill All Inputs Or it seems that you have already casted your vote"
      );
    } else if (res.status === 500) {
      alert("registration failed");
    } else {
      alert("You have succussfully casted your vote");
      navigate("/onbording");
    }
  };
  const userContant = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const rcvData = await res.json();

      setCnic(rcvData.cnic);

      if (!rcvData) {
        alert("some thing went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userContant();
  }, []);
  const handle = (e) => {};

  return (
    <div>
      {found.map((item, ind) => (
        <div key={ind}>
          <div className="vote_cast">
            <div className="vote_cast_div">
              <form method="POST">
                <div className="vote_cast_image">
                  <img src={item.image} alt="error" />
                </div>
                <div className="vote_cast_titles_img">
                  <img src={item.logo} alt="error" />
                  <span>{item.area}</span>
                </div>
                <div className="input_div">
                  <label htmlFor="cnic">Your CNIC</label>
                  <input type="text" value={cnic} onChange={handle} readOnly />
                  <label htmlFor="candidate">Enter Candidate Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={() => setName(candidate)}
                  />
                  <label htmlFor="candidate">Enter City Name</label>

                  <input
                    type="text"
                    value={cityname}
                    onChange={() => setCityName(city_name)}
                  />
                  <label htmlFor="candidate">Enter Party Name</label>

                  <input
                    type="text"
                    value={party}
                    onChange={() => setParty(party_name)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button className="vote_button" onClick={submitData}>
                    Cast Vote
                  </button>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default CastVote;
