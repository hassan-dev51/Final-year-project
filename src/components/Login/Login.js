import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import swal from "sweetalert";

import { useNavigate } from "react-router-dom";
import { validNameEx, validFatherNameEx } from "./validation";

import "./Login.css";
const Login = () => {
  const [cnic, setCnic] = useState(null);
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [allEntry, setAllEntru] = useState([]);
  const navigate = useNavigate();

  const submitFormData = (e) => {
    e.preventDefault();

    const newEntry = { cnic: cnic, name: name, fname: fname };
    setAllEntru([...allEntry, newEntry]);

    if (cnic.length < 9) {
      swal({
        text: "Enter Full CNIC",
        icon: "error",
      });
      setCnic();
    } else if (!validNameEx.test(name)) {
      swal({
        text: "Enter Correct Name",
        icon: "error",
      });
    } else if (!validFatherNameEx.test(fname)) {
      swal({
        text: "Enter Correct Father Name",
        icon: "error",
      });
    } else {
      navigate("/verify");

      setCnic("");
      setName("");
      setFname("");
    }
  };

  return (
    <div className="main_div_form">
      <div className="child_div_form">
        <h2>Log in to enter the polling station</h2>
        <div className="form">
          <form action="" onSubmit={submitFormData} className="form">
            <label htmlFor="cnic">Enter CNIC:</label>
            <MaskedInput
              mask={[
                /[1-9]/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
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
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />

            <label htmlFor="fathername">Enter Father Name:</label>
            <input
              type="text"
              name="fathername"
              placeholder="Father Name"
              value={fname}
              required
              onChange={(e) => setFname(e.target.value)}
              autoComplete="off"
            />

            <button type="submit">Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
