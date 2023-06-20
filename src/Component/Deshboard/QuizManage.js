import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./layout";
import { Form, Input, Upload, Button, notification, Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import EditForm from "./EditForm";

function Deshboard() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentId, setStudentId] = useState();
  const [errorMsg, setErrorMsg] = useState([]);
  const [matchedEmailerrorMsg, setMatchedEmailErrorMsg] = useState("");
  const [matchedUsererrorMsg, setMatchedUserErrorMsg] = useState("");
  const [matchederrorMsg, setMatchedErrorMsg] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [form] = Form.useForm();

  const [logedinData, setLogedinData] = useState([]);

  console.log("data yyyy deshboard", data);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/quiz-manage/quiz-show"
      );
      setData(datahere.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    const storedLogedinData = localStorage.getItem("logedinData");
    const fetchLogedinData = JSON.parse(storedLogedinData);
    setLogedinData(fetchLogedinData);
  }, []);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: "Data saved successfully",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      icon: (
        <SmileOutlined
          style={{
            color: "#108ee9",
          }}
        />
      ),
    });
  };

  const deleteMe = async (id) => {
    try {
      let mydata = await axios.delete(`http://localhost:8080/api/delete/${id}`);
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      setData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);

    fetchdata();
  };

  const showEditModal = (idd) => {
    setIsEditModalOpen(true);
    setStudentId(idd);
  };

  const handleAddItem = () => {
    setItems([...items, ""]);
  };

  const handleItemChange = (value, index) => {
    setItems([...items.slice(0, index), value, ...items.slice(index + 1)]);
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();

    const values = await form.validateFields();
    console.log("Items:", items);
    console.log("values:", values);
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_COURSE}/quiz-manage/quiz-save`,
        {
          question: values?.question,
          options: items,
          answer: values?.answer,
        }
      );
      if (response?.data?.status === "200") {
        setError(response?.data?.message);
        form.resetFields();
        fetchdata();
        setLoading(false);
      } else if (response?.data?.status === "400") {
        setError(response?.data?.message);

        setLoading(false);
      } else if (response?.data?.status === "401") {
        setError(response?.data?.message);

        setLoading(false);
      } else if (response?.data?.status === "404") {
        setError(response?.data?.message);

        setLoading(false);
      } else if (response?.data?.status === "500") {
        setError(response?.data?.message);

        setLoading(false);
      }
      console.log(response, "success");
    } catch (er) {
      console.log("error checkout", er);
    }
  };

  return (
    <div class="container-fluid">
      <Layout>
        <div class="student-management-area">
          <div className="container mt-4">
            {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
              <div class="row">
                <div class="col-lg-12 ">
                  <div class="card-title-section">
                    <div class="add-student-wrapper">
                      <div className="card-title">Quiz Management</div>
                      <div>
                        <Button onClick={showModal} type="primary" ghost>
                          Add Quiz
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sl</th>
                        <th scope="col">Question</th>
                        <th scope="col">Options</th>

                        <th scope="col">Answer</th>

                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && <th scope="col">Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((el, ind) => {
                        return (
                          <tr key={ind}>
                            <th scope="row">{ind + 1}</th>
                            <td>{el?.question}</td>
                            <td>{el?.options.join(",").toString()}</td>

                            <td>{el?.answer}</td>

                            {logedinData?.roles?.join("").toString() ===
                              "ROLE_ADMIN" && (
                              <td>
                                <div className="d-flex">
                                  <Button
                                    onClick={() => showEditModal(el?._id)}
                                    type="primary"
                                    ghost
                                  >
                                    Edit
                                  </Button>

                                  <Button
                                    onClick={() => deleteMe(el._id)}
                                    type="primary"
                                    ghost
                                    className="mx-2"
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <Modal
            title="Update Student Info"
            open={isEditModalOpen}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
            width={600}
            footer={false}
          >
            <EditForm studentId={studentId} />
          </Modal>

          <Modal
            title="Add New Quiz"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={600}
            footer={false}
          >
            <>
              {contextHolder}

              <div className="form-area mt-3">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <Form form={form} layout="vertical">
                        <Form.Item
                          name="question"
                          label="Question"
                          rules={[
                            {
                              required: true,
                              message: "Please input the Course Question!",
                            },
                          ]}
                        >
                          <Input placeholder="Question" />
                        </Form.Item>

                        <p>Enter four Options</p>

                        <Form.List name="items">
                          {(fields, { add, remove }) => {
                            return (
                              <div>
                                {fields.map((field, index) => (
                                  <Form.Item key={field.key}>
                                    <Input
                                      value={items[index]}
                                      onChange={(e) =>
                                        handleItemChange(e.target.value, index)
                                      }
                                    />
                                    <Button
                                      className="mt-2"
                                      onClick={() => remove(field.name)}
                                    >
                                      Remove
                                    </Button>
                                  </Form.Item>
                                ))}
                                <Button onClick={() => add()}>
                                  Add Option
                                </Button>
                              </div>
                            );
                          }}
                        </Form.List>

                        <Form.Item
                          name="answer"
                          label="Answer"
                          rules={[
                            {
                              required: true,
                              message: "Please input the Course Answer!",
                            },
                          ]}
                        >
                          <Input placeholder="Course Answer" />
                        </Form.Item>
                        <Button type="primary" onClick={handleQuizSubmit} ghost>
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Modal>
        </div>
      </Layout>
    </div>
  );
}

export default Deshboard;

// import React, { useState } from "react";
// import Layout from "./layout";
// export default function QuizManage() {
//   const [score, setScore] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   console.log("answers", answers);

//   const quizData = [
//     {
//       question: "What is the capital of Bangladesh?",
//       options: ["Berlin", "Madrid", "Dhaka", "London"],
//       answer: "Dhaka",
//     },

//     {
//       question: "What is the capital of France?",
//       options: ["Berlin", "Madrid", "Paris", "London"],
//       answer: "Paris",
//     },
//     {
//       question: "What is the largest planet in the solar system?",
//       options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
//       answer: "Jupiter",
//     },
//     // more quiz questions...
//   ];

//   function handleAnswerChange(questionIndex, answer) {
//     setAnswers({
//       ...answers,
//       [questionIndex]: answer,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let score = 0;
//     let arr = [];
//     quizData.forEach((question, index) => {
//       if (answers[index] === question.answer) {
//         score++;
//         arr.push(question.answer);
//       }
//     });
//     console.log("arr", arr);
//     setScore(score);
//     setSubmitted(true);
//   }
//   return (
//     <div class="container-fluid">
//       <Layout>
//         <div class="quiz-area p-3">
//           <div className="card mt-2">
//             <form onSubmit={handleSubmit}>
//               {quizData.map((question, index) => (
//                 <div key={index}>
//                   <h5>{question.question}</h5>
//                   <ul>
//                     {question.options.map((option, optionIndex) => (
//                       <li key={optionIndex}>
//                         <label
//                           className={
//                             submitted &&
//                             answers[index] &&
//                             option === question.answer
//                               ? "text-success"
//                               : submitted &&
//                                 answers[index] &&
//                                 option !== question.answer
//                               ? "text-danger"
//                               : ""
//                           }
//                         >
//                           <input
//                             type="radio"
//                             name={`answer_${index}`}
//                             value={option}
//                             checked={answers[index] === option}
//                             onChange={() => handleAnswerChange(index, option)}
//                           />
//                           {option}
//                         </label>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}

//               {score > 0 && (
//                 <div>
//                   <h5 className="text-success">Your score: {score}</h5>
//                 </div>
//               )}

//               <button className="btn btn-info mt-3" type="submit" ghost>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </Layout>
//     </div>
//   );
// }
