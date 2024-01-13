import React, { useState } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./Questions.css";
import { Link, useNavigate } from "react-router-dom";
// .............................
const Questions = ({ currQues, setCurrQues, questions, options, correct, score, setScore }) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  //   ....................................................
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct)
      //  {
      setScore(score + 1);
    setError(false);
    // }
  };
  const navigate = useNavigate();
  const handleNext = () => {
    if (currQues > 8) {
      navigate("/results");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("please select an option first");
    }
  };
  const handleQuit = () => {};
  return (
    <>
      <div className="question">
        <h1>Question {currQues + 1}</h1>
        <div className="singleQuestion">
          <h2 style={{ letterSpacing: "1px", justifyContent: "center" }}>{questions[currQues].question}</h2>
          <div className="option">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i) => (
                <button onClick={() => handleCheck(i)} className={`singleOption ${selected && handleSelect(i)}`} key={i} disabled={selected}>
                  {i}
                </button>
              ))}
          </div>

          <div className="controls">
            <Link to="/">
              <button
                style={{ width: " 185px", background: " #ef28a2", border: "none", height: "45px", color: "white", fontSize: "20px", borderRadius: "5px" }}
                onClick={handleQuit}>
                Quit
              </button>
            </Link>
            <button
              style={{ width: " 185px", background: " rgb(148 40 239)", border: "none", height: "45px", color: "white", fontSize: "20px", borderRadius: "5px" }}
              onClick={handleNext}>
              Next Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
