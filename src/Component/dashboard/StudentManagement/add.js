import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import React, { useState } from "react";
import { fetchAllStudents } from "../../../statement-management/slices/studentSlices";
import { useDispatch } from "react-redux";
import { AppstoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const AddStudent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const dispatch = useDispatch();

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
    const studentRegId = localStorage.getItem("studentRegId");
    const fetchstudentRegId = JSON.parse(studentRegId);
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("studentRegId", fetchstudentRegId);
      formData.append("dob", values.dob);
      formData.append("address", values.address);
      formData.append("gender", values.gender);
      formData.append("class", values.class);
      formData.append("section", values.section);

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
        dispatch(fetchAllStudents());
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <div class="add-student-area">
      <div class="add-student-wrapper">
        <div className="card-title custom-button">
          <AppstoreOutlined style={{ fontSize: "20px" }} />
          <div class="ml-5">Student Management</div>
        </div>
        <div>
          <Button
            onClick={showModal}
            type="primary"
            ghost
            className="custom-button"
          >
            <PlusCircleOutlined />
            Add Student
          </Button>
        </div>
      </div>
      <hr style={{ height: "0.5px" }} className="mt-2" />

      <Modal
        title="Add New Student"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
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
                          name="fullName"
                          label="User Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input the user name!",
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
                      </div>

                      <div class="col-lg-6">
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
                          <Select placeholder="Select your gender">
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          label="Admission Class"
                          name="class"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select placeholder="Select your class">
                            <Option value="10">Ten</Option>
                            <Option value="09">Nine</Option>
                            <Option value="08">Eight</Option>
                            <Option value="07">Seven</Option>
                            <Option value="06">Six</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          label="Section"
                          name="section"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select placeholder="Select your section">
                            <Option value="1">A</Option>
                            <Option value="2">B</Option>
                            <Option value="3">C</Option>
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
  );
};

export default AddStudent;
