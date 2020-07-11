import React, { useState } from "react";
// eslint-disable-next-line
import QuestionCard from "./QuestionCard";
import { fetchQuizQuestions } from "./API";
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 10;

const App = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [questions, setQuestions] = useState([]);
  // eslint-disable-next-line
  const [number, setNumbers] = useState(0);
  // eslint-disable-next-line
  const [score, setScore] = useState(0);
  // eslint-disable-next-line
  const [userAnswers, setUserAnswers] = useState([]);
  // eslint-disable-next-line
  const [gameover, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {};

  // eslint-disable-next-line
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>Jayming Quizz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default App;
