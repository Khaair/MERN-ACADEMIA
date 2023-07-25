import React, { useState } from "react";
import { Form, Input, Upload, Button, notification, Modal } from "antd";
import {
  SmileOutlined,
  AppstoreOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const AddCourse = ({ logedinData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

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
      const res = await fetch(
        "http://localhost:8080/api/course-manage/course-save",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data?.status === "200") {
        setIsModalOpen(false);

        openNotification();
        // fetchdata();
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

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

  return (
    <>
      {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
        <div className="add-course-area">
          <div class="add-student-wrapper pt-3">
            <div className="card-title custom-button">
              <AppstoreOutlined style={{ fontSize: "20px" }} />
              Course Management
            </div>
            <div>
              <Button
                onClick={showModal}
                type="primary"
                ghost
                className="custom-button"
              >
                <PlusCircleOutlined />
                Add Course
              </Button>
            </div>
          </div>
          <hr className="mt-3" />
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
      )}
    </>
  );
};

export default AddCourse;
