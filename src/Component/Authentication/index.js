import axios from "axios";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { useState } from "react";
import Login from "./Login";
function Auth() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const sendDatatoApp = async () => {
    const values = await form.validateFields();

    console.log("values", values);
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

        console.log("res", res);

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
      <div className="login-area mt-5">
        <div className="container">
          <div className="login-card">
            <div className="row">
              <div className="col-lg-6">
                <Login />
              </div>
              <div class="col-lg-6">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
