import axios from "axios";
import React, { useState } from "react";
import { Form, Input } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

export default function TeacherReg() {
  const [errorMsg, setErrorMsg] = useState([]);
  const [matchedEmailerrorMsg, setMatchedEmailErrorMsg] = useState("");
  const [matchedUsererrorMsg, setMatchedUserErrorMsg] = useState("");
  const [matchederrorMsg, setMatchedErrorMsg] = useState("");

  const sendDatatoApp = async () => {
    const values = await form.validateFields();
    try {
      let res = await axios.post("http://localhost:8080/api/auth/signup", {
        username: values?.username,
        email: values?.email,
        password: values?.password,
        roles: ["moderator"],
      });
      if (res.status === 200) {
        localStorage.removeItem("teacherRegId");
        localStorage.setItem("teacherRegId", JSON.stringify(res?.data?._id));
        setErrorMsg([]);
        setMatchedErrorMsg("Registration successful");
        setMatchedUserErrorMsg("");
        setMatchedEmailErrorMsg("");
      } else {
        console.log("res signup", res);
        setErrorMsg(res.status);
      }

      console.log(res, "res signup");
    } catch (er) {
      if (er) {
        setErrorMsg(er?.response?.data?.errors);
        if (er?.response?.data?.message?.keyValue?.username) {
          setMatchedUserErrorMsg("User name already registered");
          setMatchedEmailErrorMsg("");
        }

        if (er?.response?.data?.message?.keyValue?.email) {
          setMatchedEmailErrorMsg("Email already registered");
          setMatchedUserErrorMsg("");
        }
        console.log("error msg", er?.response?.data?.message?.keyValue?.email);
      }
    }
  };
  const [form] = Form.useForm();
  return (
    <div>
      <div class="add-student-wrapper">
        <div className="card-title custom-button">
          <AppstoreOutlined style={{ fontSize: "20px" }} />
          <div class="ml-5">Teacher Registration</div>
        </div>
      </div>
      <hr style={{ height: "0.5px" }} className="mt-2" />
      <div class="form-area mt-3 mb-2">
        <div class="row">
          <div class="col-lg-12">
            <Form className="form-input-item" form={form} layout="vertical">
              <Form.Item
                name="username"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the username!",
                  },
                ]}
              >
                <Input placeholder="User Name" />
              </Form.Item>
              <p className="text-danger ">{matchedUsererrorMsg}</p>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input the email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <p className="text-danger ">{matchedEmailerrorMsg}</p>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input the password!",
                  },
                ]}
              >
                <Input placeholder="Password" />
              </Form.Item>

              {errorMsg?.map((item, index) => {
                return <p className="text-danger mt-2">{item?.msg}</p>;
              })}

              <p className="text-danger mt-3">{matchederrorMsg}</p>

              <Form.Item className="mt-3">
                <button
                  onClick={sendDatatoApp}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                >
                  Signup
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
