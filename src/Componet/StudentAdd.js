import React, { useState } from "react";

import Layout from "../layout";

import { Form, Input, DatePicker, Select, Upload, Radio, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FormComponent = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [file, setImage] = useState(null);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      let fullname = values?.fullname;
      let dob = values?.dob;
      let religion = values?.religion;
      let section = values?.section;
      let roll = values?.roll;
      let email = values?.email;
      let admissionId = values?.admissionId;
      let gender = values?.gender;
      let bloodGroup = values?.bloodGroup;
      let classNo = values?.classNo;
      let phone = values?.phone;

      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("dob", dob);
      formData.append("religion", religion);
      formData.append("section", section);
      formData.append("roll", roll);
      formData.append("email", email);
      formData.append("admissionId", admissionId);
      formData.append("gender", gender);
      formData.append("bloodGroup", bloodGroup);
      formData.append("classNo", classNo);
      formData.append("phone", phone);
      formData.append("file", values.file[0].originFileObj);
      console.log("formData", formData);
      const res = await fetch("http://localhost:8080/api/add-student", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  // const onFinish = async (values) => {
  //   console.log("Received values of form: ", values);
  //   // Use values to send a post request to your API

  //   let fullname = values?.fullname;
  //   let dob = values?.dob;
  //   let religion = values?.religion;
  //   let section = values?.section;
  //   let roll = values?.roll;
  //   let email = values?.email;
  //   let admissionId = values?.admissionId;
  //   let gender = values?.gender;
  //   let bloodGroup = values?.bloodGroup;
  //   let classNo = values?.classNo;
  //   let phone = values?.phone;

  //   const formData = new FormData();
  //   formData.append("fullname", fullname);
  //   formData.append("dob", dob);
  //   formData.append("religion", religion);
  //   formData.append("section", section);
  //   formData.append("roll", roll);
  //   formData.append("email", email);
  //   formData.append("admissionId", admissionId);
  //   formData.append("gender", gender);
  //   formData.append("bloodGroup", bloodGroup);
  //   formData.append("classNo", classNo);
  //   formData.append("phone", phone);
  //   formData.append("file", values.file[0].originFileObj);

  //   const res = await fetch("http://localhost:8080/api/add-student", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  return (
    <Layout>
      <div class="student-add-area mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <Form form={form}>
                <Form.Item
                  label="Full Name"
                  name="fullname"
                  rules={[
                    { required: true, message: "Please input your full name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Date of Birth"
                  name="dob"
                  rules={[
                    {
                      required: true,
                      message: "Please select your date of birth!",
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  label="Religion"
                  name="religion"
                  rules={[
                    { required: true, message: "Please select your religion!" },
                  ]}
                >
                  <Select>
                    <Option value="Hindu">Hindu</Option>
                    <Option value="Muslim">Muslim</Option>
                    <Option value="Christian">Christian</Option>
                    <Option value="Sikh">Sikh</Option>
                    <Option value="Buddhist">Buddhist</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Section"
                  name="section"
                  rules={[
                    { required: true, message: "Please input your section!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Roll Number"
                  name="roll"
                  rules={[
                    {
                      required: true,
                      message: "Please input your roll number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not a valid email address!",
                    },
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Admission ID"
                  name="admissionId"
                  rules={[
                    {
                      required: true,
                      message: "Please input your admission ID!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Radio.Group>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="Blood Group"
                  name="bloodGroup"
                  rules={[
                    {
                      required: true,
                      message: "Please select your blood group!",
                    },
                  ]}
                >
                  <Select>
                    <Option value="A+">A+</Option>
                    <Option value="A-">A-</Option>
                    <Option value="B+">B+</Option>
                    <Option value="B-">B-</Option>
                    <Option value="O+">O+</Option>
                    <Option value="O-">O-</Option>
                    <Option value="AB+">AB+</Option>
                    <Option value="AB-">AB-</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Class"
                  name="classNo"
                  rules={[
                    { required: true, message: "Please input your class!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="File"
                  name="file"
                  valuePropName="fileList"
                  getValueFromEvent={(e) => e && e.fileList}
                  rules={[
                    { required: true, message: "Please select the file!" },
                  ]}
                >
                  <Upload name="file" listType="picture">
                    <Button>Upload Image</Button>
                  </Upload>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormComponent;
