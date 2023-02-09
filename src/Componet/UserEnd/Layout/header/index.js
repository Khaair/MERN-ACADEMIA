import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="menubar-area  bg-white  sticky-top navbar-light">
        <div class="bootstrap-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="menubar-logo">
                  <Link to="/home">
                    <img src="/uploads/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="menubar-content">
                  <ul>
                    <Link to="/home">
                      {" "}
                      <li role="button">Home</li>{" "}
                    </Link>
                    <Link to="/profile">
                      <li role="button">Profile</li>
                    </Link>
                    <li role="button">Admission</li>

                    <li role="button"> Skills</li>
                    <li role="button">Log in</li>
                    <li role="button">
                      <Link to="/">
                        <Avatar size={30} icon={<UserOutlined />} />
                      </Link>
                    </li>
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
