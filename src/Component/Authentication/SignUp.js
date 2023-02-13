import { Select } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { notification } from "antd";
import { Button, Form, Input } from "antd";

export default function SignUp() {
  const [selectvalue, setSelectValue] = useState("user");

  const [errorMsg, setErrorMsg] = useState([]);
  const [matchedEmailerrorMsg, setMatchedEmailErrorMsg] = useState("");
  const [matchedUsererrorMsg, setMatchedUserErrorMsg] = useState("");
  const [matchederrorMsg, setMatchedErrorMsg] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const handleChange = (newValue) => {
    setSelectValue(newValue);
  };

  console.log("selectvalue", selectvalue);
  const sendDatatoApp = async () => {
    const values = await form.validateFields();

    try {
      let res = await axios.post("http://localhost:8080/api/auth/signup", {
        username: values?.username,
        email: values?.email,
        password: values?.password,
        roles: [selectvalue],
      });

      if (res.status === 200) {
        console.log("res signup", res);
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
        // setErrorMsg(er?.response?.data?.message?.keyValue?.username);
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
    <>
      <div className="sign-up-area">
        {contextHolder}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-area mb-4">
                <h4>Register</h4>
              </div>

              <Form form={form} layout="vertical">
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

                <div class="select-partner-type mt-3">
                  <Form.Item label="Select User " name="usertype">
                    <Select
                      value={selectvalue}
                      onChange={handleChange}
                      showSearch
                      style={{
                        width: 200,
                      }}
                      placeholder="Search to Select"
                      defaultValue="user"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "user",
                          label: "User",
                        },
                        {
                          value: "moderator",
                          label: "Moderator",
                        },
                        {
                          value: "admin",
                          label: "Admin",
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
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
    </>
  );
}
