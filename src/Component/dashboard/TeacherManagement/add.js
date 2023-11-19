import { Button, Form, Input, Modal, Upload, Select } from "antd";
import React, { useState } from "react";
import { AppstoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const AddTeacher = (props) => {
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
    const teacherRegId = localStorage.getItem("teacherRegId");
    const fetchteacherRegId = JSON.parse(teacherRegId);
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("name", values?.name);
      formData.append("email", values?.email);
      formData.append("password", values?.password);
      formData.append("phoneNumber", values?.phoneNumber);
      formData.append("gender", values?.gender);
      formData.append("teacherId", values?.teacherId);
      formData.append("address", values?.address);
      formData.append("subject", values?.subject);
      formData.append("qualifications", values?.qualifications);
      formData.append("designation", values?.designation);
      formData.append("teacherRegId", fetchteacherRegId);
      formData.append("salary", values?.salary);

      formData.append("file", values?.file[0].originFileObj);
      const res = await fetch(
        "http://localhost:8080/api/teacher-manage/teacher-save",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data?.status === "200") {
        handleOk();
        props.fetch();
      }

      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  return (
    <>
      <div class="add-student-wrapper">
        <div className="card-title custom-button">
          <AppstoreOutlined style={{ fontSize: "20px" }} />
          <div class="ml-5">Teacher Management</div>
        </div>
        <div>
          <Button
            onClick={showModal}
            type="primary"
            ghost
            className="custom-button"
          >
            <PlusCircleOutlined />
            Add Teacher
          </Button>
        </div>
      </div>
      <hr style={{ height: "0.5px" }} className="mt-2" />

      <Modal
        title="Add New Teacher"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={false}
      >
        <div className="form-area mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <Form className="form-input-item" form={form} layout="vertical">
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
                        label="Password"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input the password!",
                          },
                        ]}
                      >
                        <Input placeholder="Password" />
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
                        label="Gender"
                        name="gender"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Select placeholder="Select your gender">
                          <Option value="male">male</Option>
                          <Option value="female">female</Option>
                          <Option value="other">other</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Salary"
                        name="salary"
                        rules={[
                          {
                            required: true,
                            message: "Please input the salary!",
                          },
                        ]}
                      >
                        <Input placeholder="salary" />
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
                        label="Subject"
                        name="subject"
                        rules={[
                          {
                            required: true,
                            message: "Please input the subject!",
                          },
                        ]}
                      >
                        <Input placeholder="subject" />
                      </Form.Item>
                      <Form.Item
                        label="Qualifications"
                        name="qualifications"
                        rules={[
                          {
                            required: true,
                            message: "Please input the qualifications!",
                          },
                        ]}
                      >
                        <Input placeholder="qualifications" />
                      </Form.Item>

                      <Form.Item
                        label="Designation"
                        name="designation"
                        rules={[
                          {
                            required: true,
                            message: "Please input the designation!",
                          },
                        ]}
                      >
                        <Input placeholder="designation" />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" ghost onClick={handleSubmit}>
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
      </Modal>
    </>
  );
};

export default AddTeacher;
