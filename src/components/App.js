// src/App.js
import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    prompt: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctIndex: 0,
  },
  {
    prompt: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correctIndex: 1,
  },
  {
    prompt: "What is the largest ocean on Earth?",
    answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctIndex: 2,
  },
  {
    prompt: "Which language is used for React?",
    answers: ["Python", "Java", "JavaScript", "Ruby"],
    correctIndex: 2,
  },
  {
    prompt: "Who wrote 'Macbeth'?",
    answers: ["Shakespeare", "Chinua Achebe", "Homer", "Plato"],
    correctIndex: 0,
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);

  function handleAnswered(isCorrect) {
    if (isCorrect) {
      alert("✅ Correct!");
    } else {
      alert("❌ Time's up or wrong answer!");
    }

    // Move to the next question
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setTimeRemaining(10);
    } else {
      alert("🎉 Quiz complete!");
    }
  }

  return (
    <div className="App">
      <h1>Trivia Game</h1>
      {currentIndex < questions.length ? (
        <Question
          question={questions[currentIndex]}
          timeRemaining={timeRemaining}
          setTimeRemaining={setTimeRemaining}
          onAnswered={handleAnswered}
        />
      ) : (
        <p>Thanks for playing!</p>
      )}
    </div>
  );
}

export default App;
