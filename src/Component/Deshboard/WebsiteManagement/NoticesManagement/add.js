import { Button, Form, Input, Modal, Upload, Select } from "antd";
import React, { useState } from "react";
import { AppstoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const AddSlide = (props) => {
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
      formData.append("name", values?.name);
      formData.append("email", values?.email);
      formData.append("phoneNumber", values?.phoneNumber);
      formData.append("gender", values?.gender);
      formData.append("teacherId", values?.teacherId);
      formData.append("address", values?.address);
      formData.append("subject", values?.subject);
      formData.append("qualifications", values?.qualifications);
      formData.append("designation", values?.designation);

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
          Notices Management
        </div>
        <div>
          <Button
            onClick={showModal}
            type="primary"
            ghost
            className="custom-button"
          >
            <PlusCircleOutlined />
            Add Slide
          </Button>
        </div>
      </div>
      <hr style={{ height: "0.5px" }} className="mt-2" />

      <Modal
        title="Add New Slide"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={false}
      >
        <div className="form-area mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <Form className="form-input-item" form={form} layout="vertical">
                  <Form.Item
                    name="topTitle"
                    label="Top Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input the top title!",
                      },
                    ]}
                  >
                    <Input placeholder="Top title" />
                  </Form.Item>
                  <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input the title!",
                      },
                    ]}
                  >
                    <Input placeholder="Title" />
                  </Form.Item>
                  <Form.Item
                    name="subTitle"
                    label="Sub Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input the sub title!",
                      },
                    ]}
                  >
                    <Input placeholder="Sub Title" />
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
                    <Button type="primary" ghost onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddSlide;
