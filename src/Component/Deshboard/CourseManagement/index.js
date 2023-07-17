import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import { Form, Input, Upload, Button, notification, Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import EditForm from "../EditForm";

function CourseManagement() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentId, setStudentId] = useState();
  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();

  const [logedinData, setLogedinData] = useState([]);

  console.log("logedinData deshboard", logedinData);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get(
        "http://localhost:8080/api/course-manage/course-show"
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
      if (id) {
        let mydata = await axios.delete(
          `http://localhost:8080/api/course/delete/${id}`
        );
        console.log(mydata);
        const filterd = data.filter((a) => a._id !== id);
        setData(filterd);
      }
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
      formData.append("courseTitle", values.courseTitle);
      formData.append("courseSubTitle", values.courseSubTitle);
      formData.append("price", values.price);
      formData.append("description", values.description);
      formData.append("instructorName", values.instructorName);
      formData.append("instructorDesignation", values.instructorDesignation);
      formData.append("learnFromCourse", values.learnFromCourse);
      formData.append("courseContent", values.courseContent);

      formData.append("file", values.file[0].originFileObj);

      const res = await fetch("http://localhost:8080/api/course/course-save", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data?.status === "200") {
        setIsModalOpen(false);

        openNotification();
        fetchdata();
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
  };

  const showEditModal = (idd) => {
    setIsEditModalOpen(true);
    setStudentId(idd);
  };

  const fetchSingledata = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/api/course/course-show-single/${studentId}`
      );

      formEdit.setFieldsValue({
        courseTitle: data.data.courseTitle,
        courseSubTitle: data.data.courseSubTitle,
        price: data.data.price,

        description: data.data.description,
        instructorName: data.data.instructorName,
        instructorDesignation: data.data.instructorDesignation,
        learnFromCourse: data.data.learnFromCourse,
        courseContent: data.data.courseContent,
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchSingledata();
  }, [studentId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const values = await formEdit.validateFields();
      const formData = new FormData();
      formData.append("courseTitle", values.courseTitle);
      formData.append("courseSubTitle", values.courseSubTitle);
      formData.append("price", values.price);

      formData.append("description", values.description);
      formData.append("instructorName", values.instructorName);
      formData.append("instructorDesignation", values.instructorDesignation);
      formData.append("learnFromCourse", values.learnFromCourse);
      formData.append("courseContent", values.courseContent);
      formData.append("file", values.file[0].originFileObj);

      const res = await fetch(
        `http://localhost:8080/api/course/course-update/${studentId}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data) {
        fetchdata();
        handleEditCancel();
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
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
                      <div className="card-title">Course Management</div>
                      <div>
                        <Button onClick={showModal} type="primary" ghost>
                          Add New Course
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
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Banner</th>
                        <th scope="col">Title</th>
                        <th scope="col">Ins. Name</th>
                        <th scope="col">Ins. Designation</th>
                        <th scope="col">Learn From Course</th>

                        {logedinData?.roles?.join("").toString() ===
                          "ROLE_ADMIN" && <th scope="col">Action</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {/* {JSON.stringify(datas)} */}

                      {data.map((el, ind) => {
                        // const images = require.context(`../uploads/${el?.file}`, true);

                        return (
                          <tr key={ind}>
                            <td className="data-show-img">
                              <img src={`/uploads/${el?.file}`} alt="" />
                            </td>
                            <td>{el?.courseTitle}</td>
                            <td>{el?.instructorName}</td>
                            <td>{el?.instructorDesignation}</td>
                            <td>{el?.learnFromCourse}</td>

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
                                    onClick={() => deleteMe(el?._id)}
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
            width={900}
            footer={false}
          >
            <Form form={formEdit} layout="vertical">
              <div class="row">
                <div class="col-lg-6">
                  <Form.Item
                    name="courseTitle"
                    label="Course Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input the Course Title!",
                      },
                    ]}
                  >
                    <Input placeholder="Course Title" />
                  </Form.Item>
                  <Form.Item
                    name="courseSubTitle"
                    label="Course Sub Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input the course subtitle!",
                      },
                    ]}
                  >
                    <Input placeholder="Course  course subtitle" />
                  </Form.Item>
                  <Form.Item
                    name="price"
                    label="Price"
                    rules={[
                      {
                        required: true,
                        message: "Please input the Course price!",
                      },
                    ]}
                  >
                    <Input placeholder="Course price" />
                  </Form.Item>
                  <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input the description!",
                      },
                    ]}
                  >
                    <Input.TextArea rows={3} placeholder="Description" />
                  </Form.Item>
                  <Form.Item
                    label="Instructor Name"
                    name="instructorName"
                    rules={[
                      {
                        required: true,
                        message: "Please input the instructor name!",
                      },
                    ]}
                  >
                    <Input placeholder="Instructor name" />
                  </Form.Item>
                </div>
                <div class="col-lg-6">
                  <Form.Item
                    label="Instructor Designation"
                    name="instructorDesignation"
                    rules={[
                      {
                        required: true,
                        message: "Please input the instructor designation!",
                      },
                    ]}
                  >
                    <Input placeholder="Instructor designation" />
                  </Form.Item>
                  <Form.Item
                    label="Learn From Course"
                    name="learnFromCourse"
                    rules={[
                      {
                        required: true,
                        message: "Please input the learn from course!",
                      },
                    ]}
                  >
                    <Input.TextArea rows={3} placeholder="Learn From Course" />
                  </Form.Item>

                  <Form.Item
                    label="Course Content Link"
                    name="courseContent"
                    rules={[
                      {
                        required: true,
                        message: "Please input the Course Content Link!",
                      },
                    ]}
                  >
                    <Input placeholder="Course Content Link" />
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
                  <Form.Item>
                    <Button type="primary" ghost onClick={handleUpdate}>
                      Submit
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </Modal>

          <Modal
            title="Add New Course"
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
                    <div className="col-lg-12">
                      <Form
                        className="form-input-item"
                        form={form}
                        layout="vertical"
                      >
                        <div class="row">
                          <div class="col-lg-6">
                            <Form.Item
                              name="courseTitle"
                              label="Course Title"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the Course Title!",
                                },
                              ]}
                            >
                              <Input placeholder="Course Title" />
                            </Form.Item>
                            <Form.Item
                              name="courseSubTitle"
                              label="Course Sub Title"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the course subtitle!",
                                },
                              ]}
                            >
                              <Input placeholder="Course  course subtitle" />
                            </Form.Item>
                            <Form.Item
                              name="price"
                              label="Price"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the Course price!",
                                },
                              ]}
                            >
                              <Input placeholder="Course price" />
                            </Form.Item>
                            <Form.Item
                              label="Description"
                              name="description"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the description!",
                                },
                              ]}
                            >
                              <Input.TextArea
                                className="other-type-input"
                                rows={3}
                                placeholder="Description"
                              />
                            </Form.Item>
                            <Form.Item
                              label="Instructor Name"
                              name="instructorName"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the instructor name!",
                                },
                              ]}
                            >
                              <Input placeholder="Instructor name" />
                            </Form.Item>
                          </div>
                          <div class="col-lg-6">
                            <Form.Item
                              label="Instructor Designation"
                              name="instructorDesignation"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input the instructor designation!",
                                },
                              ]}
                            >
                              <Input placeholder="Instructor designation" />
                            </Form.Item>
                            <Form.Item
                              label="Learn From Course"
                              name="learnFromCourse"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input the learn from course!",
                                },
                              ]}
                            >
                              <Input.TextArea
                                className="other-type-input"
                                rows={3}
                                placeholder="Learn From Course"
                              />
                            </Form.Item>

                            <Form.Item
                              label="Course Content Link"
                              name="courseContent"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input the Course Content Link!",
                                },
                              ]}
                            >
                              <Input placeholder="Course Content Link" />
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
                            <Form.Item>
                              <Button
                                type="primary"
                                ghost
                                onClick={handleSubmit}
                              >
                                Submit
                              </Button>
                            </Form.Item>
                          </div>
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

export default CourseManagement;
