import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import swal from "sweetalert";

import { useNavigate } from "react-router-dom";

import "./Login.css";
const Login = () => {
  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  // const [allEntry, setAllEntru] = useState([]);
  const navigate = useNavigate();

  const verifyData = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cnic, name, fname }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      swal({
        text: "Data Not Found",
        icon: "error",
      });
    } else if (res.status === 422) {
      swal({
        text: "Fill All Fields",
        icon: "info",
      });
    } else {
      swal({
        text: "Welcome To Polling Station",
        icon: "success",
      });
      setInterval(() => {
        navigate("/verify");
      }, 1500);
    }
  };

  return (
    <div className="main_div_form">
      <div className="child_div_form">
        <h2>Log in to enter the polling station</h2>
        <div className="form">
          <form method="POST" className="form">
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
              required
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
              value={fname}
              required
              onChange={(e) =>
                setFname(e.target.value.replace(/[^a-z]+[^a-z]/gi, ""))
              }
              autoComplete="off"
            />

            <button type="submit" onClick={verifyData}>
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
