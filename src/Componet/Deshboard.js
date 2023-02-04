import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import { Form, Input, Upload, Button, notification, Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import EditForm from "./EditForm";

function Deshboard({ datas, DeleteFn }) {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [studentId, setStudentId] = useState();

  const [form] = Form.useForm();
  const fetchdata = async () => {
    try {
      const datahere = await axios.get("http://localhost:8080/api/show");
      setData(datahere.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

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

  const deleteMe = async (id) => {
    try {
      let mydata = await axios.delete(`http://localhost:8080/api/delete/${id}`);
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      setData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

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
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("body", values.body);
      formData.append("file", values.file[0].originFileObj);

      const res = await fetch("http://localhost:8080/api/save", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data?.status === "200") {
        openNotification();
        fetchdata();
        setIsModalOpen(false);
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);

    fetchdata();
  };

  const showEditModal = (idd) => {
    setIsEditModalOpen(true);
    setStudentId(idd);
  };

  return (
    <Layout>
      <div class="student-management-area">
        <div className="container mt-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="add-student-wrapper mb-3 ">
                <Button onClick={showModal} type="primary" ghost>
                  Add Student
                </Button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">Image</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {JSON.stringify(datas)} */}

                    {data.map((el, ind) => {
                      // const images = require.context(`../uploads/${el?.file}`, true);

                      return (
                        <tr key={ind}>
                          <th scope="row">{ind + 1}</th>
                          <td>{el?.title}</td>
                          <td>{el?.author}</td>
                          <td>{el?.body}</td>
                          <td className="data-show-img">
                            <img src={`/uploads/${el?.file}`} alt="" />
                          </td>
                          <td>
                            <div className="d-flex">
                              <Button
                                onClick={() => showEditModal(el?._id)}
                                type="primary"
                                ghost
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={() => deleteMe(el._id)}
                                type="primary"
                                ghost
                                className="mx-2"
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Modal
          title="Update Student Info"
          open={isEditModalOpen}
          onOk={handleEditOk}
          onCancel={handleEditCancel}
          width={600}
          footer={false}
        >
          <EditForm studentId={studentId} />
        </Modal>

        <Modal
          title="Add New Student"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={600}
          footer={false}
        >
          <>
            {contextHolder}

            <div className="form-area mt-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 card">
                    <Form form={form}>
                      <Form.Item
                        name="title"
                        label="Full Name"
                        rules={[
                          {
                            required: true,
                            message: "Please input the fullname!",
                          },
                        ]}
                      >
                        <Input placeholder="Full Name" />
                      </Form.Item>
                      <Form.Item
                        label="Phone No"
                        name="author"
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
                        label="Addres"
                        name="body"
                        rules={[
                          {
                            required: true,
                            message: "Please input the Address!",
                          },
                        ]}
                      >
                        <Input.TextArea rows={3} placeholder="Address" />
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
                        <Button type="primary" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </Layout>
  );
}

export default Deshboard;
