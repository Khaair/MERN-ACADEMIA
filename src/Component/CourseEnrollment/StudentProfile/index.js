import React, { useEffect, useState } from "react";
import StudentDeshboardLayout from "../Layout";
import { Button, DatePicker, Form, Input, Select } from "antd";

import { AppstoreOutlined } from "@ant-design/icons";
import axios from "axios";
import AddProfilePic from "./add-profile-picture";
const { Option } = Select;

export default function StudentProfile() {
  const [userData, setUserData] = useState("");
  const [singleDataId, setSingleDataId] = useState("");
  const [singleData, setSingleData] = useState([]);
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const userLogedinData = localStorage.getItem("userLogedinData");
    const fetchLogedinData = JSON.parse(userLogedinData);
    setUserData(fetchLogedinData);
    console.log("userLogedinData", userLogedinData);
  }, []);

  const studentId = userData?.id;

  const fetchSingleData = async () => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-profile/show-single-student-profile/${studentId}`
      );

      if (singleData) {
        console.log("sid", singleData?.data);
        setSingleDataId(singleData?.data?._id);
        setSingleData(singleData?.data);
      }
      console.log("singleData", singleData);
      form.setFieldsValue({
        name: singleData?.data?.name,
        email: singleData?.data?.email,
        phoneNumber: singleData?.data?.phoneNumber,
        courseId: singleData?.data?.courseId,
        studentId: singleData?.data?.studentId,
        address: singleData?.data?.address,
        // dob: singleData?.data?.dob,
        gender: singleData?.data?.gender,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, [studentId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const values = await form.validateFields();
    try {
      let response = await axios.post(
        `http://localhost:8080/api/student-profile/student-profile-update/${singleDataId}`,
        {
          name: values?.name,
          email: values?.email,
          phoneNumber: values?.phoneNumber,
          courseId: values?.courseId,
          answer: values?.answer,
          studentId: studentId,
          dob: values?.dob,
          address: values?.address,
          gender: values?.gender,
        }
      );
      if (response?.data?.status === "200") {
        setMessage(response?.message);
        fetchSingleData();
        console.log("save data successfully", response);
      } else if (response?.data?.status === "400") {
      } else if (response?.data?.status === "401") {
      } else if (response?.data?.status === "404") {
      } else if (response?.data?.status === "500") {
      }
      console.log(response, "success");
    } catch (er) {
      console.log("error checkout", er);
    }
  };

  return (
    <StudentDeshboardLayout>
      <div class="mr-5 mt-2">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <AddProfilePic singleDataId={singleDataId} />
              <h5>User Name: {userData?.username}</h5>
              <h6>Email: {userData?.id}</h6>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="add-student-area">
                <div class="add-student-wrapper pt-3">
                  <div className="card-title custom-button">
                    <AppstoreOutlined style={{ fontSize: "20px" }} />
                    Update student information
                  </div>
                  <p className="text-danger">{message}</p>
                </div>
                <hr className="mt-3" />

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
                            </div>
                          </div>
                          <div className="mt-3">
                            <Form.Item>
                              <Button
                                type="primary"
                                ghost
                                onClick={handleUpdate}
                              >
                                Update
                              </Button>
                            </Form.Item>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentDeshboardLayout>
  );
}
