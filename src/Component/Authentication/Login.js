import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { useState } from "react";
function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const sendDatatoApp = async () => {
    const values = await form.validateFields();

    try {
      let res = await axios.post("http://localhost:8080/api/auth/signin", {
        username: values?.username,
        password: values?.password,
      });

      if (res?.status === 200) {
        console.log(res?.data, "response login");
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res?.data?.accessToken)
        );

        localStorage.setItem("logedinData", JSON.stringify(res?.data));

        navigate("/deshboard");
      }

      console.log(res, "success result");
    } catch (er) {
      console.log(er?.response?.data?.message);
      setErrorMsg(er?.response?.data?.message);
    }
  };

  const [form] = Form.useForm();

  return (
    <>
      <div class="admin-deshboard-login-area">
        <div class="container">
          <div className="grid grid-cols-1">
            <div className="shadow bg-[white] primary-card-padding primary-border-radius">
            <div className="login-area mb-4">
              <h4>Log in</h4>
            </div>
            <Form onSubmit={sendDatatoApp} form={form} layout="vertical">
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

              <p className="text-danger">{errorMsg}</p>

              <Form.Item>
                <button
                  onClick={sendDatatoApp}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                >
                  Login
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

export default Login;
//hii
