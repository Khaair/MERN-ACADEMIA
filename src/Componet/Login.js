import axios from "axios";
import { useState } from "react";
import { Col, Row } from "antd";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const sendDatatoApp = async () => {
    try {
      let res = await axios.post("http://localhost:8080/api/auth/signin", {
        username,
        password,
      });

      if (res?.status === 200) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res?.data?.accessToken)
        );

        navigate("/deshboard");
      }

      console.log(res, "success result");
    } catch (er) {
      console.log(er?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="login-area mt-5">
        <div className="container">
          <div className="login-card">
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <h4>Login here</h4>
                </div>
                <form action="">
                  <div className="form-group mt-3">
                    <label htmlFor="">Enter User Name</label>
                    <input
                      className="form-control mt-2"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="mt-2" htmlFor="">
                      Enter Password
                    </label>
                    <input
                      className="form-control mt-2"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div className="save-btn-area">
                    <button
                      className="btn btn-primary mt-3"
                      type="button"
                      onClick={sendDatatoApp}
                    >
                      Login{" "}
                    </button>
                  </div>
                </form>
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

export default Login;
