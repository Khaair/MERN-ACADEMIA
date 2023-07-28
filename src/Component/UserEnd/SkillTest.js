import React, { useState } from "react";
import Layout from "./Layout";
import { Tabs } from "antd";
import StudentDeshboardLayout from "../CourseEnrollment/Layout";

export default function SkillTest() {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { TabPane } = Tabs;

  console.log("answers", answers);

  const quizData = [
    {
      question: "The <title> element must be located inside?",
      options: [
        "the <head> element",
        "the <body> element",
        "the <section> element",
        "any where",
      ],
      answer: "the <head> element",
    },

    {
      question: "What is the HTML element used to display an image?",
      options: ["<image>", "<picture>", "<img>", "<pic>"],
      answer: "<img>",
    },
    {
      question: "Which of the following HTML tags is not valid?",
      options: ["<h1>", "<h8>", "<h2>", "<h4>"],
      answer: "<h8>",
    },
    {
      question:
        "What is the HTML attribute used to reference the location of an image inside the <img> tag?",
      options: ["src", "href", "link", "location"],
      answer: "src",
    },
    // more quiz questions...
  ];

  const quizDataHtml = [
    {
      question: "The <title> element must be located inside?",
      options: [
        "the <head> element",
        "the <body> element",
        "the <section> element",
        "any where",
      ],
      answer: "the <head> element",
    },

    {
      question: "What is the HTML element used to display an image?",
      options: ["<image>", "<picture>", "<img>", "<pic>"],
      answer: "<img>",
    },
    {
      question: "Which of the following HTML tags is not valid?",
      options: ["<h1>", "<h8>", "<h2>", "<h4>"],
      answer: "<h8>",
    },
    {
      question:
        "What is the HTML attribute used to reference the location of an image inside the <img> tag?",
      options: ["src", "href", "link", "location"],
      answer: "src",
    },
    // more quiz questions...
  ];
  const quizDataCss = [
    {
      question:
        "How can you add space between the border and inner content of the element?",
      options: ["margin", "padding", "border", "spacing"],
      answer: "padding",
    },

    {
      question: "How can you add CSS?",
      options: [
        "Using Inline Styling",
        "Using Internal Style Sheet",
        "Using External Style Sheet",
        "In all three ways",
      ],
      answer: "In all three ways",
    },
    {
      question: "Which property do you need to change the background color?",
      options: ["bgcolor", "color", "background-color", "colorbg"],
      answer: "background-color",
    },
    {
      question: "Which property controls the size of a text?",
      options: ["font-size", "font-style", "text-size", "text-style"],
      answer: "font-size",
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
      <StudentDeshboardLayout>
        <div class="skill-test-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="card shadow-sm mt-3 mb-3">
                  <Tabs>
                    <TabPane tab="HTML" key="1">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className=" mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizDataHtml.map((question, index) => (
                                          <div key={index}>
                                            <h5 className="mt-4 mb-3">
                                              {index + 1}. {question.question}
                                            </h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li
                                                    className="mcq-options-label w-50 mt-2"
                                                    key={optionIndex}
                                                  >
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      <b className="mcq-option-text">
                                                        {option}
                                                      </b>
                                                    </label>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        ))}

                                        {score > 0 && (
                                          <div>
                                            <h5 className="text-success mt-3">
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
                      </div>
                    </TabPane>
                    <TabPane tab="CSS" key="2">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizDataCss.map((question, index) => (
                                          <div key={index}>
                                            <h5 className="mt-4 mb-3">
                                              {index + 1}. {question.question}
                                            </h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li
                                                    className="mcq-options-label w-50 mt-2"
                                                    key={optionIndex}
                                                  >
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      <b className="mcq-option-text">
                                                        {option}
                                                      </b>
                                                    </label>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        ))}

                                        {score > 0 && (
                                          <div>
                                            <h5 className="text-success mt-3">
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
                      </div>
                    </TabPane>
                    <TabPane tab="JAVASCRIPT" key="3">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="card mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizData.map((question, index) => (
                                          <div key={index}>
                                            <h5>{question.question}</h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      {option}
                                                    </label>
                                                  </li>
                                                )
                                              )}
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
                      </div>
                    </TabPane>
                    <TabPane tab="BOOTSTRAP" key="4">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="card mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizData.map((question, index) => (
                                          <div key={index}>
                                            <h5>{question.question}</h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      {option}
                                                    </label>
                                                  </li>
                                                )
                                              )}
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
                      </div>
                    </TabPane>
                    <TabPane tab="TAILWIND" key="5">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="card mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizData.map((question, index) => (
                                          <div key={index}>
                                            <h5>{question.question}</h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      {option}
                                                    </label>
                                                  </li>
                                                )
                                              )}
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
                      </div>
                    </TabPane>
                    <TabPane tab="REACTJS" key="6">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="card mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizData.map((question, index) => (
                                          <div key={index}>
                                            <h5>{question.question}</h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      {option}
                                                    </label>
                                                  </li>
                                                )
                                              )}
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
                      </div>
                    </TabPane>
                    <TabPane tab="NODEJS" key="7">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="card mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizData.map((question, index) => (
                                          <div key={index}>
                                            <h5>{question.question}</h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      {option}
                                                    </label>
                                                  </li>
                                                )
                                              )}
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
                      </div>
                    </TabPane>
                    <TabPane tab="EXPRESSJS" key="8">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="card mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizData.map((question, index) => (
                                          <div key={index}>
                                            <h5>{question.question}</h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      {option}
                                                    </label>
                                                  </li>
                                                )
                                              )}
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
                      </div>
                    </TabPane>
                    <TabPane tab="MONOGODB" key="9">
                      <div className="tabpane-inner-content-wrapper">
                        <div className="product-full-description">
                          <div className="container-fluid no-padding">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="product-full-description-inner-content">
                                  <div class="quiz-area p-3">
                                    <div className="card mt-2">
                                      <form onSubmit={handleSubmit}>
                                        {quizData.map((question, index) => (
                                          <div key={index}>
                                            <h5>{question.question}</h5>
                                            <ul>
                                              {question.options.map(
                                                (option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    <label
                                                      className={
                                                        submitted &&
                                                        answers[index] &&
                                                        option ===
                                                          question.answer
                                                          ? "text-success"
                                                          : submitted &&
                                                            answers[index] &&
                                                            option !==
                                                              question.answer
                                                          ? "text-danger"
                                                          : ""
                                                      }
                                                    >
                                                      <input
                                                        type="radio"
                                                        name={`answer_${index}`}
                                                        value={option}
                                                        checked={
                                                          answers[index] ===
                                                          option
                                                        }
                                                        onChange={() =>
                                                          handleAnswerChange(
                                                            index,
                                                            option
                                                          )
                                                        }
                                                      />
                                                      {option}
                                                    </label>
                                                  </li>
                                                )
                                              )}
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
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StudentDeshboardLayout>
    </>
  );
}
