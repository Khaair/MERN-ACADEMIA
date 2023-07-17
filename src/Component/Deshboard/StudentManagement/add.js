import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import React, { useState } from "react";
const { Option } = Select;

const AddStudent = () => {
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
        // fetchdata();
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  return (
    <div>
      {" "}
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

        <Modal
          title="Add New Student"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={900}
          footer={false}
        >
          <>
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
                            name="dob"
                            label="Date of birth"
                            rules={[
                              {
                                required: true,
                                message: "Please input the studentId!",
                              },
                            ]}
                          >
                            <DatePicker className="other-type-input" />
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
                      <div className="mt-3">
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
    </div>
  );
};

export default AddStudent;
