import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import a from "./assets/images/ques1.png";
import Header from "./component/Header/Header";
import Footer from "./component/footer/Footer";
import Home from "./component/Pages/Home/Home";
import Quiz from "./component/Pages/Quiz/Quiz";
import Results from "./component/Pages/Results/Results";
import { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category, difficulty) => {
    const { data } = await axios.get(`https://opentdb.com/api.php`, {
      params: {
        amount: 10,
        category: category,
        difficulty: difficulty,
        type: "multiple",
      },
    });
    setQuestions(data.results);
  };
  return (
    <>
      <BrowserRouter>
        <div className="app" style={{ backgroundImage: `url(${a})` }}>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
            <Route path="/quiz" exact element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
            <Route path="/results" exact element={<Results score={score} name={name} />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
