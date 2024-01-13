import { useNavigate } from "react-router-dom";
import Styles from "./Home.module.scss";
import bg from "/quiz-app/src/assets/images/bg.jpg";
import React, { useState } from "react";
const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategories] = useState("");
  const [difficulty, setDifficulty] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
  console.log(category);

  return (
    <>
      <div className={Styles.content}>
        <div className={Styles.content__setting}>
          <span>Fill all input field </span>
          <div className={Styles.content__setting__settingSelect}>
            {error && <span>Please fill all the field</span>}
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" style={{ marginBottom: 25, padding: "15px 0 15px 20px" }} />
            <select id="cars" style={{ marginBottom: 25, padding: "15px 0 15px 20px" }} onChange={(e) => setCategories(e.target.value)} value={category}>
              <option value="">Select Category</option>
              {Categories?.map((cat) => (
                <option key={cat.category} value={cat.value}>
                  {cat.category}
                </option>
              ))}
            </select>

            <select style={{ marginBottom: 25, padding: "15px 0 15px 20px" }} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
              <option>Type</option>
              <option value="easy" key="Easy">
                Easy
              </option>
              <option value="medium" key="Medium">
                Medium
              </option>
              <option value="hard" key="Hard">
                Hard
              </option>
            </select>

            <button style={{ marginBottom: 25, padding: "15px 0 15px 20px", background: "#8888e4", borderRadius: "5px" }} onClick={handleSubmit}>
              Start Quiz
            </button>
          </div>
        </div>
        <img src={bg} alt="quiz img" className={Styles.content__banner} />
      </div>
    </>
  );
};

export default Home;
