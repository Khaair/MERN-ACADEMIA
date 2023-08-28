import { useEffect, useState } from "react";
import Layout from "../layout";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { notification } from "antd";

function AboutUsManagement() {
  const [logedinData, setLogedinData] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [form] = Form.useForm();
  const fetchdata = async () => {
    try {
      const responseData = await axios.get(
        "http://localhost:8080/api/school-about-us/school-about-us-show"
      );
      setData(responseData?.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    const storedLogedinData = localStorage.getItem("logedinData");
    const fetchLogedinData = JSON.parse(storedLogedinData);
    setLogedinData(fetchLogedinData);
    fetchdata();
  }, []);

  const openNotification = (msg) => {
    console.log("message", msg);
    msg &&
      notification.open({
        message: msg,
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = await form.validateFields();

    try {
      const response = await fetch(
        "http://localhost:8080/api/school-about-us/school-about-us-save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            title: values?.title,
            description: values?.description,
          }),
        }
      );

      const responseData = await response.json();
      if (responseData?.status === "200") {
        openNotification(responseData?.message);
        fetchdata();
      }
      console.log(responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      title: data[0]?.title,
      description: data[0]?.description,
    });
    setId(data[0]?._id);
  }, [data, form]);

  return (
    <Layout>
      <div class="academia-management-area">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              {logedinData?.roles?.join("").toString() === "ROLE_ADMIN" && (
                <>
                  <div class="add-student-wrapper pt-3">
                    <div className="card-title custom-button">
                      <AppstoreOutlined style={{ fontSize: "20px" }} />
                      About us management
                    </div>
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
                              <div class="col-lg-12">
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
                                  label="Description"
                                  name="description"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input the description!",
                                    },
                                  ]}
                                >
                                  <Input.TextArea
                                    className="other-type-input"
                                    rows={3}
                                    placeholder="Description"
                                    style={{ height: "200px" }}
                                  />
                                </Form.Item>
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
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUsManagement;
