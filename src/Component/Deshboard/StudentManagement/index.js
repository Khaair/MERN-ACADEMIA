import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import {
  Form,
  Input,
  Upload,
  Button,
  notification,
  Modal,
  DatePicker,
  Select,
} from "antd";
import { SmileOutlined } from "@ant-design/icons";
import EditForm from "../EditForm";
import Details from "./Details";
import UpdateStudent from "./UpdateStudent";
const { Option } = Select;
function StudentManagement() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [getstudentId, setStudentId] = useState();
  const [form] = Form.useForm();
  const [logedinData, setLogedinData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/student-manage/student-show"
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
        `http://localhost:8080/api/student-manage/delete/${id}`
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
      formData.append("dob", values.dob);
      formData.append("address", values.address);
      formData.append("gender", values.gender);

      formData.append("file", values.file[0].originFileObj);
      const res = await fetch(
        "http://localhost:8080/api/student-manage/student-save",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data?.status === "200") {
        handleCancel();
        fetchdata();
        openNotification();
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
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
    setIsDetailsModalOpen(false);
  };

  const handleDetailsCancel = () => {
    setIsDetailsModalOpen(false);

    fetchdata();
  };

  const showDetailsModal = (studentId) => {
    setIsDetailsModalOpen(true);
    setStudentId(studentId);
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
                        <th scope="col">StudentId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
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
                            <td scope="row">{el?.studentId}</td>
                            <td>{el?.name}</td>
                            <td>{el?.email}</td>
                            <td>{el?.phoneNumber}</td>
                            <td>{el?.address}</td>
                            <td className="data-show-img">
                              <img src={`/uploads/${el?.file}`} alt="" />
                            </td>
                            {logedinData?.roles?.join("").toString() ===
                              "ROLE_ADMIN" && (
                              <td>
                                <div className="d-flex">
                                  <Button
                                    onClick={() => showDetailsModal(el?._id)}
                                    type="primary"
                                    ghost
                                  >
                                    Details
                                  </Button>

                                  <Button
                                    onClick={() => showEditModal(el?._id)}
                                    type="primary"
                                    ghost
                                    className="mx-2"
                                  >
                                    Edit
                                  </Button>

                                  <Button
                                    onClick={() => deleteMe(el._id)}
                                    type="primary"
                                    ghost
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
            title="Student Details"
            open={isDetailsModalOpen}
            onOk={handleDetailsOk}
            onCancel={handleDetailsCancel}
            width={900}
            footer={false}
          >
            <Details getstudentId={getstudentId} />
          </Modal>

          <Modal
            title="Student Details"
            open={isEditModalOpen}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
            width={600}
            footer={false}
          >
            <UpdateStudent getstudentId={getstudentId} />
          </Modal>

          <Modal
            title="Add New Student"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={900}
            footer={false}
          >
            <>
              {contextHolder}

              <div className="form-area mt-3">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <Form
                        className="form-input-item"
                        form={form}
                        layout="vertical"
                      >
                        <div class="row">
                          <div class="col-lg-6">
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
                          </div>

                          <div class="col-lg-6">
                            <Form.Item
                              label="Address"
                              name="address"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the address!",
                                },
                              ]}
                            >
                              <Input placeholder="address" />
                            </Form.Item>
                            <Form.Item
                              label="Gender"
                              name="gender"
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                            >
                              <Select>
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item
                              name="dob"
                              label="Date of birth"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the studentId!",
                                },
                              ]}
                            >
                              <DatePicker />
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
                          </div>
                        </div>
                        <div>
                          <Form.Item>
                            <Button type="primary" ghost onClick={handleSubmit}>
                              Submit
                            </Button>
                          </Form.Item>
                        </div>
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
