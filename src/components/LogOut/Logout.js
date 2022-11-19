import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      // credentials: "include",
    })
      .then((res) => {
        navigate("/");
        if (!res.status == 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return <div>Logout</div>;
};

export default Logout;
