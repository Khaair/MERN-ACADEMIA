import axios from "axios";
import SignUp from "./signup";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import Login from "./login";
import Layout from "../Layout";
function UserAuth() {
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
      <Layout>
        <div className="login-area pt-[100px]  pb-[100px]">
          <div className="bootstrap-container flex justify-center">
            <div className="shadow-lg p-4 w-1/2  bg-[#F0FBFC] rounded">
              <div className="row">
                <div className="col-lg-12">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UserAuth;
