import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import { Form, Input, Upload, Button, notification, Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import EditForm from "../EditForm";

function StudentManagement() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentId, setStudentId] = useState();
  const [errorMsg, setErrorMsg] = useState([]);
  const [matchedEmailerrorMsg, setMatchedEmailErrorMsg] = useState("");
  const [matchedUsererrorMsg, setMatchedUserErrorMsg] = useState("");
  const [matchederrorMsg, setMatchedErrorMsg] = useState("");
  const [form] = Form.useForm();

  const [logedinData, setLogedinData] = useState([]);

  console.log("logedinData deshboard", logedinData);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/student-show"
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("courseId", values.courseId);
      formData.append("studentId", values.studentId);
      formData.append("file", values.file[0].originFileObj);
      const res = await fetch("http://localhost:8080/api/save", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data?.status === "200") {
        fetchdata();
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
    setErrorMsg([]);
    setMatchedErrorMsg("Registration successful");
    setMatchedUserErrorMsg("");
    setMatchedEmailErrorMsg("");
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
                      <div className="card-title">Student Management</div>
                      <div>
                        <Button onClick={showModal} type="primary" ghost>
                          Add Student
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
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Course Id</th>
                        <th scope="col">Student Id</th>
                        <th scope="col">Image</th>
                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && <th scope="col">Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((el, ind) => {
                        return (
                          <tr key={ind}>
                            <th scope="row">{ind + 1}</th>
                            <td>{el?.name}</td>
                            <td>{el?.email}</td>
                            <td>{el?.phoneNumber}</td>
                            <td>{el?.courseId}</td>
                            <td>{el?.studentId}</td>
                            <td className="data-show-img">
                              <img src={`/uploads/${el?.file}`} alt="" />
                            </td>
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
            title="Add New Student"
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
                          name="name"
                          label="Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input the name!",
                            },
                          ]}
                        >
                          <Input placeholder="Name" />
                        </Form.Item>
                        <p className="text-danger ">{matchedUsererrorMsg}</p>

                        <Form.Item
                          name="email"
                          label="Email"
                          rules={[
                            {
                              required: true,
                              message: "Please input the email!",
                            },
                          ]}
                        >
                          <Input placeholder="Email" />
                        </Form.Item>
                        <p className="text-danger ">{matchedEmailerrorMsg}</p>

                        <Form.Item
                          label="Phone No"
                          name="phoneNumber"
                          rules={[
                            {
                              required: true,
                              message: "Please input the phone number!",
                            },
                          ]}
                        >
                          <Input placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item
                          label="Course Id"
                          name="courseId"
                          rules={[
                            {
                              required: true,
                              message: "Please input the courseId!",
                            },
                          ]}
                        >
                          <Input placeholder="courseId" />
                        </Form.Item>
                        <Form.Item
                          label="Student Id"
                          name="studentId"
                          rules={[
                            {
                              required: true,
                              message: "Please input the studentId!",
                            },
                          ]}
                        >
                          <Input placeholder="studentId" />
                        </Form.Item>
                        <Form.Item
                          label="Image"
                          name="file"
                          valuePropName="fileList"
                          getValueFromEvent={(e) => e && e.fileList}
                          rules={[
                            {
                              required: true,
                              message: "Please select the file!",
                            },
                          ]}
                        >
                          <Upload name="file" listType="picture">
                            <Button>Upload Image</Button>
                          </Upload>
                        </Form.Item>
                        {/* {errorMsg?.length > 0 &&
                          errorMsg?.map((item, index) => {
                            return (
                              <p className="text-danger mt-2">{item?.msg}</p>
                            );
                          })} */}
                        <p className="text-danger mt-3">{matchederrorMsg}</p>

                        <Form.Item>
                          <Button type="primary" ghost onClick={handleSubmit}>
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
    </div>
  );
}

export default StudentManagement;
