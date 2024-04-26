import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    userValid();
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <h2>Welcome to the Dashboard!</h2>
        <p>
          This is the dashboard of your application. You are successfully
          signed.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
