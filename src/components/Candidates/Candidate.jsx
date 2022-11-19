import React, { useState } from "react";
import "./Candidate.css";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import { AiOutlineUpload } from "react-icons/ai";
import swal from "sweetalert";

const Candidate = () => {
  const [candidateName, setCandidateName] = useState("");
  const [candidateCnic, setCandidateCnic] = useState("");
  const [candidateParty, setCandidateParty] = useState("");
  const [candidateArea, setCandidateArea] = useState("");
  // const [selectedImage, setSelectedImage] = useState(null);
  const [position, setPosition] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const InputData = async (e) => {
    e.preventDefault();
    const newEntries = {
      name: candidateName,
      cnic: candidateCnic,
      party: candidateParty,
      area: candidateArea,
      seat: position,
      // selectedFile: selectedImage,
    };
    setAllEntry([...allEntry, newEntries]);
  };
  const NominessReg = async () => {
    const res = await fetch("/candidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: candidateName,
        cnic: candidateCnic,
        party: candidateParty,
        area: candidateArea,
        seat: position,
        // selectedFile: selectedImage,
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      swal({ text: "Registration succussfull" });
      setCandidateName(" ");
      setCandidateCnic(" ");
      setCandidateParty();
      setCandidateArea(" ");
      setPosition();
    } else if (res.status === 422) {
      swal({ text: "Error", icon: "error" });
    }
    console.log(data);
    console.log(allEntry);
  };
  return (
    <div className="main_candidate">
      <header className="head-text">
        <div className="backbutton">
          <Link to="/">Home</Link>
        </div>
        <h2>Candidates for Election 2023</h2>
        <div className="nextbutton">
          <Link to="/result">Result</Link>
        </div>
      </header>
      <form method="POST" onSubmit={InputData}>
        <div className="candidate_form">
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="Enter Name"
          />
          <input
            type="number"
            value={candidateCnic}
            onChange={(e) => setCandidateCnic(e.target.value)}
            placeholder="Enter CNIC"
          />
          <select
            value={candidateParty}
            onChange={(e) => setCandidateParty(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="pti">PTI</option>
            <option value="ppp">PPP</option>
            <option value="plmn">PLMN</option>
            <option value="tlp">TLP</option>
          </select>{" "}
          <input
            type="text"
            value={candidateArea}
            onChange={(e) => setCandidateArea(e.target.value)}
            placeholder="Enter Area"
          />
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="mna">MNA</option>
            <option value="mpa">MPA</option>
          </select>{" "}
          <div className="upload_photo">
            <div>
              {" "}
              {/* <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setSelectedImage({ selectedFile: base64 })
                }
              /> */}
              {/* {selectedImage && (
                <div>
                  <img
                    alt="not fount"
                    width={"250px"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              )} */}
              <br />
              <br />
              {/* <button type="button" className="btn_warning"> */}
              {/* <AiOutlineUpload /> Upload CNIC */}
              {/* <input
                type="file"
                name="myImage"
                accept="image/*"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              /> */}
              {/* </button> */}
            </div>
          </div>
          <button type="submit" onClick={NominessReg} className="btn-candidate">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Candidate;
