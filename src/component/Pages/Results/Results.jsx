import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
// import { Button } from "@material-ui/core";
import "./Results.css";
const Results = ({ name, score }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <>
      <div className="result">
        <span className="title">Final Score: {score}</span>
        <Link to="/">
          <button
            style={{
              width: " 185px",
              background: " rgb(148 40 239)",
              border: "none",
              height: "45px",
              color: "white",
              fontSize: "20px",
              borderRadius: "5px",
              alignSelf: "center",
              marginTop: "10px",
            }}>
            Go To HomePage
          </button>
        </Link>
      </div>
    </>
  );
};

export default Results;
