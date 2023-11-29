import { useNavigate } from "react-router-dom";
import Styles from "./Home.module.scss";
import bg from "/quiz-app/src/assets/images/bg.jpg";
import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ErrorMessage from "../../errorMessage/ErrorMessage";
const Home = ({ name, setName, fetchQuestions }) => {
  const Categories = [
    {
      category: "General Knowledge",
      value: 9,
    },
    { category: "Books", value: 10 },
    { category: "Films", value: 11 },
    { category: "Music", value: 12 },
    { category: "Musicals and Theaters", value: 13 },
    { category: "Television", value: 14 },
    { category: "Video Games", value: 15 },
    { category: "Board Games", value: 16 },
    { category: "Science and Nature", value: 17 },
    { category: "Computer", value: 18 },
    { category: "Mathematics", value: 19 },
    { category: "Mythology", value: 20 },
    { category: "Sports", value: 21 },
    { category: "Geography", value: 22 },
    { category: "History", value: 23 },
    { category: "Politics", value: 24 },
    // { category: "Art", value: 25 },
    { category: "Celebrities", value: 26 },
    { category: "Animals", value: 27 },
    { category: "Vehicles", value: 28 },
    { category: "Comics", value: 29 },
    { category: "Gadgets", value: 30 },
    { category: "Japanese Anime", value: 31 },
    { category: "Cartoon and Animations", value: 32 },
  ];
  const [category, setCategories] = useState("");
  const [difficulty, setDifficulty] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <>
      <div className={Styles.content}>
        <div className={Styles.content__setting}>
          <span style={{ fontSize: 30 }}>Fill all input field </span>
          <div className={Styles.content__setting__settingSelect}>
            {error && <ErrorMessage>Please fill all the field</ErrorMessage>}
            <TextField label="Enter Your Name" variant="outlined" style={{ marginBottom: 25 }} onChange={(e) => setName(e.target.value)} />
            <TextField select label="Select Category" variant="outlined" style={{ marginBottom: 30 }} onChange={(e) => setCategories(e.target.value)} value={category}>
              {Categories?.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>

            <TextField select label="Select Difficulty" variant="outlined" style={{ marginBottom: 30 }} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
              <MenuItem value="easy" key="Easy">
                Easy
              </MenuItem>
              <MenuItem value="medium" key="Medium">
                Medium
              </MenuItem>
              <MenuItem value="hard" key="Hard">
                Hard
              </MenuItem>
            </TextField>
            <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
              Start Quiz
            </Button>
          </div>
        </div>
        <img src={bg} alt="quiz img" className={Styles.content__banner} />
      </div>
    </>
  );
};

export default Home;
