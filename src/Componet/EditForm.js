import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button } from "antd";
import Layout from "../layout";

const EditForm = (props) => {
  const [form] = Form.useForm();

  const id = props?.studentId;
  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/api/show-single/${id}`
      );

      form.setFieldsValue({
        title: data.data.title,
        author: data.data.author,
        body: data.data.body,
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  const onFinish = async (values) => {
    try {
      await axios.post(`http://localhost:8080/api/update/${id}`, {
        title: values.title,
        author: values.author,
        body: values.body,
      });
    } catch (er) {
      console.log(er);
    }

    navigate("/deshboard");
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please enter  fullname!",
            },
          ]}
        >
          <Input placeholder="Enter fullname" />
        </Form.Item>
        <Form.Item
          name="author"
          label="Phone No"
          rules={[
            {
              required: true,
              message: "Please enter phone number!",
            },
          ]}
        >
          <Input placeholder="phone number" />
        </Form.Item>
        <Form.Item
          name="body"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please enter address!",
            },
          ]}
        >
          <Input placeholder="Enter address" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditForm;
