import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { UserOutlined, BorderInnerOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <React.Fragment>
      <div class="layer-area">
        <div className="row">
          <div className="nabar-area">
            <nav className="navv">
              <div className="top-navbar-wrapper">
                <div className="accademia-logo">
                  <img src="/uploads/academia-logo-transparent.png" alt="" />
                </div>

                <div>
                  <Button type="primary" ghost>
                    Blog
                  </Button>
                  <Button className="mx-2" type="primary" ghost>
                    Info
                  </Button>
                  <Button onClick={handleLogOut} type="primary" ghost>
                    Logout
                  </Button>
                </div>
              </div>
            </nav>
          </div>
          <div className="sub-nabar-area shadow-sm ">
            <nav className="navv">
              <div className="title-deshboard-wrapper text-bold text-primary">
                <div>
                  <BorderInnerOutlined />
                </div>
                <div className="mx-2 mt-1">Deshboard</div>
              </div>
            </nav>
          </div>

          <div class="sidebar-area">
            <div class="row">
              <div class="col-lg-2 deshboard-sidebar">
                <div className="mt-5">
                  <ul>
                    <li>
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Student Management
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">User Management</Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/student-manage" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Student Management 2
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Staff Management
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Course Management
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Billing and Fees
                        </Space>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link to="/deshboard" className="ll d-flex">
                        <UserOutlined />
                        <Space className="mx-2 click-me">
                          Reporting and Analytics
                        </Space>
                      </Link>
                    </li>

                    <li className="ll d-flex">
                      <Dropdown menu={{ items }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <UserOutlined />
                          <Space className="mx-2 click-me">Click me</Space>
                        </a>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-10 children-deshboard">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
