import { useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Upload } from "antd";

const EditForm = (props) => {
  const [form] = Form.useForm();

  const id = props?.studentId;

  const fetchdata = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/api/show-single/${id}`
      );

      form.setFieldsValue({
        fullName: data.data.fullName,
        phoneNumber: data.data.phoneNumber,
        address: data.data.address,
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("address", values.address);
      formData.append("file", values.file[0].originFileObj);

      const res = await fetch(`http://localhost:8080/api/update/${id}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data?.status === "200") {
        fetchdata();
      }
      console.log("data", data);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item
          name="fullName"
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
          label="Addres"
          name="address"
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
          <Button type="primary" ghost onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditForm;
