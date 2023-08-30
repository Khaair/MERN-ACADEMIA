import React from "react";
import Layout from "../Layout";
import {
  HomeOutlined,
  UserOutlined,
  GlobalOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { notification } from "antd";

const Contact = () => {
  const [form] = Form.useForm();

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
            title: values?.title,
            description: values?.description,
          }),
        }
      );

      const responseData = await response.json();
      if (responseData?.status === "200") {
        openNotification(responseData?.message);
      }
      console.log(responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Layout>
      <div class="career-goal-title-area bg-[url('/uploads/header-image.jpg')] flex text-center items-center justify-center h-[170px] bg-center bg-no-repeat bg-cover">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 className="text-white">Contact</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="our-facilities-area pt-[100px]">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-10px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <UserOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Location</h3>
                  <h6 className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-20px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <GlobalOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Our Email</h3>
                  <h6 className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-20px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <HomeOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Phone number</h3>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
              <div class="col-lg-3 mb-3">
                <div className="relative text-[#06BBCC]  hover:top-[-20px] p-3 bg-[#f0fbfc] hover:bg-[#06BBCC] hover:transition-all hover:duration-500 hover:linear hover:text-white  rounded text-center ">
                  <BookOutlined style={{ fontSize: "70px" }} />
                  <h3 className="mt-3">Book Library</h3>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maxime doloremque nemo eum ipsum labore iusto, amet
                    voluptate beatae laudantium asperiores{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-area">
        <div class="bootstrap-container">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <Form className="form-input-item" form={form} layout="vertical">
                  <div class="row">
                    <div class="col-lg-12">
                      <Form.Item
                        name="title"
                        label="Name"
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
                        name="title"
                        label="Email"
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
                        label="Your Message"
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
                        <Button type="primary" ghost onClick={handleSubmit}>
                          Submit
                        </Button>
                      </Form.Item>
                    </div>
                  </div>
                </Form>
              </div>
              <div class="col-lg-6 mt-2">
                <iframe
                  className="w-full"
                  height="385"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930221.8159380344!2d89.52504414978591!3d24.3924688675575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d61689bedad9%3A0x1503d6a7e692f867!2zU2hlcnB1ciBHb3Z0LiBDb2xsZWdlICjgprbgp4fgprDgpqrgp4HgprAg4Ka44Kaw4KaV4Ka-4Kaw4Ka_IOCmleCmsuCnh-CmnCk!5e0!3m2!1sen!2sbd!4v1693221536707!5m2!1sen!2sbd"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
