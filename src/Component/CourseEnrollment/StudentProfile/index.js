import React, { useEffect, useState } from "react";
import StudentDeshboardLayout from "../Layout";
import { Tabs } from "antd";
import axios from "axios";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import TabPane from "antd/es/tabs/TabPane";

const { Option } = Select;

export default function StudentProfile() {
  const [userData, setUserData] = useState("");
  const [showEDitState, setShowEditState] = useState(false);

  const [singleData, setSingleData] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const userLogedinData = localStorage.getItem("userLogedinData");
    const fetchLogedinData = JSON.parse(userLogedinData);
    setUserData(fetchLogedinData);
  }, []);
  const studentRegId = userData?.id;
  const fetchSingleData = async () => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-manage/show-single-student-profile/${studentRegId}`
      );

      if (singleData) {
        setSingleData(singleData?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, [studentRegId]);

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
        console.log(data);
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const handleEidtBtn = () => {
    setShowEditState(true);
  };

  return (
    <StudentDeshboardLayout>
      <div class="mr-5 mt-2">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="flex">
                <div className="h-[100px] w-[100px] border p-2">
                  <img
                    className="w-full h-full"
                    src="/uploads/about-us.jpg"
                    alt="user"
                  />
                </div>
                <div className="ml-2">
                  <h2>{singleData?.fullName}</h2>
                  <h5>{singleData?.address}</h5>
                </div>
              </div>
              <div>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Overview" key="1">
                    {!showEDitState && (
                      <div class="row">
                        <div class="col-lg-12">
                          <div className="text-right">
                            <button
                              onClick={handleEidtBtn}
                              className="bg-[#06BBCC] text-white px-3 py-2"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {showEDitState ? (
                      <>
                        <div className="mb-5">
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
                                <Button
                                  type="primary"
                                  ghost
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </div>
                        <button
                          onClick={(e) => setShowEditState(false)}
                          className="bg-[#06BBCC] text-white px-3 py-2"
                        >
                          Cancel Editing
                        </button>
                      </>
                    ) : (
                      <div className="row mt-2">
                        <div class="col-lg-6 mb-2">
                          <div class="flex bg-[#F0FBFC] rounded p-2">
                            <div>Name</div>
                            <div className="ml-[75px]">
                              {singleData?.fullName}
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 mb-2">
                          <div class="flex bg-[#F0FBFC] rounded p-2">
                            <div>Email</div>
                            <div className="ml-[75px]">{singleData?.email}</div>
                          </div>
                        </div>
                        <div class="col-lg-6 mb-2">
                          <div class="flex bg-[#F0FBFC] rounded p-2">
                            <div>Phone no</div>
                            <div className="ml-[75px]">
                              {singleData?.phoneNumber}
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 mb-2">
                          <div class="flex bg-[#F0FBFC] rounded p-2">
                            <div>Address</div>
                            <div className="ml-[75px]">
                              {singleData?.address}
                            </div>
                          </div>
                        </div>{" "}
                        <div class="col-lg-6 mb-2">
                          <div class="flex bg-[#F0FBFC] rounded p-2">
                            <div>Date of birth</div>
                            <div className="ml-[75px]">{singleData?.dob}</div>
                          </div>
                        </div>{" "}
                        <div class="col-lg-6 mb-2">
                          <div class="flex bg-[#F0FBFC] rounded p-2">
                            <div>Gender</div>
                            <div className="ml-[75px]">
                              {singleData?.gender}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabPane>
                  <TabPane tab="Attendence" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Result" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentDeshboardLayout>
  );
}
