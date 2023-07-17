import { Button, Form, Input, Modal, Upload } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TeacherList = ({ logedinData, data, fetchdata, fetchSetData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleID, setSingleId] = useState("");
  const [form] = Form.useForm();

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
        `http://localhost:8080/api/teacher-manage/show-single-teacher/${id}`
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("teacherId", values.teacherId);
      formData.append("address", values.address);
      formData.append("subject", values.subject);
      formData.append("qualifications", values.qualifications);
      formData.append("designation", values.designation);
      formData.append("file", values.file[0].originFileObj);
      const res = await fetch(
        `http://localhost:8080/api/teacher-manage/update-teacher/${singleID}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log("data up", data);
      if (data?.info === "updated") {
        handleOk();
        fetchdata();
      }

      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const deleteMe = async (id) => {
    try {
      let mydata = await axios.delete(
        `http://localhost:8080/api/teacher-manage/delete-teacher/${id}`
      );
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      fetchSetData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <table>
              <thead>
                <tr>
                  <th scope="col">Sl</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Teacher Id</th>
                  <th scope="col">Address</th>
                  <th scope="col">Image</th>
                  {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                    <th scope="col">Action</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data?.map((el, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{ind + 1}</td>
                      <td>{el?.name}</td>
                      <td>{el?.email}</td>
                      <td>{el?.phoneNumber}</td>
                      <td>{el?.teacherId}</td>
                      <td>{el?.address}</td>
                      <td className="data-show-img">
                        <img src={`/uploads/${el?.file}`} alt="" />
                      </td>
                      {logedinData?.roles?.join("").toString() ===
                        "ROLE_ADMIN" && (
                        <td>
                          <div className="d-flex">
                            <Button
                              onClick={() => showModal(el?._id)}
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
        <Modal
          title="Add New Teacher"
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
                            label="Teacher Id"
                            name="teacherId"
                            rules={[
                              {
                                required: true,
                                message: "Please input the teacherId!",
                              },
                            ]}
                          >
                            <Input placeholder="teacherId" />
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
                            <Button type="primary" ghost onClick={handleUpdate}>
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
    </>
  );
};

export default TeacherList;
