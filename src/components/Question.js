// src/Question.js
import React, { useEffect } from "react";

function Question({ timeRemaining, setTimeRemaining, onAnswered, question }) {
  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10); // Reset timer for the next question
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timeRemaining, onAnswered, setTimeRemaining]);

  function handleAnswerClick(index) {
    const isCorrect = index === question.correctIndex;
    onAnswered(isCorrect);
    setTimeRemaining(10);
  }

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(index)}>{answer}</button>
          </li>
        ))}
      </ul>
      <p>⏳ Time Remaining: {timeRemaining}</p>
    </div>
  );
}

export default Question;
