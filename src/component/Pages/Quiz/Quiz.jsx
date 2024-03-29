import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Questions from "../../Question/Questions";
const Quiz = ({ name, score, setScore, questions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  // ...................
  useEffect(() => {
    setOptions(questions && handleShuffle([questions[currQues]?.correct_answer, ...questions[currQues]?.incorrect_answers]));
  }, [questions, currQues]);
  // .............
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  // debugger;
  return (
    <>
      <div className="quiz">
        <span className="subtitles">Welcome, {name}</span>
        {questions ? (
          <>
            <div className="quizInfo">
              <span>{questions[currQues]?.category}</span>
              <span> Score :{score}</span>
            </div>
            <Questions
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
            />
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
};

export default Quiz;
