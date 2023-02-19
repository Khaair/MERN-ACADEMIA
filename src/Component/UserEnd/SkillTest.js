import React, { useState } from "react";
import Layout from "./Layout";

export default function SkillTest() {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  console.log("answers", answers);

  const quizData = [
    {
      question: "What is the capital of Bangladesh?",
      options: ["Berlin", "Madrid", "Dhaka", "London"],
      answer: "Dhaka",
    },

    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "London"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
      answer: "Jupiter",
    },
    // more quiz questions...
  ];

  function handleAnswerChange(questionIndex, answer) {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let score = 0;
    let arr = [];
    quizData.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score++;
        arr.push(question.answer);
      }
    });
    console.log("arr", arr);
    setScore(score);
    setSubmitted(true);
  }
  return (
    <>
      <Layout>
        <div class="skill-test-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="card mt-3 mb-3">
                  <div class="quiz-area p-3">
                    <div className="card mt-2">
                      <form onSubmit={handleSubmit}>
                        {quizData.map((question, index) => (
                          <div key={index}>
                            <h5>{question.question}</h5>
                            <ul>
                              {question.options.map((option, optionIndex) => (
                                <li key={optionIndex}>
                                  <label
                                    className={
                                      submitted &&
                                      answers[index] &&
                                      option === question.answer
                                        ? "text-success"
                                        : submitted &&
                                          answers[index] &&
                                          option !== question.answer
                                        ? "text-danger"
                                        : ""
                                    }
                                  >
                                    <input
                                      type="radio"
                                      name={`answer_${index}`}
                                      value={option}
                                      checked={answers[index] === option}
                                      onChange={() =>
                                        handleAnswerChange(index, option)
                                      }
                                    />
                                    {option}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {score > 0 && (
                          <div>
                            <h5 className="text-success">
                              Your score: {score}
                            </h5>
                          </div>
                        )}

                        <button
                          className="btn btn-info mt-3"
                          type="submit"
                          ghost
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
