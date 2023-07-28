import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const userLogedinData = localStorage.getItem("userLogedinData");
    const fetchLogedinData = JSON.parse(userLogedinData);
    setUserData(fetchLogedinData);
    console.log("userLogedinData", userLogedinData);
  }, []);

  return (
    <>
      <div className="menubar-area  bg-white  sticky-top navbar-light">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="menubar-logo">
                  <Link to="/">
                    <img src="/uploads/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="menubar-content">
                  <ul>
                    <Link to="/">
                      {" "}
                      <li role="button">Home</li>{" "}
                    </Link>

                    <Link to="/">
                      <li role="button">About</li>
                    </Link>
                    <Link to="/">
                      <li role="button">Contact</li>
                    </Link>
                    <li role="button"></li>

                    {userData ? (
                      <Link to="/student-profile">
                        <li role="button">
                          <Avatar size={30} icon={<UserOutlined />} />
                        </li>
                      </Link>
                    ) : (
                      <Link to="/user-auth">
                        <li role="button">Log in</li>
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
