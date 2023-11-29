import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
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
        <Button variant="contained" color="secondary" size="large" style={{ alignSelf: "center", marginTop: 20 }} href="/">
          Go To HomePage
        </Button>
      </div>
    </>
  );
};

export default Results;
