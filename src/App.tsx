import React, { useState } from "react";
// eslint-disable-next-line
import QuestionCard from "./QuestionCard";
import { fetchQuizQuestions } from "./API";
import { QuestionState, Difficulty } from "./API";

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correct_answer: string
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  // eslint-disable-next-line
  const [number, setNumber] = useState(0);
  // eslint-disable-next-line
  const [score, setScore] = useState(0);
  // eslint-disable-next-line
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  // eslint-disable-next-line
  const [gameover, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS, Difficulty.EASY
    )

    setQuestions(newQuestions)
setScore(0)
setUserAnswers([])
setNumber(0)
setLoading(false)
  };

  // eslint-disable-next-line
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if (correct) {
        setScore(prev => prev + 1)
      }
      const answerObject = {
        question: questions[number].question, 
        answer, 
        correct,
        correct_answer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  };

  return (
    <div className="App">
      <h1>Jayming Quizz</h1>
      {gameover  || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={startTrivia}>
        Start
      </button>) : null}
      
      {!gameover ? <p className="score">Score: {score} </p> : null}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameover && <QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />}
      {!gameover && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? <button className="next" onClick={nextQuestion}>
        Next
      </button> : null}
      
    </div>
  );
};

export default App;
