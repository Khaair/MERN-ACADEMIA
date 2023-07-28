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
          "userAccessToken",
          JSON.stringify(res?.data?.accessToken)
        );
        localStorage.setItem("userLogedinData", JSON.stringify(res?.data));
        navigate("/student-profile");

        // try {
        //   const values = await form.validateFields();
        //   const formData = new FormData();
        //   formData.append("name", res?.data?.name);
        //   formData.append("email", res?.data?.email);
        //   formData.append("phoneNumber", values.phoneNumber);
        //   formData.append("courseId", values.courseId);
        //   formData.append("dob", values.dob);
        //   formData.append("address", values.address);
        //   formData.append("gender", values.gender);
        //   formData.append("file", {
        //     uid: "rc-upload-1690571840918-3",
        //     name: "profile-pic.png",
        //     lastModified: 1689584335087,
        //   });
        //   const res = await fetch(
        //     "http://localhost:8080/api/student-manage/student-save",
        //     {
        //       method: "POST",
        //       body: formData,
        //     }
        //   );
        //   const data = await res.json();
        //   if (data?.status === "200") {
        //     console.log("save data successfully", data);
        //   }
        //   console.log("data", data);
        // } catch (errorInfo) {
        //   console.log("Failed:", errorInfo);
        // }
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
          <div className="row">
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
    </>
  );
}

export default Login;
