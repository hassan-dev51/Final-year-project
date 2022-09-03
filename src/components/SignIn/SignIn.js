import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "../Login/Login.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitFormData = (e) => {
    e.preventDefault();
    const newEntry = { cnic: cnic, name: name, fname: fname };
    setAllEntry([...allEntry, newEntry]);
  };
  const PostData = async () => {
    let allEntry = { cnic: cnic, name: name, fname: fname };
    allEntry = { cnic, name, fname };
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cnic, name, fname }),
    });
    const data = await res.json();
    console.log(data);
    console.log(allEntry);

    if (res.status === 424) {
      swal({ text: "Registration Already Done", icon: "info" });
    } else if (res.status === 422) {
      swal({ text: "Please fil all credentials", icon: "error" });
    } else {
      swal({ text: "Registration Successful", icon: "success" });
      navigate("/login");
    }
  };
  return (
    <div className="main_div_form">
      <div className="child_div_form">
        <h2>Create Account</h2>
        <div className="form">
          <form method="POST" onSubmit={submitFormData} className="form">
            <label htmlFor="cnic">Enter CNIC:</label>
            <MaskedInput
              mask={[
                /[1-9]/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              className="form-control"
              placeholder="Enter CNIC"
              guide={false}
              id="my-input-id"
              onBlur={() => {}}
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              autoComplete="off"
            />

            <label htmlFor="name">Enter Your Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value.replace(/[^a-z]+[^a-z]/gi, ""))
              }
              autoComplete="off"
            />

            <label htmlFor="fathername">Enter Father Name:</label>
            <input
              type="text"
              name="fathername"
              placeholder="Father Name"
              required
              value={fname}
              onChange={(e) =>
                setFname(e.target.value.replace(/[^a-z]+[^a-z]/gi, ""))
              }
              autoComplete="off"
            />

            <button type="submit" onClick={PostData}>
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
