import { Button, DatePicker, Form, Input, Modal, Select, Upload } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
const { Option } = Select;

const StudentList = ({ logedinData, data, fetch, fetchData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleID, setSingleId] = useState("");
  const [form] = Form.useForm();
  const [formGender] = Form.useForm();

  const [filterData, setFilterData] = useState([]);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (id) => {
    setIsModalOpen(true);
    setSingleId(id);
    fetchSingleData(id);
  };

  const fetchSingleData = async (id) => {
    try {
      let singleData = await axios.get(
        `http://localhost:8080/api/student-manage/show-single-student/${id}`
      );

      form.setFieldsValue({
        name: singleData?.data?.name,
        email: singleData?.data?.email,
        phoneNumber: singleData?.data?.phoneNumber,
        teacherId: singleData?.data?.teacherId,
        address: singleData?.data?.address,
        subject: singleData?.data?.subject,
        qualifications: singleData?.data?.qualifications,
        designation: singleData?.data?.designation,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteStudent = async (id) => {
    try {
      let mydata = await axios.delete(
        `http://localhost:8080/api/student-manage/student-delete/${id}`
      );
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      fetch(filterd);
    } catch (er) {
      console.log(er);
    }
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
  useEffect(() => {
    setFilterData(data);
  }, [data]);
  const handleGenderFilter = async (e) => {
    try {
      const values = await formGender.validateFields();
      const filteredData = data?.filter(
        (item, index) => item?.gender === values?.gender
      );

      if (filteredData) {
        setFilterData(filteredData);
      } else {
        setFilterData(data);
      }

      console.log("filteredData", filteredData);
      console.log("values", values?.gender);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div className="filter-wrapper">
              <Form
                className="form-input-item"
                form={formGender}
                layout="vertical"
              >
                <Form.Item
                  label=""
                  name="gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Gender"
                    onChange={handleGenderFilter}
                  >
                    <Option selected value="male">
                      male
                    </Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </Form>
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col">StudentId</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>

                  <th scope="col">Student Id</th>
                  <th scope="col">Image</th>
                  {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                    <th scope="col">Action</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {filterData
                  ? filterData?.map((el, ind) => {
                      return (
                        <tr key={ind}>
                          <td>{el?.studentId}</td>
                          <td>{el?.name}</td>
                          <td>{el?.email}</td>
                          <td>{el?.phoneNumber}</td>
                          <td>{el?.gender}</td>
                          <td>{el?.address}</td>
                          <td className="data-show-img">
                            <img src={`/uploads/${el?.file}`} alt="" />
                          </td>
                          {logedinData?.roles?.join("").toString() ===
                            "ROLE_ADMIN" && (
                            <td>
                              <div className="d-flex">
                                <Button
                                  //   onClick={() => showDetailsModal(el?._id)}
                                  type="primary"
                                  ghost
                                >
                                  Details
                                </Button>

                                <Button
                                  onClick={() => showModal(el?._id)}
                                  type="primary"
                                  ghost
                                  className="mx-2"
                                >
                                  Edit
                                </Button>

                                <Button
                                  onClick={() => deleteStudent(el?._id)}
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
                    })
                  : data?.map((el, ind) => {
                      return (
                        <tr key={ind}>
                          <td>{el?.studentId}</td>
                          <td>{el?.name}</td>
                          <td>{el?.email}</td>
                          <td>{el?.phoneNumber}</td>
                          <td>{el?.gender}</td>
                          <td>{el?.address}</td>
                          <td className="data-show-img">
                            <img src={`/uploads/${el?.file}`} alt="" />
                          </td>
                          {logedinData?.roles?.join("").toString() ===
                            "ROLE_ADMIN" && (
                            <td>
                              <div className="d-flex">
                                <Button
                                  //   onClick={() => showDetailsModal(el?._id)}
                                  type="primary"
                                  ghost
                                >
                                  Details
                                </Button>

                                <Button
                                  onClick={() => showModal(el?._id)}
                                  type="primary"
                                  ghost
                                  className="mx-2"
                                >
                                  Edit
                                </Button>

                                <Button
                                  onClick={() => deleteStudent(el?._id)}
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

export default StudentList;
