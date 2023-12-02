import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import { Form, Input, Button, notification, Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";

function ResultManagement() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [studentId, setStudentId] = useState();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [form] = Form.useForm();
  const [logedinData, setLogedinData] = useState([]);
  const [singleResultData, setSingleResultData] = useState([]);
  const [singleSearchData, setSingleSearchData] = useState([]);

  const [searchform] = Form.useForm();

  console.log("singleResultData", singleResultData?.data);
  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/result-manage/result-show"
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
      let mydata = await axios.delete(
        `http://localhost:8080/api/result-manage/result-delete/${id}`
      );
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

  const handleResultSubmit = async (e) => {
    e.preventDefault();
    const values = await form.validateFields();
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_COURSE}/result-manage/result-save`,
        {
          studentName: values?.studentName,
          rollNumber: values?.rollNumber,
          examName: values?.examName,
          passingYear: values?.passingYear,
          subjectAndMarks: items,
        }
      );
      if (response?.status === 200) {
        form.resetFields();
        setIsModalOpen(false);
        fetchdata();
        setLoading(false);
      } else if (response?.status === 400) {
        setError(response?.data?.message);
        setLoading(false);
      } else if (response?.status === 401) {
        setError(response?.data?.message);
        setLoading(false);
      } else if (response?.status === 404) {
        setError(response?.message);
        setLoading(false);
      } else if (response?.status === 500) {
        setError(response?.data?.message);
        setLoading(false);
      }
      console.log(response, "success");
    } catch (er) {
      console.log("error checkout", er);
    }
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

  const handleDetailsOk = () => {
    setDetailsModalOpen(false);
  };

  const handleDetailsCancel = () => {
    setDetailsModalOpen(false);

    fetchdata();
  };

  const handleItemChange = (value, index) => {
    setItems([...items.slice(0, index), value, ...items.slice(index + 1)]);
  };

  const showDetailsModal = (resultId) => {
    setDetailsModalOpen(true);
    fetchSingleResultdata(resultId);
  };

  const fetchSingleResultdata = async (resultId) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_COURSE}/result-manage/show-single-result/${resultId}`
      );
      setSingleResultData(data);
      console.log("data result singlw", data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  const searchResult = async () => {
    const values = await searchform.validateFields();
    const singlePosts = data?.find((item) => {
      if (item?.rollNumber === values?.rollNumber) {
        return {
          ...item,
        };
      }
    });

    fetchSearchResultdata(singlePosts?._id);
  };

  const fetchSearchResultdata = async (resultId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_COURSE}/result-manage/show-single-result/${resultId}`
      );
      console.log("pppp", response);
      if (response?.status === 200) {
        setSingleSearchData(response);

        searchform.resetFields();
      }
    } catch (err) {
      console.log(err, "error");
    }
  };

  return (
    <Layout>
      <div class="academia-management-area">
        <div class="card min-screen-height">
          <div class="add-student-wrapper">
            <div className="card-title">Result Management</div>
            <div>
              {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                <Button onClick={showModal} type="primary" ghost>
                  Add Result
                </Button>
              )}
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">Sl</th>
                <th scope="col">Student name</th>
                <th scope="col">Roll number</th>

                <th scope="col">Exam name</th>
                <th scope="col">Passing Year</th>

                {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                  <th scope="col">Action</th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((el, ind) => {
                return (
                  <tr key={ind}>
                    <th scope="row">{ind + 1}</th>
                    <td>{el?.studentName}</td>
                    <td>{el?.rollNumber}</td>

                    <td>{el?.examName}</td>
                    <td>{el?.passingYear}</td>

                    {logedinData?.roles?.join("").toString() ===
                      "ROLE_ADMIN" && (
                      <td>
                        <div>
                          <Button
                            onClick={() => showDetailsModal(el?._id)}
                            type="primary"
                            ghost
                          >
                            Details
                          </Button>
                          <Button
                            className="mx-2"
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

        <div class="result-search-area mt-3">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="result-search-title text-center">
                  <h2>Search Result</h2>
                </div>
                <div>
                  <Form className="w-50" form={searchform} layout="vertical">
                    <Form.Item
                      name="rollNumber"
                      label="Roll Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input the roll number!",
                        },
                      ]}
                    >
                      <Input placeholder="Roll number" />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" ghost onClick={searchResult}>
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {singleSearchData?.data && (
          <div class="result-display-area mt-3">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div className="text-center">
                      <h4>Student Details</h4>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Student Name</td>
                          <td>
                            {singleSearchData?.data?.details?.studentName}
                          </td>
                        </tr>

                        <tr>
                          <td>Roll Number</td>
                          <td>{singleSearchData?.data?.details?.rollNumber}</td>
                        </tr>

                        <tr>
                          <td>Exam Name</td>
                          <td>{singleSearchData?.data?.details?.examName}</td>
                        </tr>

                        <tr>
                          <td>Passing Year</td>
                          <td>
                            {singleSearchData?.data?.details?.passingYear}
                          </td>
                        </tr>

                        <tr>
                          <td>Result </td>
                          <td>Passed</td>
                        </tr>
                        <tr>
                          <td>GPA </td>
                          <td>{singleSearchData?.data?.gpa}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="text-center">
                      <h4>Grade Sheet</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Sl</th>
                              <th scope="col">Subject Name</th>
                              <th scope="col">Marks</th>
                              <th scope="col">Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            {singleSearchData?.data?.subjectAndMarks?.map(
                              (item, index) => {
                                const subject = Object.keys(item)[0];
                                const marks = item[subject];
                                let grade = "";
                                if (marks >= 80 && marks <= 100) {
                                  grade = "A+";
                                }
                                if (marks >= 70 && marks <= 79) {
                                  grade = "A";
                                }
                                if (marks >= 60 && marks <= 69) {
                                  grade = "A-";
                                }
                                if (marks >= 50 && marks <= 59) {
                                  grade = "B";
                                }

                                if (marks >= 40 && marks <= 49) {
                                  grade = "C";
                                }
                                if (marks >= 33 && marks <= 39) {
                                  grade = "D";
                                }
                                if (marks < 33) {
                                  grade = "F";
                                }
                                return (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{subject}</td>
                                    <td>{marks}</td>
                                    <td>{grade}</td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Modal
          title=""
          open={isDetailsModalOpen}
          onOk={handleDetailsOk}
          onCancel={handleDetailsCancel}
          width={1000}
          footer={false}
        >
          <div className="text-center">
            <h4>Student Details</h4>
          </div>
          <table>
            <tbody>
              <tr>
                <td>Student Name</td>
                <td>{singleResultData?.data?.details?.studentName}</td>
              </tr>

              <tr>
                <td>Roll Number</td>
                <td>{singleResultData?.data?.details?.rollNumber}</td>
              </tr>

              <tr>
                <td>Exam Name</td>
                <td>{singleResultData?.data?.details?.examName}</td>
              </tr>

              <tr>
                <td>Passing Year</td>
                <td>{singleResultData?.data?.details?.passingYear}</td>
              </tr>

              <tr>
                <td>Result </td>
                <td>Passed</td>
              </tr>
              <tr>
                <td>GPA </td>
                <td>{singleResultData?.data?.gpa}</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <h4>Grade Sheet</h4>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">Sl</th>
                <th scope="col">Subject Name</th>
                <th scope="col">Marks</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              {singleResultData?.data?.subjectAndMarks?.map((item, index) => {
                const subject = Object.keys(item)[0];
                const marks = item[subject];
                let grade = "";
                if (marks >= 80 && marks <= 100) {
                  grade = "A+";
                }
                if (marks >= 70 && marks <= 79) {
                  grade = "A";
                }
                if (marks >= 60 && marks <= 69) {
                  grade = "A-";
                }
                if (marks >= 50 && marks <= 59) {
                  grade = "B";
                }

                if (marks >= 40 && marks <= 49) {
                  grade = "C";
                }
                if (marks >= 33 && marks <= 39) {
                  grade = "D";
                }
                if (marks < 33) {
                  grade = "F";
                }
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{subject}</td>
                    <td>{marks}</td>
                    <td>{grade}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Modal>

        <Modal
          title="Add New Result"
          className="form-input-item"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1200}
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
                        name="studentName"
                        label="Student Name"
                        rules={[
                          {
                            required: true,
                            message: "Please input the student name!",
                          },
                        ]}
                      >
                        <Input placeholder="Student name" />
                      </Form.Item>

                      <Form.Item
                        name="rollNumber"
                        label="Roll Number"
                        rules={[
                          {
                            required: true,
                            message: "Please input the roll number!",
                          },
                        ]}
                      >
                        <Input placeholder="Roll number" />
                      </Form.Item>

                      <Form.Item
                        label="Exam Name"
                        name="examName"
                        rules={[
                          {
                            required: true,
                            message: "Please input the exam name!",
                          },
                        ]}
                      >
                        <Input placeholder="Exam name" />
                      </Form.Item>
                      <Form.Item
                        label="Passing Year"
                        name="passingYear"
                        rules={[
                          {
                            required: true,
                            message: "Please input the passing year!",
                          },
                        ]}
                      >
                        <Input placeholder="Passing year" />
                      </Form.Item>
                      <p>
                        Enter Subject and Marks(Subjectname-marks same as this
                        format)
                      </p>
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
                                    placeholder="Bangla-80"
                                  />
                                  <Button
                                    className="mt-2"
                                    onClick={() => remove(field.name)}
                                  >
                                    Remove
                                  </Button>
                                </Form.Item>
                              ))}
                              <Button className=" mb-3" onClick={() => add()}>
                                Add Subject and Marks
                              </Button>
                            </div>
                          );
                        }}
                      </Form.List>

                      <Form.Item>
                        <Button
                          type="primary"
                          ghost
                          onClick={handleResultSubmit}
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </Layout>
  );
}

export default ResultManagement;
