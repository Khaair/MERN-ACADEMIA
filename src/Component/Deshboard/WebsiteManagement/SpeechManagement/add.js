import { Button, Form, Input, Modal, Upload, Select } from "antd";
import React, { useState } from "react";
import { AppstoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
const { Option } = Select;

const AddSpeech = (props) => {
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
      formData.append("title", values?.title);
      formData.append("message", values?.message);
      formData.append("name", values?.name);
      formData.append("gender", values?.gender);
      formData.append("designation", values?.designation);
      formData.append("position", values?.position);

      formData.append("file", values?.file[0].originFileObj);
      const res = await fetch(
        `${process.env.REACT_APP_COURSE}/speech-manage/speech-save`,
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
          <div class="ml-5">Speech Management</div>
        </div>
        <div>
          <Button
            onClick={showModal}
            type="primary"
            ghost
            className="custom-button"
          >
            <PlusCircleOutlined />
            Add Speech
          </Button>
        </div>
      </div>
      <hr style={{ height: "0.5px" }} className="mt-2" />

      <Modal
        title="Add New Speech"
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
                    name="title"
                    label="Title"
                    rules={[
                      {
                        required: true,
                        message: "Please input the top title!",
                      },
                    ]}
                  >
                    <Input placeholder="Title" />
                  </Form.Item>
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
                    name="designation"
                    label="Designation"
                    rules={[
                      {
                        required: true,
                        message: "Please input the designation!",
                      },
                    ]}
                  >
                    <Input placeholder="Designation" />
                  </Form.Item>

                  <Form.Item
                    name="position"
                    label="Position"
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
                    name="message"
                    label="Message"
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

export default AddSpeech;
