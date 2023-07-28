import React, { useEffect, useState } from "react";
import StudentDeshboardLayout from "../Layout";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { fetchAllStudents } from "../../../statement-management/slices/studentSlices";
import { useDispatch } from "react-redux";
import { AppstoreOutlined } from "@ant-design/icons";
import axios from "axios";
const { Option } = Select;

export default function StudentProfile() {
  const [userData, setUserData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [singleDataId, setSingleDataId] = useState("");
  const [singleData, setSingleData] = useState([]);

  const [message, setMessage] = useState("");
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const studentId = userData?.id;

  useEffect(() => {
    const userLogedinData = localStorage.getItem("userLogedinData");
    const fetchLogedinData = JSON.parse(userLogedinData);
    setUserData(fetchLogedinData);
    console.log("userLogedinData", userLogedinData);
  }, []);
  const fetchSingleData = async () => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-profile/show-single-student-profile/${studentId}`
      );

      if (singleData) {
        console.log("sid", singleData?.data);
        setSingleDataId(singleData?.data?._id);
        setSingleData(singleData?.data);

        setUpdate(true);
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
        designation: singleData?.data?.designation,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, [studentId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      console.log("file test", values.file[0].originFileObj);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("courseId", values.courseId);
      formData.append("studentId", studentId);
      formData.append("dob", values.dob);
      formData.append("address", values.address);
      formData.append("gender", values.gender);
      formData.append("file", values.file[0].originFileObj);

      const res = await fetch(
        "http://localhost:8080/api/student-profile/student-profile-save",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data?.status === "200") {
        setMessage(data?.message);
        setUpdate(true);
        console.log("save data successfully", data);
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      console.log("file test", values.file[0].originFileObj);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("courseId", values.courseId);
      formData.append("studentId", studentId);
      formData.append("dob", values.dob);
      formData.append("address", values.address);
      formData.append("gender", values.gender);
      formData.append("file", values.file[0].originFileObj);

      const res = await fetch(
        `http://localhost:8080/api/student-profile/student-profile-update/${singleDataId}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data?.status === "200") {
        setMessage(data?.message);
        fetchSingleData();
        console.log("save data successfully", data);
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  console.log("userData", userData);

  return (
    <StudentDeshboardLayout>
      <div class="mr-5 mt-2">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <img src={`/uploads/${singleData?.file}`} alt="" />
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
                            {update ? (
                              <Form.Item>
                                <Button
                                  type="primary"
                                  ghost
                                  onClick={handleUpdate}
                                >
                                  Update
                                </Button>
                              </Form.Item>
                            ) : (
                              <Form.Item>
                                <Button
                                  type="primary"
                                  ghost
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </Button>
                              </Form.Item>
                            )}
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
